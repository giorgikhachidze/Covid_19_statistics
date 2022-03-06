<?php

namespace App\Repositories;

use App\Interfaces\StatisticRepositoryInterface;
use App\Models\Statistic;
use Illuminate\Pipeline\Pipeline;

class StatisticRepository implements StatisticRepositoryInterface
{
    /**
     * @return mixed
     */
    public function filter() : mixed
    {
        $pipeline = app(Pipeline::class)
            ->send(Statistic::query())
            ->through([
                \App\QueryFilters\Sort::class,
                \App\QueryFilters\Search::class,
            ])
            ->thenReturn();

        return $pipeline->get();
    }

    /**
     * @return mixed
     */
    public function summary() : mixed
    {
        $pipeline = app(Pipeline::class)
            ->send(Statistic::query())
            ->through([
                \App\QueryFilters\Summary::class,
            ])
            ->thenReturn();

        return $pipeline->first();
    }
}

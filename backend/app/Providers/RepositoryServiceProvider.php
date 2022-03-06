<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\StatisticRepository;
use App\Interfaces\StatisticRepositoryInterface;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(StatisticRepositoryInterface::class, StatisticRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}

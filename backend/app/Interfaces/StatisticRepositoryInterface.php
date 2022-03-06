<?php

namespace App\Interfaces;

interface StatisticRepositoryInterface
{
    /**
     * @return mixed
     */
    public function filter(): mixed;

    /**
     * @return mixed
     */
    public function summary(): mixed;
}

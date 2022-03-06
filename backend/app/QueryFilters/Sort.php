<?php

namespace App\QueryFilters;

use Closure;

class Sort
{
    /**
     * @param         $builder
     * @param Closure $next
     * @return mixed
     */
    public function handle($builder, Closure $next): mixed
    {
        $column    = request()->column ?? null;
        $direction = request()->direction ?? 'desc';

        return $next($builder)->when($column, function ($query) use ($column, $direction) {
            $query->orderBy($column, $direction);
        });
    }
}

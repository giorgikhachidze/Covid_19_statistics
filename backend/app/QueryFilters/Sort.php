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
        $sortColumn    = request()->sortColumn ?? null;
        $sortDirection = request()->sortDirection ?? 'desc';

        return $next($builder)->when($sortColumn, function ($query) use ($sortColumn, $sortDirection) {
            $query->orderBy($sortColumn, $sortDirection);
        });
    }
}

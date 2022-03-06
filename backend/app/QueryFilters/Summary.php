<?php

namespace App\QueryFilters;

use Closure;

class Summary
{
    /**
     * @param         $builder
     * @param Closure $next
     * @return mixed
     */
    public function handle($builder, Closure $next): mixed
    {
        return $next($builder)
            ->selectRaw("SUM(confirmed) as confirmed, SUM(recovered) as recovered , SUM(death) as death");
    }
}

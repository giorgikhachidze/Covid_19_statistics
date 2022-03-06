<?php

namespace App\QueryFilters;

use Closure;

class Search
{
    /**
     * @param         $builder
     * @param Closure $next
     * @return mixed
     */
    public function handle($builder, Closure $next): mixed
    {
        $search = request()->search ?? null;

        return $next($builder)->when($search, function ($query) use ($search) {
            $searchQuery = '%' . $search . '%';
            $query->where('confirmed', 'like', $searchQuery)
                ->orWhere('confirmed', 'like', $searchQuery)
                ->orWhere('recovered', 'like', $searchQuery)
                ->orWhere('death', 'like', $searchQuery)
                ->orWhereHas('country', function ($query) use ($searchQuery) {
                    $query->where('name', 'like', $searchQuery);
                });
        });
    }
}

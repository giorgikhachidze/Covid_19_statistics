<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Interfaces\StatisticRepositoryInterface;
use Illuminate\Http\JsonResponse;

class StatisticController extends Controller
{
    /**
     * @var StatisticRepositoryInterface
     */
    private StatisticRepositoryInterface $statisticRepository;

    /**
     * @param StatisticRepositoryInterface $statisticRepository
     */
    public function __construct(StatisticRepositoryInterface $statisticRepository)
    {
        $this->statisticRepository = $statisticRepository;
    }

    /**
     * @return JsonResponse
     */
    public function filter(): JsonResponse
    {
        $statistics = $this->statisticRepository->filter();

        return response()->json([
            'data' => $statistics
        ]);
    }
}

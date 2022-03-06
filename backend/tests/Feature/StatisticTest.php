<?php

namespace Tests\Feature;

use App\Models\Statistic;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class StatisticTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @return void
     */
    public function test_statistics_filter_route_is_secure()
    {
        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->get('api/statistics/filter');

        $response->assertUnauthorized();
    }

    /**
     * @return void
     */
    public function test_statistics_filter_route_with_all_parameters()
    {
        $count          = 100;
        $sortColumns    = ['confirmed', 'recovered', 'death'];
        $sortDirections = ['descending', 'ascending'];

        // Create fake statistic and user who can access route...
        Statistic::factory()->count($count)->create();

        $user        = User::factory()->create();
        $accessToken = $user->createToken('test')->plainTextToken;
        $response    = $this->withHeaders([
            'Authorization' => 'Bearer ' . $accessToken,
            'Accept'        => 'application/json'
        ])->get('api/statistics/filter');

        $response->assertOk();
        $response->assertJsonCount($count, "data");

        // Foreach columns and sort directions, check if created data equal response data...
        foreach ($sortColumns as $sortColumn) {
            foreach ($sortDirections as $sortDirection) {
                $response = $this->withHeaders([
                    'Authorization' => 'Bearer ' . $accessToken,
                    'Accept'        => 'application/json'
                ])->get('api/statistics/filter', [
                    'sortColumn'    => $sortColumn,
                    'sortDirection' => $sortDirection
                ]);
                $response->assertOk();
            }
        }
    }

    /**
     * @return void
     */
    public function test_statistics_summary_route_is_secure()
    {
        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->get('api/statistics/summary');

        $response->assertUnauthorized();
    }

    /**
     * @return void
     */
    public function test_statistics_summary_route()
    {
        $count = 100;
        // Create fake statistic and user who can access route...
        Statistic::factory()->count($count)->create();
        $user        = User::factory()->create();
        $accessToken = $user->createToken('test')->plainTextToken;

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $accessToken,
            'Accept'        => 'application/json'
        ])->get('api/statistics/summary');

        $response->assertOk();
        $response->assertJsonStructure([
            'data' => [
                'confirmed',
                'recovered',
                'death'
            ]
        ]);
    }
}

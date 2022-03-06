<?php

namespace Database\Factories;

use App\Models\Country;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class StatisticFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $country = Country::factory()->create();
        return [
            'country_id' => $country->id,
            'confirmed' => rand(1000, 5000),
            'recovered' => rand(1000, 5000),
            "death" => rand(1000, 5000)
        ];
    }
}

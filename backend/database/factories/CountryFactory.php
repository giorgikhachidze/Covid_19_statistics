<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class CountryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'code' => $this->faker->countryCode(),
            'name' => json_encode([
                $this->faker->locale => $this->faker->country,
                $this->faker->locale => $this->faker->country,
            ])
        ];
    }
}

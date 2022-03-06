<?php

namespace Database\Factories;

use App\Models\Locale;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory
 */
class LocalizationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $locale = Locale::factory()->create();

        return [
            'locale_id' => $locale->id,
            'key' => $this->faker->word(),
            'value' => Str::ucfirst($this->faker->word())
        ];
    }
}

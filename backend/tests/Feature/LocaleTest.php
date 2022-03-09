<?php

namespace Tests\Feature;

use App\Models\Locale;
use App\Models\Localization;
use Database\Factories\LocalizationFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

/**
 * @extends Factory<Localization>
 */
class LocaleTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_locale_with_localization_route()
    {
        Localization::factory()->count(10)->create();

        $locales = Locale::all();

        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->get('api/locales');

        $response->assertOk();

        foreach($locales as $locale) {
            $response = $this->withHeaders([
                'Accept' => 'application/json'
            ])->get('api/locale/'.$locale->code.'/translations');

            $response->assertOk();
        }
    }
}

<?php

namespace Tests\Feature;

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

        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->get('api/locale');

        $response->assertOk();
        $response->assertJsonStructure([
            'data' => [[
                'id',
                'code',
                'description',
                'localizations'
            ]]
        ]);
    }
}

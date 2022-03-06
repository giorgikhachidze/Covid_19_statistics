<?php

namespace Database\Seeders;

use App\Http\Api\Covid;
use App\Models\Country;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Database\Seeder;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * @throws GuzzleException
     */
    public function run(Covid $covidApi)
    {
        $countries = $covidApi->getCountries();

        foreach ($countries as $country) {
            Country::insert([
                "code" => $country['code'],
                "name" => json_encode($country['name'])
            ]);
        }
    }
}

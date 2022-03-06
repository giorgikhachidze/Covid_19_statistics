<?php

namespace Database\Seeders;

use App\Models\Locale;
use App\Models\Localization;
use Illuminate\Database\Seeder;

class LocalizationSeeder extends Seeder
{
    private array $localizations = [
        "en" => [
            [
                "key" => "search",
                "value" => "Search"
            ],
            [
                "key" => "ascending",
                "value" => "Ascending"
            ],
            [
                "key" => "descending",
                "value" => "Descending"
            ],
            [
                "key" => "country",
                "value" => "Country"
            ],
            [
                "key" => "recovered",
                "value" => "Recovered"
            ],
            [
                "key" => "death",
                "value" => "Death"
            ],
            [
                "key" => "confirmed",
                "value" => "Confirmed"
            ],

        ],
        "ka" => [
            [
                "key" => "search",
                "value" => "ძიება"
            ],
            [
                "key" => "ascending",
                "value" => "ზრდადობით"
            ],
            [
                "key" => "descending",
                "value" => "კლებადობით"
            ],
            [
                "key" => "country",
                "value" => "ქვეყანა"
            ],
            [
                "key" => "recovered",
                "value" => "გამოჯანმრთელებული"
            ],
            [
                "key" => "death",
                "value" => "გარდაცვლილი"
            ],
            [
                "key" => "confirmed",
                "value" => "დადასტურებული"
            ],

        ],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (!Localization::exists()) {
            $locales = Locale::all();

            foreach ($locales as $locale) {
                foreach($this->localizations[$locale->code] as $item){
                    $localization = new Localization;
                    $localization->locale_id = $locale->id;
                    $localization->key = $item['key'];
                    $localization->value = $item['value'];
                    $localization->save();
                }
            }
        }
    }
}

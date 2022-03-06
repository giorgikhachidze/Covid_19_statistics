<?php

namespace Database\Seeders;

use App\Models\Locale;
use Illuminate\Database\Seeder;

class LocaleSeeder extends Seeder
{
    private array $locales = [
        [
            "code" => "en",
            "description" => "English"
        ],
        [
            "code" => "ka",
            "description" => "ქართული"
        ],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (!Locale::exists()) {
            Locale::insert($this->locales);
        }
    }
}

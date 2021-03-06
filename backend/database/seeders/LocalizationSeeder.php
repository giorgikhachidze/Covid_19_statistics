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
                "key" => "login",
                "value" => "Login"
            ],
            [
                "key" => "authorization",
                "value" => "Authorization"
            ],
            [
                "key" => "register",
                "value" => "Register"
            ],
            [
                "key" => "registration",
                "value" => "Registration"
            ],
            [
                "key" => "name",
                "value" => "Full Name"
            ],
            [
                "key" => "email",
                "value" => "Email"
            ],
            [
                "key" => "password",
                "value" => "Password"
            ],
            [
                "key" => "password_confirmation",
                "value" => "Password confirmation"
            ],
            [
                "key" => "search",
                "value" => "Search..."
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
            [
                "key" => "all.recovered",
                "value" => "All recovered"
            ],
            [
                "key" => "all.death",
                "value" => "All Death"
            ],
            [
                "key" => "all.confirmed",
                "value" => "All confirmed"
            ],
            [
                "key" => "authorization.text",
                "value" => "Enter your e-mail and password to see covid 19 statistics page."
            ],
            [
                "key" => "no.account.text",
                "value" => "Do not have an account?"
            ],
            [
                "key" => "registration.text",
                "value" => "Enter your information to register and see covid 19 statistics page."
            ],
            [
                "key" => "have.account.text",
                "value" => "Have an account?"
            ],
            [
                "key" => "loading",
                "value" => "Loading..."
            ],
            [
                "key" => "enter.full_name",
                "value" => "Enter your full name"
            ],
            [
                "key" => "enter.email",
                "value" => "Enter e-mail"
            ],
        ],
        "ka" => [
            [
                "key" => "login",
                "value" => "??????????????????"
            ],
            [
                "key" => "authorization",
                "value" => "?????????????????????????????????"
            ],
            [
                "key" => "register",
                "value" => "?????????????????????????????????"
            ],
            [
                "key" => "registration",
                "value" => "?????????????????????????????????"
            ],
            [
                "key" => "name",
                "value" => "??????????????????, ???????????????"
            ],
            [
                "key" => "email",
                "value" => "??????-???????????????"
            ],
            [
                "key" => "password",
                "value" => "??????????????????"
            ],
            [
                "key" => "password_confirmation",
                "value" => "????????????????????? ?????????????????????????????????"
            ],
            [
                "key" => "search",
                "value" => "???????????????..."
            ],
            [
                "key" => "ascending",
                "value" => "???????????????????????????"
            ],
            [
                "key" => "descending",
                "value" => "??????????????????????????????"
            ],
            [
                "key" => "country",
                "value" => "?????????????????????"
            ],
            [
                "key" => "recovered",
                "value" => "???????????????????????????????????????????????????"
            ],
            [
                "key" => "death",
                "value" => "?????????????????????????????????"
            ],
            [
                "key" => "confirmed",
                "value" => "???????????????????????????????????????"
            ],
            [
                "key" => "all.recovered",
                "value" => "???????????????????????????????????????????????????"
            ],
            [
                "key" => "all.death",
                "value" => "?????????????????????????????????"
            ],
            [
                "key" => "all.confirmed",
                "value" => "???????????????????????????????????????"
            ],
            [
                "key" => "authorization.text",
                "value" => "??????????????????????????? ?????????????????? ??????-??????????????? ?????? ??????????????????, ????????? ??????????????? ??????????????? 19-?????? ????????????????????????????????? ??????????????????."
            ],
            [
                "key" => "no.account.text",
                "value" => "?????? ??????????????? ?????????????????????????"
            ],
            [
                "key" => "registration.text",
                "value" => "??????????????????????????? ?????????????????? ??????????????????????????????, ????????? ?????????????????????????????????????????? ?????? ??????????????? ??????????????? 19-?????? ????????????????????????????????? ??????????????????."
            ],
            [
                "key" => "have.account.text",
                "value" => "??????????????? ?????????????????????????"
            ],
            [
                "key" => "loading",
                "value" => "???????????????????????????..."
            ],
            [
                "key" => "enter.full_name",
                "value" => "??????????????????????????? ??????????????????, ???????????????"
            ],
            [
                "key" => "enter.email",
                "value" => "??????????????????????????? ??????-???????????????"
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

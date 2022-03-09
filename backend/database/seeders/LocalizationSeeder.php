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
                "value" => "შესვლა"
            ],
            [
                "key" => "authorization",
                "value" => "ავტორიზაცია"
            ],
            [
                "key" => "register",
                "value" => "რეგისტრაცია"
            ],
            [
                "key" => "registration",
                "value" => "რეგისტრაცია"
            ],
            [
                "key" => "name",
                "value" => "სახელი, გვარი"
            ],
            [
                "key" => "email",
                "value" => "ელ-ფოსტა"
            ],
            [
                "key" => "password",
                "value" => "პაროლი"
            ],
            [
                "key" => "password_confirmation",
                "value" => "პაროლის დადასტურება"
            ],
            [
                "key" => "search",
                "value" => "ძიება..."
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
            [
                "key" => "all.recovered",
                "value" => "გამოჯანმრთელებული"
            ],
            [
                "key" => "all.death",
                "value" => "გარდაცვლილი"
            ],
            [
                "key" => "all.confirmed",
                "value" => "დადასტურებული"
            ],
            [
                "key" => "authorization.text",
                "value" => "შეიყვანეთ თქვენი ელ-ფოსტა და პაროლი, რომ ნახოთ კოვიდ 19-ის სტატისტიკის გვერდი."
            ],
            [
                "key" => "no.account.text",
                "value" => "არ გაქვთ ანგარიში?"
            ],
            [
                "key" => "registration.text",
                "value" => "შეიყვანეთ თქვენი ინფორმაცია, რომ დარეგისტრირდეთ და ნახოთ კოვიდ 19-ის სტატისტიკის გვერდი."
            ],
            [
                "key" => "have.account.text",
                "value" => "გაქვთ ანგარიში?"
            ],
            [
                "key" => "loading",
                "value" => "იტვირთება..."
            ],
            [
                "key" => "enter.full_name",
                "value" => "შეიყვანეთ სახელი, გვარი"
            ],
            [
                "key" => "enter.email",
                "value" => "შეიყვანეთ ელ-ფოსტა"
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

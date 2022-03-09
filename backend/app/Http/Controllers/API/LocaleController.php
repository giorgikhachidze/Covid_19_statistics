<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Locale;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\App;

class LocaleController extends Controller
{
    public function index(): JsonResponse
    {
        $locales = Locale::all();

        return response()->json($locales->map(function($item) {
            return [
                $item['code'] => $item['description']
            ];
        })->collapse());
    }

    public function translations($locale): JsonResponse
    {
        App::setLocale($locale);

        $locale = Locale::where('code', $locale)->first();

        return response()->json($locale->localizations->map(function($item) {
            return [
                $item['key'] => $item['value']
            ];
        })->collapse());
    }
}

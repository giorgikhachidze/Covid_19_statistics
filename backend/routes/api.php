<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\LocaleController;
use App\Http\Controllers\API\StatisticController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(AuthController::class)->group(function () {
    Route::post('/login', 'login');
    Route::post('/register', 'register');
});

Route::get('/locales', [LocaleController::class, 'index']);
Route::get('/locale/{locale}/translations', [LocaleController::class, 'translations']);

Route::middleware('auth:sanctum')->group(function () {
    Route::delete('/logout', [AuthController::class, 'logout']);

    Route::controller(StatisticController::class)->prefix('/statistics')->group(function () {
        Route::get('/filter', 'filter');
        Route::get('/summary', 'summary');
    });
});

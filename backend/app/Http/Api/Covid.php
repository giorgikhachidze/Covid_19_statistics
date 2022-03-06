<?php

namespace App\Http\Api;

use Illuminate\Config\Repository;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Http\Client\PendingRequest;
use Illuminate\Support\Facades\Http;

class Covid
{
    /**
     * @var PendingRequest
     */
    private PendingRequest $http;

    /**
     * @var mixed|Repository|Application
     */
    private mixed $uri;

    function __construct()
    {
        $this->uri  = config('api.covid.url');
        $this->http = Http::timeout(15)->withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
        ]);
    }

    /**
     * @return array|mixed
     */
    public function getCountries(): mixed
    {
        $response = $this->http->get($this->uri . '/countries');

        return $response->json();
    }

    /**
     * @param $code
     * @return array|mixed
     */
    public function getCountryStatistics($code): mixed
    {
        $response = $this->http->post($this->uri . '/get-country-statistics', [
            'code' => $code
        ]);

        return $response->json();
    }
}

<?php

namespace App\Http\Api;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Config\Repository;
use Illuminate\Contracts\Foundation\Application;

class Covid
{
    /**
     * @var Client
     */
    private Client $client;

    /**
     * @var mixed|Repository|Application
     */
    private mixed $uri;

    /**
     * @var array
     */
    private array $options;

    function __construct()
    {
        $this->client  = new Client;
        $this->uri     = config('api.covid.url');
        $this->options = [
            'headers' => [
                'accept' => 'application/json'
            ],
            'timeout' => 15,
        ];
    }

    /**
     * @return mixed|null
     * @throws GuzzleException
     */
    public function getAllCountries(): mixed
    {
        $response = $this->client->get($this->uri . '/countries', $this->options);

        return json_decode($response->getBody()->getContents());
    }

    /**
     * @param $code
     * @return mixed|null
     * @throws GuzzleException
     */
    public function getCountryStatistic($code): mixed
    {
        $response = $this->client->post($this->uri . '/get-country-statistics', $this->options + [
                'form_params' => [
                    'code' => $code
                ]
            ]);

        return json_decode($response->getBody()->getContents());
    }
}

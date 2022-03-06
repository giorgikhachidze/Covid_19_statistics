<?php

namespace App\Console\Commands;

use App\Http\Api\Covid;
use App\Http\Api\CovidApi;
use App\Models\Country;
use App\Models\Statistic;
use Exception;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class SyncStatistics extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync:statistics';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sync countries statistics';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(Covid $covidApi): int
    {
        $countries = Country::all();
        foreach($countries as $country){
            $statistics = $covidApi->getCountryStatistic($country->code);

            $countyStatistic = $country->statistic ?? new Statistic;
            $countyStatistic->country_id = $country->id;
            $countyStatistic->confirmed = $statistics->confirmed;
            $countyStatistic->recovered = $statistics->recovered;
            $countyStatistic->death = $statistics->deaths;
            $countyStatistic->save();

            sleep(1);
        }
        return 1;
    }
}

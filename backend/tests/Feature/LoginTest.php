<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class LoginTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @return void
     */
    public function test_login_parameters_validation()
    {
        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->post('api/login', [
            "password" => "12345678"
        ]);
        $response->assertUnprocessable();

        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->post('api/login', [
            "email" => "user"
        ]);
        $response->assertUnprocessable();
    }

    /**
     * @return void
     */
    public function test_can_login()
    {
        $user     = User::factory()->create();
        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->post('api/login', [
            "email"    => $user->email,
            "password" => "password"
        ]);
        $response->assertStatus(200);
    }
}

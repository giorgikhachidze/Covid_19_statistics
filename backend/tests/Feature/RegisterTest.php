<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class RegisterTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_register_parameters_validation()
    {
        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->post('api/register', [
            "password" => "12345678"
        ]);
        $response->assertUnprocessable();

        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->post('api/register', [
            "password" => "12345678",
            "password_confirmation" => "123456789"
        ]);
        $response->assertUnprocessable();

        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->post('api/register', [
            "email" => "test@gmail.com"
        ]);
        $response->assertUnprocessable();

        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->post('api/register', [
            "name" => "Test user"
        ]);
        $response->assertUnprocessable();

        $user = User::factory()->create();

        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->post('api/register',[
            "name" => $user->name,
            "email" => $user->email,
            "password" => "12345678",
            "password_confirmation" => "12345678",
        ]);
        $response->assertUnprocessable();
    }

    /**
     * @return void
     */
    public function test_can_register_user(){
        $data = [
            "name" => "Test user",
            "email" => "test@gmail.com",
            "password" => "12345678",
            "password_confirmation" => "12345678",
        ];

        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->post('api/register', $data);

        $response->assertOk();

        $this->assertDatabaseHas('users', [
            'email' => $data['email']
        ]);
    }
}

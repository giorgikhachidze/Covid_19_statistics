<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Str;
use Tests\TestCase;

class LogoutTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @return void
     */
    public function test_logout_security() {
        $response = $this->withHeaders([
            'Authorization' => 'Bearer '. Str::random(20),
            'Accept' => 'application/json'
        ])->delete('api/logout');

        $response->assertUnauthorized();
    }

    /**
     * @return void
     */
    public function test_can_logout() {
        $user = User::factory()->create();

        $response = $this->withHeaders([
            'Authorization' => 'Bearer '. $user->createToken('test')->plainTextToken,
            'Accept' => 'application/json'
        ])->delete('api/logout');

        $response->assertOk();
    }
}

<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;

// Home (root) -> our modular Home page
Route::get('/', [HomeController::class, 'index'])->name('home');

// Dashboard tetap ada, tapi pindah ke /dashboard (sama props seperti sebelumya)
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'name' => 'lang',
        'appName' => config('app.name'),
    ]);
})->name('dashboard');
<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        // belum pakai data dinamis (berita) — kosong dulu sesuai permintaan
        return Inertia::render('Home');
    }
}

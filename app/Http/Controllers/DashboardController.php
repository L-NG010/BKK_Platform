<?php

namespace App\Http\Controllers;

use App\Models\Alumni;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $students = Alumni::paginate(10);

        return Inertia::render('Dashboard', [
            'students' => $students
        ]);
    }
}

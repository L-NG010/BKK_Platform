<?php

namespace App\Http\Controllers;

use App\Models\Alumni;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
{
    $query = Alumni::query();

    // Filter by status
    if ($request->has('status') && !empty($request->status) && $request->status !== 'All') {
        $query->where('status', $request->status);
    }

    // Filter by tahun lulus
    if ($request->has('tahun') && !empty($request->tahun) && $request->tahun !== 'All Years') {
        $query->where('tahun', $request->tahun);
    }

    // Filter by jenis kelamin
    if ($request->has('kelamin') && !empty($request->kelamin) && $request->kelamin !== 'All Genders') {
        $query->where('kelamin', $request->kelamin);
    }

    // Search by nama or nisn
    if ($request->has('search') && !empty($request->search)) {
        $search = $request->search;
        $query->where(function ($q) use ($search) {
            $q->where('nama', 'like', "%{$search}%")
              ->orWhere('nisn', 'like', "%{$search}%");
        });
    }

    $students = $query->orderBy('created_at', 'desc')->paginate(10);

    return Inertia::render('Dashboard', [
        'students' => $students,
        'filters' => $request->query() // Kirim semua query parameters kembali
    ]);
}
}

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
            'filters' => $request->query(),
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'nisn' => 'nullable|string|max:20',
            'status' => 'required|string|in:asn,klh,wrh,swt,non job',
            'kelamin' => 'nullable|string|in:Laki-laki,Perempuan',
            'kelas' => 'nullable|string|max:50',
            'tahun' => 'nullable|integer|min:0|max:99',
            'no_telp' => 'nullable|string|max:20',
            'kota_lahir' => 'nullable|string|max:100',
            'tanggal_lahir' => 'nullable|date',
            'keterangan' => 'nullable|string',
            'lsp' => 'nullable|string|max:100',
            'agama' => 'nullable|string|max:50',
        ]);

        $student = Alumni::findOrFail($id);
        $data = $request->only([
            'nama', 'nisn', 'status', 'kelamin', 'kelas', 'tahun',
            'no_telp', 'kota_lahir', 'tanggal_lahir', 'keterangan', 'lsp', 'agama'
        ]);

        if (isset($data['tahun']) && $data['tahun'] > 99) {
            $data['tahun'] = (int) substr($data['tahun'], -2);
        }

        $student->update($data);

        return redirect()->route('dashboard')->with('message', 'Data siswa berhasil diperbarui!');
    }

    public function destroy($id)
    {
        $student = Alumni::findOrFail($id);
        $student->delete();

        return redirect()->route('dashboard')->with('message', 'Data siswa berhasil dihapus!');
    }
}

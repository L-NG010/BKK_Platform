<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            // Return a proper Inertia response, not JSON
            return redirect()->back();
        }

        // Return with errors using Inertia
        return back()->withErrors([
            'username' => 'Tidak Valid.',
        ]);
    }

    public function register(Request $request)
    {
        $data = $request->validate([
            'username' => ['required', 'unique:users', 'min:3', 'max:255'],
            'password' => ['required', 'min:6', 'confirmed'],
        ]);

        $user = User::create([
            'username' => $data['username'],
            'password' => Hash::make($data['password']),
        ]);

        Auth::login($user);

        return redirect()->back();
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}

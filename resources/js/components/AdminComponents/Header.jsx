import React, { useState } from "react";
import { usePage, useForm } from '@inertiajs/react';

const Header = () => {
    const { auth } = usePage().props;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { post } = useForm();
    const user = auth.user;
    const isLoggedIn = user !== null;

    // Fungsi untuk mendapatkan inisial dari username
    const getInitials = (username) => {
        if (!username) return '?';
        return username.charAt(0).toUpperCase();
    };

    // Fungsi untuk handle logout dengan Inertia
    const handleLogout = () => {
        post('/logout');
    };

    return (
        <header className="bg-white shadow-md border-b-2 border-gray-300">
            <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-20">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-xl font-bold text-[#1A273B]">
                            Logo
                        </a>
                    </div>

                    {isLoggedIn ? (
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center justify-center w-10 h-10 bg-[#47556c] text-white rounded-full text-sm font-bold hover:bg-[#444952] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                aria-expanded={isDropdownOpen}
                            >
                                {getInitials(user.username)}
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                                    <div className="px-4 py-2 border-b border-gray-100">
                                        <p className="text-sm font-medium text-gray-900 capitalize">{user.username}</p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {user.role || 'User'}
                                        </p>
                                    </div>

                                    <div className="py-1">
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <a
                                href="/login"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                            >
                                Login
                            </a>
                        </div>
                    )}
                </div>
            </div>

            {/* Overlay untuk menutup dropdown saat klik di luar */}
            {isDropdownOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsDropdownOpen(false)}
                />
            )}
        </header>
    );
};

export default Header;

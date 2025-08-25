import { useState, useRef, useEffect } from "react";
import LoginCard from "../LoginCard";
import { usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";

const Header = ({ onInfoClick, onPortoClick }) => {
    const { auth } = usePage().props;
    const [showLoginCard, setShowLoginCard] = useState(false); // untuk popup login
    const [showUserMenu, setShowUserMenu] = useState(false);   // untuk dropdown user
    const loginCardRef = useRef(null);
    const userMenuRef = useRef(null);

    const isLoggedIn = auth?.user !== null;
    const isAdmin = ["admin", "superadmin"].includes(auth?.user?.role);

    const handleLoginClick = () => {
        setShowLoginCard(!showLoginCard);
    };

    const handleClickOutside = (event) => {
        if (
            loginCardRef.current &&
            !loginCardRef.current.contains(event.target)
        ) {
            setShowLoginCard(false);
        }
        if (
            userMenuRef.current &&
            !userMenuRef.current.contains(event.target)
        ) {
            setShowUserMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Tutup login card otomatis kalau sudah login
useEffect(() => {
    if (isLoggedIn) {
        setShowLoginCard(false);
    }
}, [isLoggedIn]);

    return (
        <header className="fixed top-0 right-0 w-full py-12 px-10 flex justify-end items-center z-50 bg-gradient-to-b from-black/70 to-transparent">
            <nav>
                <ul className="flex gap-8 text-white font-medium text-md">
                    <li>
                        <button
                            onClick={onInfoClick}
                            className="hover:underline focus:outline-none transition-all duration-300 hover:text-blue-300"
                        >
                            INFO
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={onPortoClick}
                            className="hover:underline focus:outline-none transition-all duration-300 hover:text-blue-300"
                        >
                            PORTOFOLIO
                        </button>
                    </li>

                    {/* Kondisi untuk user yang belum login */}
                    {!isLoggedIn && (
                        <li>
                            <button
                                onClick={handleLoginClick}
                                className="hover:underline focus:outline-none transition-all duration-300 hover:text-blue-300"
                            >
                                LOGIN
                            </button>
                        </li>
                    )}

                    {/* Kondisi untuk user admin yang sudah login */}
                    {isLoggedIn && isAdmin && (
                        <li>
                            <button
                                onClick={() => router.visit("/dashboard")}
                                className="hover:underline focus:outline-none transition-all duration-300 hover:text-blue-300"
                            >
                                DASHBOARD
                            </button>
                        </li>
                    )}

                    {/* Kondisi untuk user biasa yang sudah login */}
                    {isLoggedIn && !isAdmin && (
                        <li className="relative" ref={userMenuRef}>
                            <button
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="w-12 h-12 flex -mt-3 items-center justify-center rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300"
                            >
                                {auth.user.username.charAt(0).toUpperCase()}
                            </button>

                            {showUserMenu && (
                                <div className="absolute right-0 mt-3 w-48 bg-white text-black rounded-lg shadow-lg py-2 z-50">
                                    <div className="px-4 py-2 border-b border-gray-200">
                                        <p className="font-semibold mt-0.5 capitalize">{auth.user.username}</p>
                                        <p className="text-sm text-gray-600">{auth.user.role}</p>
                                
                                    </div>
                                    <button
                                        onClick={() => router.post("/logout")}
                                        className="block w-full text-red-600 text-left px-4 py-2 hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </li>
                    )}
                </ul>
            </nav>

            {/* Popup login (hanya untuk user belum login) */}
            {showLoginCard && (
                <div
                    ref={loginCardRef}
                    className="absolute top-full right-0 mt-4"
                >
                    <LoginCard onClose={() => setShowLoginCard(false)} />
                </div>
            )}
        </header>
    );
};

export default Header;

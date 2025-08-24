import { useState, useRef, useEffect } from "react";
import LoginCard from "../LoginCard";
import { usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";

const Header = ({ onInfoClick, onPortoClick }) => {
    const { auth } = usePage().props;
    const [showLoginCard, setShowLoginCard] = useState(false);
    const loginCardRef = useRef(null);

    const isLoggedIn = auth?.user !== null;
    const isAdmin = auth?.user?.role === "admin" || "superadmin";

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
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
                        <li>
                            <button
                                onClick={handleLoginClick}
                                className="hover:underline focus:outline-none transition-all duration-300 hover:text-blue-300"
                            >
                                HALO {auth.user.username.toUpperCase()}
                            </button>
                        </li>
                    )}
                </ul>
            </nav>

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

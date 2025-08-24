import React from "react";

const Header = () => {
    return (
        <header className="bg-white shadow-md border-b-2 border-gray-300">
            <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-20">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-xl font-bold text-[#1A273B]">
                            Logo
                        </a>
                    </div>


                    <div className="mt-3">
                        <a
                            href="#"
                        >
                            <img src="/assets/svg/profile.svg" alt="profile" width={70}/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

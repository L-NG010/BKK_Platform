import { useState } from "react";

const NavigationButton = ({ activeSection, setActiveSection }) => {
    return (
        <div className="relative flex w-96 bg-white rounded-full border border-gray-300 ">
            <div
                className={`absolute h-full bg-[#0c1e3dc1] rounded-full shadow-sm transition-all duration-300 ${
                    activeSection === "Dashboard"
                        ? "left-0 w-1/2"
                        : "left-1/2 w-1/2"
                }`}
            />
            <button
                onClick={() => setActiveSection("Dashboard")}
                className={`relative z-10 flex-1 py-2 text-center transition-colors duration-300 hover:cursor-pointer ${
                    activeSection === "Dashboard"
                        ? "text-white font-medium"
                        : "text-gray-600"
                }`}
            >
                Dashboard
            </button>
            <button
                onClick={() => setActiveSection("Students")}
                className={`relative z-10 flex-1 py-2 text-center transition-colors duration-300 hover:cursor-pointer ${
                    activeSection === "Students"
                        ? "text-white font-medium"
                        : "text-gray-600"
                }`}
            >
                Students
            </button>
        </div>
    );
};

export default NavigationButton;

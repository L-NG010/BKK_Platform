import { useState } from "react";

const FilterStudent = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        careerStatus: "Employed",
        graduationYear: "All Years",
        major: "All Majors",
        location: "All Locations",
    });

    const handleChange = (filterType, value) => {
        const newFilters = { ...filters, [filterType]: value };
        setFilters(newFilters);
        if (onFilterChange) onFilterChange(newFilters);
    };

    const clearAll = () => {
        const resetFilters = {
            careerStatus: "All",
            graduationYear: "All Years",
            major: "All Majors",
            location: "All Locations",
        };
        setFilters(resetFilters);
        if (onFilterChange) onFilterChange(resetFilters);
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-4 mt-5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                <h2 className="text-lg font-semibold mb-2 sm:mb-0">
                    Filter Students{" "}
                    <span className="text-gray-500 text-sm">4 students</span>
                </h2>
                <button
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    onClick={clearAll}
                >
                    Clear All
                </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                        Career Status
                    </label>
                    <select
                        value={filters.careerStatus}
                        onChange={(e) => handleChange("careerStatus", e.target.value)}
                        className="w-full p-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option>All</option>
                        <option>Employed</option>
                        <option>Studying</option>
                        <option>Unemployed</option>
                        <option>Entrepreneur</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                        Graduation Year
                    </label>
                    <select
                        value={filters.graduationYear}
                        onChange={(e) => handleChange("graduationYear", e.target.value)}
                        className="w-full p-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option>All Years</option>
                        <option>2024</option>
                        <option>2023</option>
                        <option>2013</option>
                        <option>2012</option>
                        <option>2009</option>
                        <option>2006</option>
                        <option>2003</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                        Major
                    </label>
                    <select
                        value={filters.major}
                        onChange={(e) => handleChange("major", e.target.value)}
                        className="w-full p-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option>All Majors</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                        Location
                    </label>
                    <select
                        value={filters.location}
                        onChange={(e) => handleChange("location", e.target.value)}
                        className="w-full p-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option>All Locations</option>
                    </select>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="text-xs text-gray-600">
                    Status: <span className="font-medium">{filters.careerStatus}</span> ×
                </div>
                <button
                    className="text-blue-600 hover:text-blue-700 text-xs font-medium"
                    onClick={() => handleChange("careerStatus", "All")}
                >
                    Clear
                </button>
            </div>
        </div>
    );
};

export default FilterStudent;

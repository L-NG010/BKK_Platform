import React, { useState } from "react";

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
        <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                    Filter Students{" "}
                    <span className="text-gray-500">4 students</span>
                </h2>
                <button
                    className="text-blue-500 hover:underline"
                    onClick={clearAll}
                >
                    Clear All
                </button>
            </div>

            <div className="space-y-4 mb-6">
                <div>
                    <h3 className="text-sm font-medium mb-1">Career Status</h3>
                    <select
                        value={filters.careerStatus}
                        onChange={(e) =>
                            handleChange("careerStatus", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                    >
                        <option>Employed</option>
                        <option>All</option>
                    </select>
                </div>

                <div>
                    <h3 className="text-sm font-medium mb-1">
                        Graduation Year
                    </h3>
                    <select
                        value={filters.graduationYear}
                        onChange={(e) =>
                            handleChange("graduationYear", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                    >
                        <option>All Years</option>
                    </select>
                </div>

                <div>
                    <h3 className="text-sm font-medium mb-1">Major</h3>
                    <select
                        value={filters.major}
                        onChange={(e) => handleChange("major", e.target.value)}
                        className="w-full p-2 border rounded"
                    >
                        <option>All Majors</option>
                    </select>
                </div>

                <div>
                    <h3 className="text-sm font-medium mb-1">Location</h3>
                    <select
                        value={filters.location}
                        onChange={(e) =>
                            handleChange("location", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                    >
                        <option>All Locations</option>
                    </select>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                    Status: <span className="font-medium">Employed</span> ×
                </div>
                <button
                    className="text-blue-500 hover:underline text-sm"
                    onClick={() => handleChange("careerStatus", "All")}
                >
                    Clear
                </button>
            </div>
        </div>
    );
};

export default FilterStudent;

import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";

const FilterStudent = ({
    onFilterChange,
    onSearchChange,
    onClearFilter,
    totalStudents = 0,
    currentFilters
}) => {
    const { students } = usePage().props;

    // Get unique years from students data
    const uniqueYears = [...new Set(students?.data?.map(student => student.tahun).filter(Boolean))].sort((a, b) => b - a);

    const handleSelectChange = (filterType, value) => {
        onFilterChange(filterType, value);
    };

    const handleSearchChange = (e) => {
        onSearchChange(e.target.value);
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-6 mt-5 mx-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                        Filter Students
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        {totalStudents} students found
                    </p>
                </div>

                {/* Search Bar */}
                <div className="w-full lg:w-64 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        value={currentFilters.search}
                        onChange={handleSearchChange}
                        placeholder="Cari nama atau NISN..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {currentFilters.search && (
                        <button
                            onClick={() => onClearFilter("search")}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                            <svg className="h-4 w-4 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {/* Status Filter */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Status Karir
                    </label>
                    <div className="relative">
                        <select
                            value={currentFilters.status}
                            onChange={(e) => handleSelectChange("status", e.target.value)}
                            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="All">Semua Status</option>
                            <option value="ASN">ASN</option>
                            <option value="Kuliah">Kuliah</option>
                            <option value="Swasta">Swasta</option>
                            <option value="Wirausaha">Wirausaha</option>
                            <option value="Belum Bekerja">Belum Bekerja</option>
                        </select>
                        {currentFilters.status !== "All" && (
                            <button
                                onClick={() => onClearFilter("status")}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                                <svg className="h-4 w-4 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>

                {/* Tahun Lulus Filter */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tahun Lulus
                    </label>
                    <div className="relative">
                        <select
                            value={currentFilters.tahun}
                            onChange={(e) => handleSelectChange("tahun", e.target.value)}
                            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="All Years">Semua Tahun</option>
                            {uniqueYears.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                        {currentFilters.tahun !== "All Years" && (
                            <button
                                onClick={() => onClearFilter("tahun")}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                                <svg className="h-4 w-4 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>

                {/* Jenis Kelamin Filter */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jenis Kelamin
                    </label>
                    <div className="relative">
                        <select
                            value={currentFilters.kelamin}
                            onChange={(e) => handleSelectChange("kelamin", e.target.value)}
                            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="All Genders">Semua Jenis Kelamin</option>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                        {currentFilters.kelamin !== "All Genders" && (
                            <button
                                onClick={() => onClearFilter("kelamin")}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                                <svg className="h-4 w-4 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterStudent;

import React, { useState } from "react";

const TableStudent = () => {
    const [filters, setFilters] = useState({
        careerStatus: "All",
        graduationYear: "All Years",
        major: "All Majors",
        location: "All Locations",
    });
    const [students, setStudents] = useState([
        {
            id: "#3066",
            status: "Kerja",
            name: "Olivia Rhy",
            email: "olivia@unittledu.com",
            year: 2024,
        },
        {
            id: "#3065",
            status: "Kuliah",
            name: "Phoenix Baker",
            email: "phoenix@unittledu.com",
            year: 2013,
        },
        {
            id: "#3064",
            status: "Kuliah",
            name: "Lana Steiner",
            email: "lana@unittledu.com",
            year: 2003,
        },
        {
            id: "#3063",
            status: "Belum Kerja",
            name: "Demi Wilkinson",
            email: "demi@unittledu.com",
            year: 2009,
        },
        {
            id: "#3062",
            status: "Entrepreneur",
            name: "Candice Wu",
            email: "candice@unittledu.com",
            year: 6009,
        },
        {
            id: "#3061",
            status: "Belum Kerja",
            name: "Natali Craig",
            email: "natali@unittledu.com",
            year: 2090,
        },
        {
            id: "#3060",
            status: "Kerja",
            name: "Drew Cano",
            email: "drew@unittledu.com",
            year: 2023,
        },
        {
            id: "#3059",
            status: "Kuliah",
            name: "Orlando Diggs",
            email: "orlando@unittledu.com",
            year: 2003,
        },
        {
            id: "#3058",
            status: "Kuliah",
            name: "Andi Lane",
            email: "andi@unittledu.com",
            year: 2006,
        },
        {
            id: "#3057",
            status: "Entrepreneur",
            name: "Kate Morrison",
            email: "kate@unittledu.com",
            year: 2012,
        },
    ]);

    const handleFilterChange = (filterType, value) => {
        setFilters({ ...filters, [filterType]: value });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-xl shadow p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">
                            Filter Students{" "}
                            <span className="text-gray-500">
                                ({students.length} students)
                            </span>
                        </h2>
                        <button className="text-blue-500 hover:underline">
                            Clear All
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <select
                            value={filters.careerStatus}
                            onChange={(e) =>
                                handleFilterChange(
                                    "careerStatus",
                                    e.target.value
                                )
                            }
                            className="w-full p-2 border rounded"
                        >
                            <option>Employed</option>
                            <option>All</option>
                        </select>
                        <select
                            value={filters.graduationYear}
                            onChange={(e) =>
                                handleFilterChange(
                                    "graduationYear",
                                    e.target.value
                                )
                            }
                            className="w-full p-2 border rounded"
                        >
                            <option>All Years</option>
                        </select>
                        <select
                            value={filters.major}
                            onChange={(e) =>
                                handleFilterChange("major", e.target.value)
                            }
                            className="w-full p-2 border rounded"
                        >
                            <option>All Majors</option>
                        </select>
                        <select
                            value={filters.location}
                            onChange={(e) =>
                                handleFilterChange("location", e.target.value)
                            }
                            className="w-full p-2 border rounded"
                        >
                            <option>All Locations</option>
                        </select>
                    </div>
                    <div className="status-summary mb-6 text-sm text-gray-600">
                        Status: Employed x
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <tbody>
                                {students.map((student) => (
                                    <tr key={student.id} className="border-b">
                                        <td className="p-2">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="p-2">{student.id}</td>
                                        <td className="p-2">
                                            <span
                                                className={`inline-block w-3 h-3 rounded-full ${
                                                    student.status === "Kerja"
                                                        ? "bg-green-500"
                                                        : student.status ===
                                                          "Kuliah"
                                                        ? "bg-yellow-500"
                                                        : student.status ===
                                                          "Entrepreneur"
                                                        ? "bg-purple-500"
                                                        : "bg-red-500"
                                                }`}
                                            ></span>
                                            {student.status}
                                        </td>
                                        <td className="p-2">
                                            <div className="flex items-center">
                                                <img
                                                    src={`https://i.pravatar.cc/40?img=${Math.floor(
                                                        Math.random() * 70
                                                    )}`}
                                                    alt={student.name}
                                                    className="w-10 h-10 rounded-full mr-2"
                                                />
                                                <div>
                                                    <div>{student.name}</div>
                                                    <div className="text-gray-500 text-sm">
                                                        {student.email}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-2">{student.year}</td>
                                        <td className="p-2">
                                            <button className="text-purple-500 hover:underline">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between mt-4">
                        <button className="text-blue-500 hover:underline">
                            Previous
                        </button>
                        <div className="flex space-x-2">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>...</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                        </div>
                        <button className="text-blue-500 hover:underline">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableStudent;

import { useState, useEffect } from 'react';
import { router, usePage } from '@inertiajs/react';
import { useDebounce } from 'use-debounce';
import TableStudent from "../../../components/StudentComponent/Table";
import FilterStudent from "../../../components/StudentComponent/Filter";

const Main = () => {
    const { students, filters: initialFilters = {} } = usePage().props;

    // State untuk filters
    const [filters, setFilters] = useState({
        status: initialFilters.status || "All",
        tahun: initialFilters.tahun || "All Years",
        kelamin: initialFilters.kelamin || "All Genders",
        search: initialFilters.search || "",
    });

    // Debounce untuk search (500ms delay)
    const [debouncedSearch] = useDebounce(filters.search, 500);

    // Sync filters dari URL ketika page load atau navigation
    useEffect(() => {
        setFilters({
            status: initialFilters.status || "All",
            tahun: initialFilters.tahun || "All Years",
            kelamin: initialFilters.kelamin || "All Genders",
            search: initialFilters.search || "",
        });
    }, [initialFilters]);

    // Effect untuk handle debounced search
    useEffect(() => {
        if (debouncedSearch !== undefined) {
            applyFilters({ ...filters, search: debouncedSearch });
        }
    }, [debouncedSearch]);

    // Function untuk apply filters ke URL
    const applyFilters = (newFilters) => {
        const queryParams = {};

        // Status filter
        if (newFilters.status !== "All") {
            const statusMap = {
                'ASN': 'asn',
                'Kuliah': 'klh',
                'Swasta': 'swt',
                'Wirausaha': 'wrh',
                'Belum Bekerja': 'non job'
            };
            queryParams.status = statusMap[newFilters.status];
        }

        // Tahun filter
        if (newFilters.tahun !== "All Years") {
            queryParams.tahun = newFilters.tahun;
        }

        // Kelamin filter
        if (newFilters.kelamin !== "All Genders") {
            const genderMap = {
                'Laki-laki': 'laki-laki',
                'Perempuan': 'perempuan'
            };
            queryParams.kelamin = genderMap[newFilters.kelamin];
        }

        // Search filter (hanya jika ada value)
        if (newFilters.search && newFilters.search.trim() !== "") {
            queryParams.search = newFilters.search;
        }

        console.log('Applying filters:', queryParams);

        // Apply filters ke URL - GUNAKAN STRING URL LANGSUNG
        router.get('/dashboard', queryParams, {
            preserveState: true,
            preserveScroll: true,
            replace: true,
        });
    };

    // Handle immediate filter changes (select boxes)
    const handleFilterChange = (filterType, value) => {
        const newFilters = { ...filters, [filterType]: value };
        setFilters(newFilters);

        // Untuk filter selain search, apply langsung
        if (filterType !== 'search') {
            applyFilters(newFilters);
        }
        // Untuk search, biarkan debounce yang handle
    };

    // Handle search input change
    const handleSearchChange = (value) => {
        setFilters(prev => ({ ...prev, search: value }));
        // Biarkan debounce yang handle apply
    };

    // Clear specific filter
    const clearFilter = (filterType) => {
        const defaultValue = {
            status: "All",
            tahun: "All Years",
            kelamin: "All Genders",
            search: ""
        }[filterType];

        const newFilters = { ...filters, [filterType]: defaultValue };
        setFilters(newFilters);
        applyFilters(newFilters);
    };

    return (
        <div>
            <FilterStudent
                onFilterChange={handleFilterChange}
                onSearchChange={handleSearchChange}
                onClearFilter={clearFilter}
                totalStudents={students?.total || 0}
                currentFilters={filters}
            />
            <TableStudent />
        </div>
    );
};

export default Main;

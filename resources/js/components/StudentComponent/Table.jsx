import { usePage, Link } from "@inertiajs/react";

const TableStudent = () => {
    const { students } = usePage().props;

    const getStatusColor = (status) => {
        const statusColors = {
            'asn': 'bg-green-500',
            'klh': 'bg-yellow-500',
            'wrh': 'bg-purple-500',
            'swt': 'bg-blue-500',
            'non job': 'bg-red-500',
            'default': 'bg-gray-500'
        };
        return statusColors[status] || statusColors['default'];
    };

    const translateStatus = (status) => {
        const statusTranslations = {
            'asn': 'ASN',
            'klh': 'Kuliah',
            'wrh': 'Wirausaha',
            'swt': 'Swasta',
            'non job': 'Belum Bekerja',
            'default': 'Tidak Diketahui'
        };
        return statusTranslations[status] || statusTranslations['default'];
    };

    return (
        <div className="max-w-7xl mx-10">
            <div className="mb-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Data Siswa</h1>
                <button className="bg-[#47556c] hover:bg-[#444952] text-white px-4 py-2.5 rounded-lg font-medium transition-colors">
                    Tambah Siswa
                </button>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                            </th>
                            <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nama Siswa
                            </th>
                            <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Kelas
                            </th>
                            <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Jenis Kelamin
                            </th>
                            <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tahun
                            </th>
                            <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {students?.data?.length > 0 ? (
                            students.data.map((student) => (
                                <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4">
                                        <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                                    </td>
                                    <td className="p-4 font-medium text-gray-900">#{student.id}</td>
                                    <td className="p-4">
                                        <div className="flex items-center">
                                            <span className={`inline-block w-3 h-3 rounded-full mr-2 ${getStatusColor(student.status)}`}></span>
                                            <span className="text-sm font-medium">{translateStatus(student.status)}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div>
                                            <div className="font-medium text-gray-900">
                                                {student.nama}
                                            </div>
                                            <div className="text-gray-500 text-sm mt-1">
                                                {student.nisn ? `NISN: ${student.nisn}` : 'NISN: -'}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-gray-600">{student.kelas || '-'}</td>
                                    <td className="p-4 text-gray-600 capitalize">{student.kelamin || '-'}</td>
                                    <td className="p-4 text-gray-600">{student.tahun || '-'}</td>
                                    <td className="p-4">
                                        <div className="flex space-x-3">
                                            <button className="text-indigo-600 hover:text-indigo-900 text-sm font-medium transition-colors">
                                                Edit
                                            </button>
                                            <button className="text-red-600 hover:text-red-900 text-sm font-medium transition-colors">
                                                Hapus
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="p-8 text-center text-gray-500">
                                    <div className="flex flex-col items-center">
                                        <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47.86-6.09 2.28M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>
                                        <p className="text-lg font-medium">Tidak ada data siswa</p>
                                        <p className="text-sm mt-1">Coba ubah filter pencarian Anda</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Pagination */}
                {students?.data?.length > 0 && (
                    <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-gray-200 gap-4">
                        <div className="text-sm text-gray-700">
                            Menampilkan <span className="font-medium">{students.from}</span> hingga <span className="font-medium">{students.to}</span> dari <span className="font-medium">{students.total}</span> hasil
                        </div>
                        <div className="flex space-x-2">
                            {/* Previous Button */}
                            {students.prev_page_url ? (
                                <Link
                                    href={students.prev_page_url}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                    preserveState
                                >
                                    ← Sebelumnya
                                </Link>
                            ) : (
                                <button
                                    disabled
                                    className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed"
                                >
                                    ← Sebelumnya
                                </button>
                            )}

                            {/* Next Button */}
                            {students.next_page_url ? (
                                <Link
                                    href={students.next_page_url}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                    preserveState
                                >
                                    Selanjutnya →
                                </Link>
                            ) : (
                                <button
                                    disabled
                                    className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed"
                                >
                                    Selanjutnya →
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TableStudent;

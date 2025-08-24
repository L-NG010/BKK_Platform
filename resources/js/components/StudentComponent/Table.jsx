// Components/TableStudent.jsx
import { usePage, Link } from "@inertiajs/react";

const TableStudent = () => {
    const { students } = usePage().props;

    // Fungsi untuk mendapatkan warna status
    const getStatusColor = (status) => {
        switch (status) {
            case 'asn':
                return 'bg-green-500';
            case 'klh':
                return 'bg-yellow-500';
            case 'wrh':
                return 'bg-purple-500';
            case 'swt':
                return 'bg-blue-500';
            case 'non job':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    // Fungsi untuk menerjemahkan status
    const translateStatus = (status) => {
        switch (status) {
            case 'asn':
                return 'ASN';
            case 'klh':
                return 'Kuliah';
            case 'wrh':
                return 'Wirausaha';
            case 'swt':
                return 'Swasta';
            case 'non job':
                return 'Belum Bekerja';
            default:
                return 'Tidak Diketahui';
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Data Siswa</h1>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
                    Tambah Siswa
                </button>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <input type="checkbox" className="rounded" />
                            </th>
                            <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nama Siswa
                            </th>
                            <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Kelas
                            </th>
                            <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Jenis Kelamin
                            </th>
                            <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tahun
                            </th>
                            <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {students && students.data && students.data.length > 0 ? (
                            students.data.map((student) => (
                                <tr key={student.id} className="hover:bg-gray-50">
                                    <td className="p-3">
                                        <input type="checkbox" className="rounded" />
                                    </td>
                                    <td className="p-3 font-medium">#{student.id}</td>
                                    <td className="p-3">
                                        <div className="flex items-center">
                                            <span
                                                className={`inline-block w-3 h-3 rounded-full mr-2 ${getStatusColor(student.status)}`}
                                            ></span>
                                            <span className="text-sm">{translateStatus(student.status)}</span>
                                        </div>
                                    </td>
                                    <td className="p-3">
                                        <div>
                                            <div className="font-medium text-gray-900">
                                                {student.nama}
                                            </div>
                                            <div className="text-gray-500 text-sm">
                                                {student.nisn ? `NISN: ${student.nisn}` : 'NISN: -'}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-3">{student.kelas || '-'}</td>
                                    <td className="p-3 capitalize">{student.kelamin || '-'}</td>
                                    <td className="p-3">{student.tahun || '-'}</td>
                                    <td className="p-3">
                                        <div className="flex space-x-2">
                                            <button className="text-indigo-600 hover:text-indigo-900 text-sm">
                                                Edit
                                            </button>
                                            <button className="text-red-600 hover:text-red-900 text-sm">
                                                Hapus
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="p-4 text-center text-gray-500">
                                    Tidak ada data siswa
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Pagination - hanya ditampilkan jika ada data */}
                {students && students.data && students.data.length > 0 && (
                    <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200">
                        <div className="text-sm text-gray-700">
                            Menampilkan <span className="font-medium">{students.from}</span> hingga <span className="font-medium">{students.to}</span> dari <span className="font-medium">{students.total}</span> hasil
                        </div>
                        <div className="flex space-x-2">
                            {/* Tombol Previous */}
                            {students.prev_page_url ? (
                                <Link
                                    href={students.prev_page_url}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                                    preserveState
                                >
                                    Sebelumnya
                                </Link>
                            ) : (
                                <button
                                    disabled
                                    className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 rounded-md cursor-not-allowed"
                                >
                                    Sebelumnya
                                </button>
                            )}

                            {/* Tombol Next */}
                            {students.next_page_url ? (
                                <Link
                                    href={students.next_page_url}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                                    preserveState
                                >
                                    Selanjutnya
                                </Link>
                            ) : (
                                <button
                                    disabled
                                    className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 rounded-md cursor-not-allowed"
                                >
                                    Selanjutnya
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

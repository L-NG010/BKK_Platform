import { useState, useEffect } from 'react';
import { usePage, Link, router } from '@inertiajs/react';

const TableStudent = () => {
    const { students, flash, errors } = usePage().props;
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [formData, setFormData] = useState({
        nama: '',
        nisn: '',
        status: '',
        kelamin: '',
        kelas: '',
        tahun: '',
        no_telp: '',
        kota_lahir: '',
        tanggal_lahir: '',
        keterangan: '',
        lsp: '',
        agama: '',
    });

    // Prevent scrolling when modals are open
    useEffect(() => {
        if (isEditModalOpen || isDeleteModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto'; // Cleanup on unmount
        };
    }, [isEditModalOpen, isDeleteModalOpen]);

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

    const openEditModal = (student) => {
        setSelectedStudent(student);
        setFormData({
            nama: student.nama || '',
            nisn: student.nisn || '',
            status: student.status || '',
            kelamin: student.kelamin || '',
            kelas: student.kelas || '',
            tahun: student.tahun ? String(student.tahun) : '',
            no_telp: student.no_telp || '',
            kota_lahir: student.kota_lahir || '',
            tanggal_lahir: student.tanggal_lahir || '',
            keterangan: student.keterangan || '',
            lsp: student.lsp || '',
            agama: student.agama || '',
        });
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setSelectedStudent(null);
        setFormData({
            nama: '',
            nisn: '',
            status: '',
            kelamin: '',
            kelas: '',
            tahun: '',
            no_telp: '',
            kota_lahir: '',
            tanggal_lahir: '',
            keterangan: '',
            lsp: '',
            agama: '',
        });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const data = { ...formData };
        if (data.tahun && data.tahun.length > 2) {
            data.tahun = data.tahun.slice(-2);
        }
        router.put(`/dashboard/${selectedStudent.id}`, data, {
            preserveState: true,
            onSuccess: () => closeEditModal(),
        });
    };

    const openDeleteModal = (student) => {
        setSelectedStudent(student);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setSelectedStudent(null);
    };

    const handleDelete = () => {
        router.delete(`/dashboard/${selectedStudent.id}`, {
            preserveState: true,
            onSuccess: () => closeDeleteModal(),
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'tahun' && !/^\d{0,2}$/.test(value)) {
            return;
        }
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Flash Message */}
            {flash?.message && (
                <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg flex justify-between items-center">
                    {flash.message}
                    <button
                        onClick={() => router.visit('/dashboard', { preserveState: true })}
                        className="text-green-600 hover:text-green-800"
                    >
                        ✕
                    </button>
                </div>
            )}

            <div className="mb-6 flex justify-between items-center mt-5">
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
                                            <div className="font-medium text-gray-900">{student.nama}</div>
                                            <div className="text-gray-500 text-sm mt-1">
                                                {student.nisn ? `NISN: ${student.nisn}` : 'NISN: -'}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-gray-600">{student.kelas || '-'}</td>
                                    <td className="p-4 text-gray-600 capitalize">{student.kelamin || '-'}</td>
                                    <td className="p-4 text-gray-600">{student.tahun ? `'${student.tahun}` : '-'}</td>
                                    <td className="p-4">
                                        <div className="flex space-x-3">
                                            <button
                                                onClick={() => openEditModal(student)}
                                                className="text-indigo-600 hover:text-indigo-900 text-sm font-medium transition-colors"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => openDeleteModal(student)}
                                                className="text-red-600 hover:text-red-900 text-sm font-medium transition-colors"
                                            >
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

            {/* Edit Modal */}
            {isEditModalOpen && (
                <div className="fixed inset-0  backdrop-blur-md flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Edit Data Siswa</h2>
                        <form onSubmit={handleEditSubmit}>
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Nama</label>
                                    <input
                                        type="text"
                                        name="nama"
                                        value={formData.nama}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        required
                                    />
                                    {errors.nama && <p className="text-red-500 text-sm mt-1">{errors.nama}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">NISN</label>
                                    <input
                                        type="text"
                                        name="nisn"
                                        value={formData.nisn}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                    {errors.nisn && <p className="text-red-500 text-sm mt-1">{errors.nisn}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Status</label>
                                    <select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        required
                                    >
                                        <option value="">Pilih Status</option>
                                        <option value="asn">ASN</option>
                                        <option value="klh">Kuliah</option>
                                        <option value="wrh">Wirausaha</option>
                                        <option value="swt">Swasta</option>
                                        <option value="non job">Belum Bekerja</option>
                                    </select>
                                    {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
                                    <select
                                        name="kelamin"
                                        value={formData.kelamin}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="">Pilih Jenis Kelamin</option>
                                        <option value="Laki-laki">Laki-laki</option>
                                        <option value="Perempuan">Perempuan</option>
                                    </select>
                                    {errors.kelamin && <p className="text-red-500 text-sm mt-1">{errors.kelamin}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Kelas</label>
                                    <input
                                        type="text"
                                        name="kelas"
                                        value={formData.kelas}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                    {errors.kelas && <p className="text-red-500 text-sm mt-1">{errors.kelas}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Tahun Lulus</label>
                                    <input
                                        type="text"
                                        name="tahun"
                                        value={formData.tahun}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Contoh: 25 untuk 2025"
                                    />
                                    {errors.tahun && <p className="text-red-500 text-sm mt-1">{errors.tahun}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">No. Telepon</label>
                                    <input
                                        type="text"
                                        name="no_telp"
                                        value={formData.no_telp}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                    {errors.no_telp && <p className="text-red-500 text-sm mt-1">{errors.no_telp}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Kota Lahir</label>
                                    <input
                                        type="text"
                                        name="kota_lahir"
                                        value={formData.kota_lahir}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                    {errors.kota_lahir && <p className="text-red-500 text-sm mt-1">{errors.kota_lahir}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
                                    <input
                                        type="date"
                                        name="tanggal_lahir"
                                        value={formData.tanggal_lahir}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                    {errors.tanggal_lahir && <p className="text-red-500 text-sm mt-1">{errors.tanggal_lahir}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Keterangan</label>
                                    <textarea
                                        name="keterangan"
                                        value={formData.keterangan}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        rows="4"
                                    ></textarea>
                                    {errors.keterangan && <p className="text-red-500 text-sm mt-1">{errors.keterangan}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">LSP</label>
                                    <input
                                        type="text"
                                        name="lsp"
                                        value={formData.lsp}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                    {errors.lsp && <p className="text-red-500 text-sm mt-1">{errors.lsp}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Agama</label>
                                    <select
                                        name="agama"
                                        value={formData.agama}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="">Pilih Agama</option>
                                        <option value="Islam">Islam</option>
                                        <option value="Kristen">Kristen</option>
                                        <option value="Katolik">Katolik</option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Buddha">Buddha</option>
                                        <option value="Konghucu">Konghucu</option>
                                    </select>
                                    {errors.agama && <p className="text-red-500 text-sm mt-1">{errors.agama}</p>}
                                </div>
                            </div>
                            <div className="mt-6 flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={closeEditModal}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
                                >
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Konfirmasi Hapus</h2>
                        <p className="text-gray-600 mb-6">
                            Apakah Anda yakin ingin menghapus data siswa <span className="font-medium">{selectedStudent?.nama}</span>?
                        </p>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={closeDeleteModal}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                            >
                                Batal
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TableStudent;

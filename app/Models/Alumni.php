<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Alumni extends Model
{
    protected $table = 'alumni';
    protected $fillable = [
    'nama',
    'kelas',
    'status', // enum: ['asn','klh','swt','wrh','non job']
    'kelamin', // string: 'laki-laki', 'perempuan'
    'no_telp',
    'kota_lahir',
    'tanggal_lahir',
    'keterangan',
    'tahun',
    'lsp',
    'nisn',
    'agama'
];
}

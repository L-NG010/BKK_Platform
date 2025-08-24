<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('alumni', function (Blueprint $t) {
            $t->id();
            $t->string('nama');
            $t->string('kelas');
            $t->enum('status', ['asn','klh','swt','wrh','non job'])->default(null);
            $t->enum('kelamin',['perempuan','laki-laki'])->default(null)->nullable();
            $t->string('no_telp')->nullable();
            $t->string('kota_lahir')->nullable();
            $t->date('tanggal_lahir')->nullable();
            $t->string('keterangan')->nullable();
            $t->tinyInteger('tahun')->nullable();
            $t->boolean('lsp')->nullable();
            $t->string('nisn')->nullable();
            $t->enum('agama',['Islam','Kristen','Budha','Hindu','Konghucu','Katolik'])->default(null)->nullable();
            $t->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alumni');
    }
};

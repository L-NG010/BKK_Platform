import React, { forwardRef, useState } from "react";
import Breadcrumb from "../Breadcrumb";

const dummyArticles = [
  {
    id: 1,
    title: "PEMBERANGKATAN KERJA KE PT. PRADHA KARYA PERKASA MOJOKERTO",
    date: "Selasa – 07 Juni 2022",
    description:
      "telah dilaksanakan pemberangkatan kerja dari kampus 1 SMK Brantas Karangkates Malang, sebanyak 15 anak ke PT. Pradha Karya Perkasa di Mojokerto.",
    image:
      "/assets/images/pemberangkatan.png",
  },
  {
    id: 2,
    title: "PEMBEKALAN KE PT. TAP KALIMANTAN",
    date: "Senin – 06 Juni 2022",
    description:
      "pembekalan 24 alumni SMK Brantas Karangkates Malang yang lolos ke PT. TAP Kalimantan. Yang akan terbang besok pagi (Selasa, 07 Juni 2022). Hadir dalam pembekalan ini Kepala Sekolah, Wakil Kepala Sekolah, BKK, Orang Tua/Wali dan peserta. Dilaksanakan di SMK Brantas kampus 3.",
    image:
      "/assets/images/pembekalan.png",
  },
  {
    id: 3,
    title: "MEDICAL TEST DAN PEMBERANGKATAN KERJA KE PT. TRIPUTRA AGRO PERSADA",
    date: "Rabu – 01 Juni 2022",
    description:
      "pengarahan 18 peserta didik dari SMK Brantas Karangkates, dan 1 peserta didik dari SMK Islam Kalipare, beserta pengumpulan surat izin dan pernyataan Orang Tua/Wali. Direncanakan besok pagi (Kamis, 02 Juni 2022) dilaksana...",
    image:
      "/assets/images/medical.png",
  },
];

const InfoSection = forwardRef(({ id, showBreadcrumb }, ref) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const generatePages = (current, total) => {
    const pages = [];
    if (current <= total - 3) {
      pages.push(current, current + 1, current + 2, "...", total - 2, total - 1, total);
    } else {
      pages.push(total - 4, total - 3, total - 2, total - 1, total);
    }
    return pages;
  };

  return (
    <section ref={ref} id={id} className="container mx-auto py-16 px-6 pt-15 max-w-7xl">
      {showBreadcrumb && (
        <Breadcrumb
          scrollToFirst={() => {
            const el = document.getElementById("firstsection");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />
      )}

      {/* Header utama */}
      <div className="flex justify-between items-start mb-16">
        {/* Kiri */}
        <div className="max-w-md">
          <h3 className="font-bold text-sm mb-2 pt-6 pb-5 tracking-wider text-gray-800">
            BURSA KERJA KHUSUS
          </h3>
          <h1 className="text-4xl font-extrabold leading-snug text-gray-900">
            WEBSITE BKK SMK <br />
            BRANTAS <br />
            KARANGKATES
          </h1>
        </div>

        {/* Kanan */}
        <div className="max-w-2xl">
          <h2 className="font-bold text-2xl pt-6 pb-5 mb-2 tracking-wide">
            PELAYANAN DAN INFORMASI KESEMPATAN KERJA
          </h2>
          <p className="text-base text-gray-600 pr-17 text-justify leading-relaxed">
            Bursa Kerja Khusus (BKK) SMK Brantas Karangkates adalah sebuah
            lembaga yang dibentuk di Sekolah Menengah Kejuruan, sebagai unit
            pelaksana yang memberikan pelayanan dan informasi lowongan kerja,
            pelaksana pemasaran, penyaluran dan penempatan tenaga kerja,
            merupakan mitra Dinas Tenaga Kerja dan Transmigrasi.
          </p>
        </div>
      </div>

      {/* Informasi Terbaru */}
      <div className="mb-12">
        <h3 className="font-bold text-sm mb-6 pt-6 pb-3 tracking-wider text-gray-800">
          INFORMASI TERBARU
        </h3>
        <h2 className="text-3xl font-extrabold mb-6 text-gray-900">
          PERSIAPAN KERJA
        </h2>

        {/* Grid artikel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dummyArticles.map((article) => (
            <article key={article.id} className="flex flex-col">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-50 object-cover mb-4"
              />
              <h4 className="font-bold text-sm uppercase mb-1">
                {article.title}
              </h4>
              <p className="text-sm pt-2 text-gray-400">
                <span className="font-bold">{article.date}</span>, {article.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <nav
        className="flex justify-between items-center text-gray-700"
        aria-label="Pagination"
      >
        {/* Previous */}
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="flex items-center rounded-lg border border-gray-300 px-3 py-1 hover:bg-gray-100"
          disabled={currentPage === 1}
        >
          ← Previous
        </button>

        {/* Nomor Halaman */}
        <div className="flex items-center space-x-1">
          {generatePages(currentPage, totalPages).map((item, i) => (
            <button
              key={i}
              disabled={item === "..."}
              onClick={() => item !== "..." && setCurrentPage(item)}
              className={`rounded px-3 py-1 ${item === currentPage
                ? "bg-indigo-200 text-indigo-700 font-medium"
                : item === "..."
                  ? "cursor-default text-gray-500"
                  : "hover:bg-gray-100"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          className="flex items-center rounded-lg border border-gray-300 px-3 py-1 hover:bg-gray-100"
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </nav>
    </section>
  );
});

export default InfoSection;

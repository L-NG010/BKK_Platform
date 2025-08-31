import React from "react";
import Breadcrumb from "../Breadcrumb";

const portofolio = [
  { id: 1, image: "/assets/images/isi-portofolio.png" },
  { id: 2, image: "/assets/images/isi-portofolio.png" },
  { id: 3, image: "/assets/images/isi-portofolio.png" },
  { id: 4, image: "/assets/images/isi-portofolio.png" },
  { id: 5, image: "/assets/images/isi-portofolio.png" },
  { id: 6, image: "/assets/images/isi-portofolio.png" },
];

const PortoSection = ({ showBreadcrumb }) => {
  return (
    <section>
      <section
        id="hero"
        className="relative flex flex-row items-stretch text-white px-10 pt-5"
        style={{
          minHeight: "100vh",
          backgroundImage: "url(/assets/images/bg-porto.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(18, 26, 66, 0.75)",
            backdropFilter: "blur(10.9px)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-screen">
          <h1 className="font-bold text-white text-[120px] leading-none">PORTOFOLIO</h1>
          <p className="text-white text-lg pb-8 mt-4 tracking-widest">BURSA KERJA KHUSUS SMK BRANTAS</p>
        </div>

        {/* tombol scroll - kasih z-index supaya gak ketutup overlay */}
        <button
          type="button"
          onClick={() => {
            const el = document.getElementById("detail");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-30"
          aria-label="Scroll to detail"
        >
          <span className="text-md pb-2 mb-1 text-white">SCROLL</span>
          <img src="/assets/svg/scroll.svg" alt="Scroll Down" className="w-6 h-6" />
        </button>
      </section>

      {/* DETAIL SECTION */}
      <section id="detail" className="container mx-auto py-16 px-6 max-w-7xl">
        {showBreadcrumb && (
        <Breadcrumb
          scrollToFirst={() => {
            const el = document.getElementById("firstsection");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          label="PORTOFOLIO"
        />
      )}

        {/* atas: teks kiri/kanan */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-8">
          <div className="md:w-1/3">
            <h3 className="font-bold text-sm mb-2 pt-6 pb-5 tracking-wider text-gray-800">PORTOFOLIO</h3>
            <h1 className="text-4xl font-extrabold leading-snug text-gray-900">
              BURSA KERJA <br />
              KHUSUS SMK <br />
              BRANTAS <br />
              KARANGKATES
            </h1>
          </div>

          <div className="md:w-2/3">
            <h2 className="font-bold text-2xl pt-6 pb-5 mb-2 tracking-wide">HASIL KERJA PAK BAMBANG SUKATON</h2>
            <p className="text-base text-gray-600 text-justify leading-relaxed">
              Bambang Sukaton, pakar bursa kerja khusus (BKK) sebagai pembicara dalam workshop pengembangan
              diri menuju dunia kerja. Beliau dianggap memiliki kompetensi dalam bidang memotivasi pelajar dan
              pembekalan anak pra-kerja.
            </p>
          </div>
        </div>

        {/* GRID GAMBAR: terpisah dari flex atas, jadi muncul di bawah */}
        <div className="mb-12 pt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {portofolio.map((p) => (
            <div key={p.id} className="flex flex-col">
              <img
                src={p.image}
                alt={`porto-${p.id}`}
                className="w-full h-full object-cover mb-4"
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default PortoSection;

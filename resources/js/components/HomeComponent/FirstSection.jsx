import React from "react";

const FirstSection = () => {
    return (
        <section id="firstsection" className="relative flex flex-row items-stretch text-white px-10 pt-5"
            style={{
                minHeight: '110vh', // proporsi dari figma
                backgroundImage: 'url(/assets/images/background.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay gradient */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(103.42deg, #161F45 5.04%, rgba(11, 49, 217, 0) 122.18%)"
                }}
            ></div>

            {/* Konten kiri */}
            <div className="relative z-10 flex flex-col items-start w-1/2 px-10">
                {/* Logo */}
                <img
                    src="/assets/images/logo.png"
                    alt="logo"
                    className="w-135 mb-4"
                />
                {/* Teks */}
                <p className="text-xl mt-40 ml-10 font-bold">SELAMAT DATANG DI WEBSITE</p>
                <p className="text-3xl mt-10 ml-10 font-bold leading-tight">
                    BURSA KERJA KHUSUS <br /> SMK BRANTAS KARANGKATES
                </p>
                <p className="text-base mt-10 ml-10 max-w-full">
                    Jl. Lolaras 14 Karangkates Kec. Sumberpucung - Kab. Malang
                </p>
                <p className="text-base ml-10">Telp. (+62)852338789012</p>
                {/* Button */}
                <button className="mt-4 px-8 py-4 ml-10 mt-10 bg-white font-bold text-black transition hover:bg-gray-200">
                    DAFTAR BKK ONLINE
                </button>
            </div>
        </section>
    );
};

export default FirstSection;

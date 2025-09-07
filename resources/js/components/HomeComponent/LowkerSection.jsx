import Breadcrumb from "../Breadcrumb";

// Dummy data lowker
const lowkerList = [
    {
        id: 1,
        company: "MIE GACOAN SUKUN",
        description:
            "Untuk info lebih lanjut langsung saja hubungi BKK SMK Brantas Karangkates dengan cara klik tombol dibawah ini",
        image: "/assets/images/lowker.png",
        available: true, // true = centang, false = silang
    },
    {
        id: 2,
        company: "PT PAMA",
        description:
            "Untuk info lebih lanjut langsung saja hubungi BKK SMK Brantas Karangkates dengan cara klik tombol dibawah ini",
        image: "/assets/images/lowker.png",
        available: true,
    },
    {
        id: 3,
        company: "ASTRA",
        description:
            "Untuk info lebih lanjut langsung saja hubungi BKK SMK Brantas Karangkates dengan cara klik tombol dibawah ini",
        image: "/assets/images/lowker.png",
        available: false,
    },
];

// 🔹 Komponen Card Lowker
const LowkerCard = ({ company, description, image, available, onHubungi }) => {
    return (
        <div className="bg-white shadow-[0_0_20px_rgba(0,0,0,0.2)] overflow-hidden p-4 flex flex-col relative">
            {/* Gambar */}
            <img
                src={image}
                alt={company}
                className="w-full h-40 object-cover"
            />

            {/* Isi card */}
            <div className="p-4 flex flex-col flex-grow">
                <div classname="max-w-2xl">
                    <h4 className="font-bold uppercase text-md mb-1">{company}</h4>
                    <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#283D82] text-white font-semibold py-3 px-5 hover:bg-[#1d2542] transition"
                    >
                        HUBUNGI BKK
                    </a>
                </div>
            </div>

            {/* Icon status pojok kanan bawah */}
            <div className="absolute bottom-2 right-2 w-6 h-6">
                {available ? (
                    <img src="/assets/images/available.png" alt="Tersedia" />
                ) : (
                    <img src="/assets/images/not-available.png" alt="Tidak tersedia" />
                )}
            </div>
        </div>
    );
};

const LowkerSection = ({ showBreadcrumb }) => {
    return (
        <section id="lowker" className="container mx-auto py-16 px-6 max-w-7xl">
            {/* Breadcrumb */}
            {showBreadcrumb && (
                <Breadcrumb
                    scrollToFirst={() => {
                        const el = document.getElementById("firstsection");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    // ✅ Breadcrumb harus beranda > loker
                    label="LOKER"
                />
            )}

            {/* Title */}
            <div className="flex flex-col items-center text-center mb-8 gap-2">
                <h1 className="text-5xl font-extrabold leading-snug text-gray-900">
                    LOWONGAN<br />
                    KERJA
                </h1>
                <h3 className="text-md font-extrabold text-gray-400">
                    BURSA KERJA KHUSUS
                </h3>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {lowkerList.map((item) => (
                    <LowkerCard
                        key={item.id}
                        company={item.company}
                        description={item.description}
                        image={item.image}
                        available={item.available}
                        onHubungi={() => alert(`Hubungi BKK untuk ${item.company}`)}
                    />
                ))}
            </div>

            {/* Search + Pagination contoh */}
            <div className="flex items-center gap-4 mt-10 max-w-2xl">
                <div className="flex items-center border rounded px-4 py-2 flex-grow">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-400 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Cari Perusahaan"
                        className="outline-none flex-grow"
                    />
                </div>

                <button className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">
                    ←
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">
                    →
                </button>
            </div>
        </section>
    );
};

export default LowkerSection;

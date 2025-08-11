const Footer = () => {

    return (
        <footer className="w-full bg-[#272F52] border-t border-gray-200 py-6 mt-10">
            <div className="flex justify-center items-center space-x-4 text-xs font-medium tracking-wide text-white">
                <span> &copy; {new Date().getFullYear()} SMK BRANTAS KARANGKATES JL. LOLARAS 14 KARANGKATES KEC. SUMBERPUCUNG - KAB. MALANG 082139255609 (P. BAMBANG)</span>
            </div>
        </footer>
    );
};

export default Footer;
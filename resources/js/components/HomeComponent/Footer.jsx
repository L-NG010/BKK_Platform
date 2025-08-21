const Footer = () => {
  return (
    <footer className="w-full bg-[#272F52] border-t border-gray-200 py-6 mt-10">
      <div className="flex justify-center items-center space-x-4 text-xs font-medium tracking-wide text-white text-center px-4">
        <span>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://smkbrantaskarangkates.sch.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            SMK BRANTAS KARANGKATES
          </a>{" "}
          JL. LOLARAS 14 KARANGKATES KEC. SUMBERPUCUNG - KAB. MALANG 082139255609 (P. BAMBANG)
        </span>
      </div>
    </footer>
  );
};

export default Footer;

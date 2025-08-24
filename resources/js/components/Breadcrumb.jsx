const Breadcrumb = ({ scrollToFirst, label = "INFO" }) => (
  <nav className="text-xs text-gray-500 mb-4 select-none" aria-label="Breadcrumb">
    <ol className="list-reset flex">
      <li>
        <button
          onClick={scrollToFirst}
          className="hover:underline focus:outline-none"
        >
          BERANDA
        </button>
      </li>
      <li><span className="mx-2">{">"}</span></li>
      <li className="font-semibold text-gray-700">{label}</li>
    </ol>
  </nav>
);

export default Breadcrumb;

const Header = ({ onInfoClick }) => {
  return (
    <header className="absolute top-10 right-10 w-full py-6 px-10 flex justify-end z-10">
      <nav>
        <ul className="flex gap-8 text-white font-medium text-md">
          <li><button onClick={onInfoClick} className="hover:underline focus:outline-none">INFO</button></li>
          <li><a href="#" className="hover:underline focus:outline-none">PORTOFOLIO</a></li>
          <li><a href="#" className="hover:underline focus:outline-none">LOGIN</a></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

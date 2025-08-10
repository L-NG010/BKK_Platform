import React from "react";

const Header = () => {
  return (
    <header
      className="absolute top-10 right-10 w-full py-6 px-10 flex justify-end z-10"
      style={{
        background: "rgba(255, 255, 255, 0)", // transparan tipis
      }}
    >
      <nav>
        <ul className="flex gap-8 top-10 right-10 text-white font-medium text-md">
          <li><a href="#" className="hover:text-blue-400">INFO</a></li>
          <li><a href="#" className="hover:text-blue-400">PORTOFOLIO</a></li>
          <li><a href="#" className="hover:text-blue-400">LOGIN</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

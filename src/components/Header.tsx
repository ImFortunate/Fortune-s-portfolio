import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "AboutMe", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 py-0 px-[1.3rem] transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-white/80 shadow-md" : "bg-transparent"
      }`}
    >
      {/* Desktop Nav */}
      <nav className="hidden md:flex justify-between items-center px-10 py-4">
        <h1 className="text-purple-900 text-1xl font-bold tracking-wide">
          Fortune
        </h1>

        <ul className="flex gap-6 text-1lg font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-purple-900 transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className="flex md:hidden justify-between items-center px-6 py-4">
        <h1 className="text-purple-900 text-0.6xl font-bold tracking-wide">
          Fortune
        </h1>

        {/* Hamburger Icon */}
        <div
          className="flex flex-col justify-between w-6 h-4 cursor-pointer"
          onClick={toggleMenu}
        >
          <span
            className={`block h-1 w-full bg-purple-900 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-purple-900 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-purple-900 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>

        {/* Mobile Dropdown */}
        <ul
          className={`absolute top-full left-0 w-full bg-white flex flex-col items-center gap-5 py-5 shadow-md transition-all duration-300  ${
            menuOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-5"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={toggleMenu}
                className="text-lg font-medium  hover:text-purple-900"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

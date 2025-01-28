'use client'
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Sobre", id: "sobre-mim" },
    { label: "Projetos", id: "projetos" },
    { label: "Experiência", id: "experiencia" },
    { label: "Certificados", id: "certificados" },
    { label: "Habilidades", id: "habilidades" },
    { label: "Idiomas", id: "idioma" },
    { label: "Contato", id: "contato" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0f0f0f] p-4 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#f2f2f2]">
          &lt; Leo Villalva &gt;
        </h1>

        <button
          className="text-[#f2f2f2] md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute md:static top-[70px] left-0 w-full md:w-auto bg-[#0f0f0f] md:flex md:gap-6 md:items-center transition-all`}
        >
          <ul className="flex flex-col md:flex-row gap-4 p-4 md:p-0">
            {menuItems.map(({ label, id }, index) => (
              <li
                key={index}
                className="text-[#f2f2f2] text-center md:text-left hover:text-[#e2e2e2] ease-linear transition-all hover:scale-105 cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(false);
                  const section = document.getElementById(id);
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

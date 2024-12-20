'use client'
import { ArrowLeft, ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-[#0f0f0f]">
      <h1 className="text-xl font-bold text-[#f2f2f2]">
        &lt; Leo Villalva &gt;
      </h1>
      <nav className="flex gap-6">
        {["Sobre mim", "Tecnologias", "Projetos", "Contato"].map((item, index) => (
          <p
            key={index}
            className="hover:text-[#f2f2f2] transition-colors cursor-pointer"
            onClick={() => {
              const section = document.getElementById(item.toLowerCase().replace(" ", "-"));
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {item}
          </p>
        ))}
      </nav>
      <div className="flex gap-4">
        <a
          href="https://github.com/lhelheo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img src="image 1.png" alt="GitHub" className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/leonardo-oliveira-villalva-0993a7221"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img src="image 2.png" alt="LinkedIn" className="w-6 h-6" />
        </a>
      </div>
    </header>
  );
};

export default Header;

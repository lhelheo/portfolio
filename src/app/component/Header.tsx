'use client'

const Header = () => {
  const menuItems = [
    { label: "Sobre", id: "sobre-mim" },
    { label: "Tecnologias", id: "tecnologias" },
    { label: "Projetos", id: "projetos" },
    { label: "Habilidades", id: "habilidades" },
    { label: "Idiomas", id: "idioma" },
    { label: "Experiência", id: "experiencia" },
    { label: "Certificados", id: "certificados" },
    { label: "Contato", id: "contato" },

  ];

  return (
    <header className="flex justify-between items-center p-6 bg-[#0f0f0f] fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#f2f2f2]">
        &lt; Leo Villalva &gt;
        </h1>
        <nav className="flex gap-6">
          {menuItems.map(({ label, id }, index) => (
            <p
              key={index}
              className="hover:text-[#f2f2f2] ease-linear transition-all hover:scale-105 cursor-pointer"
              onClick={() => {
                const section = document.getElementById(id); 
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {label}
            </p>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

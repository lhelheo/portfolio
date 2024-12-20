"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const softskills = [
    { title: "Comunicação", description: "Transmitir ideias de forma clara." },
    { title: "Trabalho em equipe", description: "Colaborar eficientemente." },
    { title: "Resolução de problemas", description: "Resolver desafios criativos." },
    { title: "Adaptabilidade", description: "Ajustar-se a mudanças rapidamente." },
  ];

  const certificates = [
    {
      image: "certificate2.png",
      title: "Desenvolvimento Web - Alura",
      subtitle: "Nesse curso aprendi a construir aplicações web com HTML, CSS e JavaScript, TypeScript, React, Next.js, Node.js, Express e Prisma.",
      link: "https://cursos.alura.com.br/user/leonardo-villalva/fullCertificate/209bce2b0ddd4ab60ca4fb3d3f1365d7",
    },
    {
      image: "certificate1.png",
      title: "Hackathon Nasa Space Apps Challenge 2024",
      subtitle: "Participei do Hackathon Nasa Space Apps Challenge 2024, desenvolvendo em equipe soluções inovadoras para desafios globais.",
      link: "https://www.linkedin.com/in/leonardo-oliveira-villalva-0993a7221/overlay/1728269167330/single-media-viewer/?profileId=ACoAADfDzbUBYpYmwVjGiPYSBWATy8B29D0gQHY",
    },
  ];
  

  const images = [
    { 
      src: "html.png", 
      alt: "HTML", 
      description: "Linguagem de marcação para estruturação de conteúdo na web." 
    },
    { 
      src: "css-3.png", 
      alt: "CSS", 
      description: "Estilização de páginas web, definindo layouts, cores e fontes." 
    },
    { 
      src: "js.png", 
      alt: "JavaScript", 
      description: "Linguagem de programação para interatividade em páginas web." 
    },
    { 
      src: "react.png", 
      alt: "React", 
      description: "Biblioteca JavaScript para construir interfaces de usuário dinâmicas." 
    },
    { 
      src: "next.png", 
      alt: "Next.js", 
      description: "Framework React para aplicações web com renderização do lado do servidor." 
    },
    { 
      src: "node.png", 
      alt: "Node.js", 
      description: "Ambiente de execução para JavaScript no lado do servidor." 
    },
    { 
      src: "ts.png", 
      alt: "TypeScript", 
      description: "Superset de JavaScript que adiciona tipagem estática ao código." 
    },
    { 
      src: "express.png", 
      alt: "Express", 
      description: "Framework minimalista para construção de APIs com Node.js." 
    },
    { 
      src: "tailwind1.png", 
      alt: "TailwindCSS", 
      description: "Framework de CSS utilitário para estilização rápida e eficiente." 
    },
    { 
      src: "prisma-orm.png", 
      alt: "Prisma", 
      description: "ORM moderno para interagir com bancos de dados de forma tipada." 
    },
  ];
  

  return (
    <div className="bg-[#0b0b0b] text-[#c1c1c1] font-sans">
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

      <section className="h-screen flex items-center justify-center max-h-[700px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold">
              Olá, eu sou <br />
              <span className="text-4xl lg:text-6xl text-[#f2f2f2]">Leonardo Villalva</span>
            </h2>
            <p className="text-2xl mt-4 text-[#e1e1e1]">Desenvolvedor de Software</p>
            <p className="max-w-[500px] mt-6 text-[#d1d1d1]">
            Sou um desenvolvedor de software, busco oferecer soluções para web. Atuando em construção de aplicações web personalizadas, sempre disposto a transformar sua ideia em realidade.
            </p>
          </div>
          <img src="yo.png" alt="Avatar" className="rounded-lg w-[300px] lg:w-[400px]" />
        </div>
      </section>

      <section className="py-12 bg-[#0f0f0f] flex flex-col items-center">
        <h3 className="text-2xl font-semibold text-center mb-8">Tecnologias</h3>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="relative max-w-[450px] mx-auto flex items-center">
            <div className="overflow-hidden flex justify-center items-center rounded-lg">
                <div
                className="flex transition-transform duration-500"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
                >
                {images.map((image, index) => (
                    <div
                    key={index}
                    className="flex-shrink-0 w-full flex flex-col items-center bg-[#1e1e1e] shadow-lg rounded-lg p-6"
                    >
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-[80px] h-[80px] object-contain mb-4"
                    />
                    <p className="text-lg font-medium text-[#f2f2f2]">{image.alt}</p>
                    </div>
                ))}
                </div>
            </div>
            <button
                onClick={handlePrev}
                className="absolute left-0 bg-[#242424] p-3 rounded-full ease-linear transition-all hover:bg-[#333] hover:scale-105 focus:outline-none transform -translate-y-1/2 top-1/2"
            >
                <ArrowLeft />
            </button>
            <button
                onClick={handleNext}
                className="absolute right-0 bg-[#242424] p-3 rounded-full ease-linear transition-all hover:bg-[#333] hover:scale-105 focus:outline-none transform -translate-y-1/2 top-1/2"
            >
                <ArrowRight />
            </button>
            </div>

            <div className="max-w-[400px] text-center lg:text-left">
            <h4 className="text-xl font-semibold text-[#f2f2f2] mb-4">
                {images[currentIndex].alt}
            </h4>
            <p className="text-md text-[#d1d1d1]">{images[currentIndex].description}</p>
            </div>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-[#f2f2f2]" : "bg-[#555]"
                }`}
            ></button>
            ))}
        </div>
        </section>

        <section className="py-12 bg-[#000000] text-[#c1c1c1]">
        <h3 className="text-2xl font-semibold text-center mb-8 text-[#f2f2f2]">
            Formação Acadêmica e Experiência
        </h3>
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
            <div className="bg-[#1e1e1e] shadow-lg rounded-lg p-6 w-full max-w-[500px] flex flex-col justify-between h-full">
            <div>
            <h4 className="text-xl font-semibold text-[#f2f2f2] mb-4">Formação Acadêmica</h4>
            <p className="text-md mb-2">
            <span className="font-medium text-[#f2f2f2]">Engenharia de Computação</span> — Universidade Federal de Sergipe
            </p>
            <p className="text-sm text-[#d1d1d1]">2021 - Atualidade</p>
            <p className="text-sm text-[#d1d1d1] mt-4">
            Durante o curso, desenvolvi habilidades em lógica de programação, estrutura de dados, arquitetura de computadores, e boas práticas em desenvolvimento de software.
            </p>
            </div>
            </div>

            <div className="bg-[#1e1e1e] shadow-lg rounded-lg p-6 w-full max-w-[500px] flex flex-col justify-between h-full">
            <div>
            <h4 className="text-xl font-semibold text-[#f2f2f2] mb-4">Experiência Profissional</h4>
            <p className="text-md mb-2">
            <span className="font-medium text-[#f2f2f2]">
                Nova Soluções e Engenharia LTDA
            </span>{" "}
            — Desenvolvedor Front-end Júnior
            </p>
            <p className="text-sm text-[#d1d1d1]">Março de 2024 - Setembro de 2024</p>
            <p className="text-sm text-[#d1d1d1] mt-4">
            Atuei como Desenvolvedor Front-end Júnior, focando em tecnologias como React, TypeScript, Next.js, e TailwindCSS. Trabalhei na construção de interfaces responsivas, mantendo padrões de design modernos e integração com APIs RESTful.
            </p>
            </div>
            </div>
        </div>
        </section>

        <section className="py-12 bg-[#0b0b0b] text-[#c1c1c1]">
            <h3 className="text-2xl font-semibold text-center mb-8 text-[#f2f2f2]">
                Idiomas
            </h3>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
                <div className="flex flex-col items-center bg-[#1e1e1e] shadow-lg rounded-lg p-6 w-full max-w-[300px]">
                    <span className="text-4xl mb-4">🇧🇷</span>
                    <h4 className="text-xl font-semibold text-[#f2f2f2]">Português</h4>
                    <p className="text-md text-[#d1d1d1] mt-2">Fluente</p>
                    <div className="w-full bg-[#333] rounded-full h-2.5 mt-4">
                        <div className="bg-[#4caf50] h-2.5 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                </div>

                <div className="flex flex-col items-center bg-[#1e1e1e] shadow-lg rounded-lg p-6 w-full max-w-[300px]">
                    <span className="text-4xl mb-4">🇺🇸</span>
                    <h4 className="text-xl font-semibold text-[#f2f2f2]">Inglês</h4>
                    <p className="text-md text-[#d1d1d1] mt-2">Intermediário</p>
                    <div className="w-full bg-[#333] rounded-full h-2.5 mt-4">
                        <div className="bg-[#ffa929] h-2.5 rounded-full" style={{ width: "50%" }}></div>
                    </div>
                </div>
            </div>
        </section>



      <section className="py-12 bg-[#000000]">
        <h3 className="text-2xl font-semibold text-center mb-8">Softskills</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {softskills.map((softskill, index) => (
            <div
              key={index}
              className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <h4 className="text-xl font-medium text-[#f2f2f2]">{softskill.title}</h4>
              <p className="text-md text-[#d1d1d1] mt-2">{softskill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-[#0b0b0b] flex flex-col lg:flex-row justify-center items-center gap-12 px-6">
    <a 
        href="https://dd-brandao.netlify.app/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex-shrink-0 hover:scale-105 transition-transform"
    >
        <img 
        src="siteDD.png" 
        alt="Projeto de Gestão de Inventário" 
        className="w-full lg:w-[600px] rounded-lg shadow-lg"
        />
    </a>

    <div className="max-w-[600px] text-center lg:text-left">
        <h3 className="text-3xl font-semibold text-[#f2f2f2] mb-4">Projeto de Gestão de Inventário e Vendas - Duda Brandão</h3>
        <p className="text-md text-[#d1d1d1] mb-4">
        Este projeto foi desenvolvido para atender às necessidades de uma pequena empresa da minha cidade, 
        oferecendo uma solução prática para a gestão de inventário e vendas. 
        A aplicação permite registrar e acompanhar o estoque de produtos, monitorar as vendas realizadas e gerar relatórios detalhados, 
        otimizando os processos internos e melhorando a tomada de decisões.
        </p>
        <p className="text-md text-[#d1d1d1]">
        Construída com tecnologias modernas, a aplicação é intuitiva e adaptada às demandas do cliente, 
        sendo uma ferramenta essencial para a organização e sucesso do negócio.
        </p>
    </div>
    </section>

    <section className="py-12 bg-[#0f0f0f]">
  <h3 className="text-2xl font-semibold text-center mb-8 text-[#f2f2f2]">Certificados</h3>
    <div className="flex flex-wrap justify-center gap-8">
        {certificates.map((certificate, index) => (
            <div
                key={index}
                className="flex flex-col items-center bg-[#1e1e1e] max-w-[250px] shadow-lg rounded-lg p-6 hover:scale-105 transition-transform cursor-pointer"
                onClick={() => window.open(certificate.link, "_blank")}
            >
                <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-[200px] h-[150px] object-contain mb-4 rounded"
                />
                <h4 className="text-lg font-medium text-[#f2f2f2] text-center">{certificate.title}</h4>
                <p className="text-sm text-[#d1d1d1] mt-2 text-center">{certificate.subtitle}</p>
                <p className="text-sm text-[#cf7002] mt-2 text-center">Clique aqui para visualizar</p>
            </div>
        ))}
    </div>
    </section>

    <footer className="py-6 bg-[#0f0f0f] text-[#c1c1c1] text-center">
        <p className="text-sm">
            &copy; 2024 Leonardo Villalva. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-4 mt-4">
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
    </footer>

    </div>
  );
}

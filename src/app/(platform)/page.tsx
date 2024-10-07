export default function Page() {
    // Download currículo
    // Softskills
    // Tooltip e badges
    // Utilizar loadings
    
    const softskills = [
        { title: "Comunicação", description: "Capacidade de transmitir ideias de forma clara e eficaz." },
        { title: "Trabalho em equipe", description: "Colaboração eficiente com colegas para alcançar objetivos comuns." },
        { title: "Resolução de problemas", description: "Habilidade de identificar e resolver problemas de forma criativa." },
        { title: "Adaptabilidade", description: "Capacidade de se ajustar a novas condições e desafios." },
    ]

    const images = [
        { src: "html.png", alt: "HTML ícone" },
        { src: "css-3.png", alt: "CSS ícone" },
        { src: "js.png", alt: "JavaScript ícone" },
        { src: "react.png", alt: "React ícone" },
        { src: "next.png", alt: "Next.js ícone" },
        { src: "node.png", alt: "Node.js ícone" },
        { src: "ts.png", alt: "TypeScript ícone" },
        { src: "express.png", alt: "Express ícone" },
        { src: "tailwind.png", alt: "TailwindCSS ícone" },
    ]

    const textColor = "bg-gradient-to-r from-[#c1c1c1] to-[#f2f2f2] bg-clip-text text-transparent cursor-pointer transition-all ease-linear hover:text-[#c1c1c1] hover:scale-105"
    return (
        <div>
            <div className="flex justify-between">
            <div>
                <h1 className={`text-[#c1c1c1]`}>
                    &lt; Leo Villalva &gt;
                </h1>
            </div>
            <div className="flex gap-6">
                <p className={`${textColor}`}>Sobre mim</p>
                <p className={`${textColor}`}>Tecnologias</p>
                <p className={`${textColor}`}>Projetos</p>
                <p className={`${textColor}`}>Contato</p>
            </div>
            <div className="flex space-x-4">
                <a href="https://github.com/lhelheo" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                    <img src="image 1.png" alt="GitHub" className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/leonardo-oliveira-villalva-0993a7221" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                    <img src="image 2.png" alt="LinkedIn" className="w-6 h-6" />
                </a>
            </div>
            </div>
            <div className="flex w-full h-screen justify-center items-center">
                <div className="flex items-end">
                    <div className="flex flex-col gap-4">
                        <div>
                            <p className="text-6xl">Olá, eu sou<br /><strong className="text-6xl">Leonardo Villalva</strong></p>
                            <p className="text-3xl">Desenvolvedor de Software</p>
                        </div>
                        <p className="max-w-[500px]">Sou um desenvolvedor de software, busco oferecer soluções para web. Atuando em construção de aplicações web personalizadas, sempre disposto a transformar sua ideia em realidade.</p>
                    </div>
                    <img src="yo.png" alt="Avatar" />
                </div>
            </div>
            <section className="flex flex-col justify-center items-center mb-12 bg-gradient-to-t from-[#020202] to-[#0f0f0f] h-[400px]">
                <h3 className="text-2xl mb-6">Tecnologias</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {images.map((image, index) => (
                        <div key={index} className="flex flex-col items-center bg-[#111111] rounded p-4 transition-all hover:scale-105">
                            <img src={image.src} alt={image.alt} className="w-16 h-16 object-contain mb-2" />    
                            <p className="text-sm text-[#c1c1c1]">{image.alt.split(" ")[0]}</p>
                        </div>
                        ))}
                </div>
            </section>
            <section className="flex flex-col  justify-center items-center gap-6 bg-gradient-to-t from-[#020202] to-[#0f0f0f] h-[400px]">
                <h3 className="text-2xl">Softskills</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {
                        softskills.map((softskill, index) => (
                            <div key={index} className="flex flex-col items-center bg-[#111111] rounded p-4 transition-all hover:scale-105">
                                <p className="text-xl text-[#c1c1c1]">{softskill.title}</p>
                                <p className="text-md text-[#c1c1c1]">{softskill.description}</p>
                            </div>
                        ))
                    }
                </div>
                <p className="text-[#c1c1c1]">Algumas dessas habilidades utilizei para solucionar problemas que participei como o Hackathon da Nasa Space Apps como também em ambiente de trabalho passado.</p>
            </section>
        </div>
    )
}
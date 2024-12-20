export const Experience = () => {
    return (
        <section className="py-12 bg-[#000000] text-[#c1c1c1]">
        <h3 className="text-2xl font-semibold text-center mb-8 text-[#f2f2f2]">
            Formação Acadêmica e Experiência
        </h3>
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
            <div className="bg-[#1e1e1e] shadow-lg rounded-lg p-6 w-full max-w-[500px] flex flex-col justify-between h-full hover:scale-105 transition-all ease-linear">
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

            <div className="bg-[#1e1e1e] shadow-lg rounded-lg p-6 w-full max-w-[500px] flex flex-col justify-between h-full hover:scale-105 transition-all ease-linear">
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
    )
}
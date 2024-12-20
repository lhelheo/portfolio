const Projects = () => {
    return (
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
    )
} 

export default Projects;
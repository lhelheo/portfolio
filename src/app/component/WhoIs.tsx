export const WhoIs = () => {
    return (
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
    );
};

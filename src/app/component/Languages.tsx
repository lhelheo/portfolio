export const Languages = () => {
    return (
        <section className="py-20 bg-[#0b0b0b] text-[#c1c1c1]">
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
    )
}
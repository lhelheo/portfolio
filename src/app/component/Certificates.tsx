'use client'

import { certificates } from "../utils/data";

const Certificates = () => {
    return (
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
                            className="w-[200px] h-[100px] object-cover mb-4 rounded"
                        />
                        <h4 className="text-lg font-medium text-[#f2f2f2] text-center">{certificate.title}</h4>
                        <p className="text-sm text-[#d1d1d1] mt-2 text-center">{certificate.subtitle}</p>
                        <p className="text-sm text-[#cf7002] mt-2 text-center">Clique aqui para visualizar</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Certificates;
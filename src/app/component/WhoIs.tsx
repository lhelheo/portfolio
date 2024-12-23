'use client'
import { useRef, useEffect } from "react";
import { images } from "../utils/data";

export const WhoIs = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationFrame: number;
    let scrollAmount = 0;

    const smoothScroll = () => {
      if (carousel) {
        scrollAmount += 1; 
        carousel.scrollLeft = scrollAmount;

        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
      animationFrame = requestAnimationFrame(smoothScroll);
    };

    animationFrame = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(animationFrame); 
  }, []);
  
    return (
        <section className="md:h-screen flex items-center justify-center lg:max-h-[700px] flex-col">
            <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
                <div className="mt-[200px] lg:mt-0">
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
            <div
                ref={carouselRef}
                className="w-full overflow-hidden relative flex items-center pt-10 max-w-[1200px]"
            >
                <div
                className="flex w-max animate-carousel gap-4"
                style={{
                    animation: "carouselScroll 3s linear infinite",
                }}
                >
                {images.concat(images).map((image, index) => (
                    <div
                    key={index}
                    className="flex-shrink-0 w-[250px] flex flex-col items-center justify-center shadow-lg rounded-lg p-4 md:p-6"
                    >
                    <img
                        src={image.src}
                        className="w-16 object-contain mb-4"
                    />
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

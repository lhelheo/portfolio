import { Github, Linkedin } from "lucide-react";

const Footer = () => {
    return (
      <footer className="py-8 bg-[#0f0f0f] text-[#c1c1c1]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">

            <div className="mb-6 md:mb-0">
              <p className="text-sm text-[#c1c1c1]">Entre em contato:</p>
              <a
                href="mailto:leonardo.villalva.contato@gmail.com"
                className="text-[#f2f2f2] underline transition-colors text-sm"
              >
                leonardo.villalva.contato@gmail.com
              </a>
            </div>
  
            <div className="flex gap-4">
              <a
                href="https://github.com/lhelheo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 hover:text-[#e3e3e3] transition-all"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/leonardo-oliveira-villalva-0993a7221"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 hover:text-[#e3e3e3] transition-all"
              >
                <Linkedin />
              </a>
            </div>
          </div>
  
          <div className="border-t border-[#1f1f1f] mt-6 pt-4 text-center">
            <p className="text-xs text-[#a1a1a1]">
              &copy; 2024 Leonardo Villalva. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;
  
import Header from "../component/Header";
import { WhoIs } from "../component/WhoIs";
import Technologies from "../component/Tecnologies";
import { Experience } from "../component/Experience";
import { Languages } from "../component/Languages";
import Softskills from "../component/Softskills";
import Projects from "../component/Projects";
import Certificates from "../component/Certificates";
import Footer from "../component/Footer";

export default function Page() {
  
  return (
    <div className="bg-[#0b0b0b] text-[#c1c1c1] font-sans px-6 w-full">
      <Header />
      <section id="sobre-mim"><WhoIs /></section>
      <section id="tecnologias"><Technologies /></section>
      <section id="experiencia"><Experience /></section>
      <section id="idioma"><Languages /></section>
      <section id="habilidades"><Softskills /></section>
      <section id="projetos"><Projects /></section>
      <section id="certificados"><Certificates /></section>
      <section id="contato"><Footer /></section>
    </div>
  );
}

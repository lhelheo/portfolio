import { softskills } from "../utils/data";

const Softskills = () => {
  return (
    <section className="py-20 bg-[#000000]">
      <h3 className="text-2xl font-semibold text-center mb-8">Habilidades</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {softskills.map((softskill, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] lg:min-w-[300px] w-[250px] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <h4 className="text-xl font-medium text-[#f2f2f2]">{softskill.title}</h4>
            <p className="text-md text-[#d1d1d1] mt-2">{softskill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Softskills;
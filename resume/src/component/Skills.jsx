import { FaGears } from "react-icons/fa6";
const Skills = ({ skillsData }) => {
  return (
    <>
        {/* Skills Section  */}
        <section className="px-8 py-3 bg-white md:mb-4">
        <h2 className="flex items-center gap-1 font-bold text-gray-700 uppercase text-md md:text-2xl ">
            <FaGears className="text-xl md:text-xl" />
            Skills
        </h2>
        <hr className="bg-violet-800 h-1.5 mt-1 w-[30px] md:w-[36px]"/>
        {skillsData.map((skill, index) => (
        <div className="" key={index}>
        <ul className="grid gap-2 mt-4 list-disc list-inside lg:grid-cols-2 marker:text-violet-500">
        {skill.keywords.map((keyword, idx) => (
              <li className="p-2 text-sm font-light text-center border-2 rounded-lg md:text-start lg:text-md border-violet-50 text-slate-900" key={idx}>{keyword}</li>
            ))}
            </ul>
        </div>
         ))}       
    </section>
    </>
   
  );
};

export default Skills;

import { BsPersonFillGear } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
const Projects = ({ projectsData }) => {
  return (
    <>
        {/* Project Section  */}
            <section className="px-8 py-4 bg-white">
        <h2 className="flex items-center gap-1 font-bold text-gray-700 uppercase text-md lg:text-xl ">
            <BsPersonFillGear className="text-xl md:text-xl" />
            Projects
        </h2>
        <hr className="bg-violet-800 h-1.5 mt-1 w-[30px] md:w-[36px]"/>
        {projectsData.map((project, index) => (
        <div className="mt-3" key={index}>
          <div className="flex items-center gap-2 md:gap-6">
          <h2 className="mb-1 text-sm font-semibold text-gray-800 md:text-md">{project.name}</h2>
          <p><a href={project.url} target="_blank" rel="noopener noreferrer">
            <CiGlobe className="text-sm md:text-lg text-violet-800"/>
            </a></p>
          </div>
          
          {/* <p className="text-sm text-gray-700">{project.description}</p> */}
          {/* <p className="mt-2 text-sm font-semibold">Highlights</p> */}
          <ul className="ml-3 list-disc marker:text-violet-500">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="mb-2 text-sm font-light text-gray-900 md:text-md">{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
                
    </section>
    </>
  );
};

export default Projects;

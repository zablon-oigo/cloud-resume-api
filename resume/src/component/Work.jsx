import { VscBriefcase } from "react-icons/vsc";
import { CiGlobe } from "react-icons/ci";
const Work = ({ workData }) => {
  return (
    <>
    {/* Professional Experience  */}
    <section className="px-8 py-4 bg-white">
        <h2 className="flex items-center gap-1 font-bold text-gray-700 uppercase text-md md:text-xl">
            <VscBriefcase className="text-md md:text-2xl"/>
            Professional Experience
        </h2>
        <hr className="bg-violet-800 h-1.5 w-[30px] md:w-[36px]"/>
        <div className="mt-2">
        {workData.map((job, index) => (
            <div className="" key={index}>
                <div className="flex md:items-center md:flex-row  flex-col justify-between">
                    <div className="">
                        <h2 className="mb-1 font-medium text-gray-800 text-md md:text-lg">{job.position}</h2>
                        <p className="md:mb-2 font-light text-gray-900 ">
                        <span className="">
                        <a href={job.url} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm">
                        {job.name}
                        </a>
                        </span>
                        </p>
                        
                    </div>
                    <div className="md:my-3 mb-2">
                        <p className="italic font-light text-gray-800">
                            <span className="text-violet-800 text-[12px]">
                            {job.startDate} / {job.endDate}
                            </span>
                        </p>
                    </div>
                </div>
                <ul className="ml-4 list-disc marker:text-violet-500">
                    {job.highlights.map((highlight, idx) => (
              <li key={idx} className="mb-2 text-sm font-light text-gray-900 md:text-md">{highlight}</li>
            ))}
                </ul>
            </div>
            ))}
        </div>
    </section>
    </>
    
  );
};

export default Work;

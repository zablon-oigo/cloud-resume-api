import { GiGraduateCap } from "react-icons/gi";
const Education = ({ educationData }) => {
  return (
    <div>
      {/* Education Section */}
      <section className="px-8 py-4 bg-white">
        <h2 className="flex items-center gap-1 font-bold text-gray-700 uppercase text-md md:text-xl">
            <GiGraduateCap className="text-xl md:text-3xl"/>
            Education
        </h2>
        <hr className="bg-violet-800 h-1.5 w-[30px] md:w-[36px]"/>
        <div className="mt-2">
        {educationData.map((edu, index) => (
          <div className="" key={index}>
            <div className="flex md:flex-row flex-col items-center mb-4 md:justify-between " >
            
            <div className="">
                <h2 className="mb-1 text-sm font-medium text-gray-800 md:text-lg">
                {edu.studyType} in {edu.area}
                </h2>
                <p className="text-sm italic font-light text-gray-900 ">
                <a href={edu.url} target="_blank" rel="noopener noreferrer">
                {edu.institution}
                </a>
                
                </p>
            </div>
            <div className="">
              <span className="text-[12px] italic text-violet-800">
              {edu.startDate}/
              </span>
              <span className="text-[12px] italic text-violet-800">
              {edu.endDate}
              </span>
            </div>
            
        </div>
          </div>
            
             ))}
            
        </div>
    </section>
    
          
        
     
    </div>
  );
};

export default Education;

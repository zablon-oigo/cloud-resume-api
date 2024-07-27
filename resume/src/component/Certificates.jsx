import { GrCertificate } from "react-icons/gr";
import { CiGlobe } from "react-icons/ci";
const Certificates = ({ certificatesData }) => {
  return (
    <>
    {/*  Certificate  Section*/}
    <section className="px-8 py-4 bg-white">
    <h2 className="flex items-center gap-1 font-bold text-gray-700 uppercase text-md lg:text-xl ">
        <GrCertificate className="text-md md:text-xl" />
        Certificate
    </h2>
    <hr className="bg-violet-800 h-1.5 mt-1 w-[30px] md:w-[36px]"/>
    <div className="mt-3  flex md:justify-between md:mx-5 mx-0 flex-col md:flex-row items-center gap-10">
    {certificatesData.map((cert, index) => (
        <div key={index} >
          <div className="flex items-center gap-2 md:gap-6">
          <h2 className="mb-1 text-sm text-gray-800 font-semibold md:text-md">{cert.name}</h2>
          <p> <a href={cert.url} target="_blank" rel="noopener noreferrer">
          <CiGlobe className="text-sm md:text-lg text-violet-800"/>
            </a></p>
          </div>
          <div className="flex items-center gap-6">
          <p className="text-[12px] text-gray-700 md:text-sm"> {cert.issuer}</p>
          <p className="text-[12px]  italic font-light text-violet-800">{cert.date}</p>
          </div>    
        </div>
      ))}
    </div>
            
</section>
      
</>
  );
};

export default Certificates;

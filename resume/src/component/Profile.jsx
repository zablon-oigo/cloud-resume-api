import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineIdentification } from "react-icons/hi2";
import { CiGlobe } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
const Profile = ({ profileData, viewsCount }) => {
  return (
    <>
    {/* Profile Summary */}
    <section className="flex flex-col justify-center gap-6 px-10 py-6 bg-white rounded-t-sm md:mt-1 md:py-2">
        <div className="">
            <h2 className="text-2xl font-bold text-center md:text-4xl text-violet-800">
            {profileData.name}
            </h2>
            <h1 className="mt-3 font-light text-center text-gray-400 text-md md:text-2xl">
            {profileData.label}
            </h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center w-full gap-4 md:mx-0 md:items-center">
        <span className="flex items-center gap-2 font-light ">
                <CiGlobe className="text-lg text-violet-800"/>
                <a href={profileData.url} target="_blank" rel="noopener noreferrer" className="text-sm">{profileData.url}</a>
            </span>
            <span className="flex items-center gap-2 font-light">
                <IoLocationSharp className="text-md text-violet-800"/>
                <span className="text-sm">
                {profileData.location.address}
                </span>
            </span>
            <span className="flex items-center gap-2 font-light">
                <IoIosMail className="text-lg text-violet-800 "/>
                <a href={`mailto:${profileData.email}`}className="">
                <span className="text-sm">
                {profileData.email}
                </span>
                </a>
            </span>
            <span className="flex items-center gap-2 font-light text-md">
                <MdCall className="text-lg text-violet-800"/>
                <span className="text-xs">
                {profileData.phone}
                </span>
            </span>
            <span className="flex items-center gap-2 font-light text-md">
            <FaRegEye className="text-xl text-violet-800"/>
                 <span className="font-extrabold">
                 {viewsCount}
                 </span>
            </span>
        </div>
        <div className="">
        <h2 className="flex items-center gap-1 font-bold text-gray-700 uppercase text-md md:text-xl">
            <HiOutlineIdentification className="text-md md:text-xl"/>
            Profile
        </h2>
        <hr className="bg-violet-800 h-1.5 w-[30px]  md:w-[36px]"/>
        
        <div className="mt-2">
            <p className="text-sm font-light leading-snug text-gray-900 md:text-md md:leading-8">
            {profileData.summary}
            </p>
        </div>
        </div>
    </section>
    </>
    
  );
};

export default Profile;

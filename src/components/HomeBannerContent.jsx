import React from "react";
// import BannerAssests3 from '../assets/images/BannerAssests.png';
import BannerAssest2 from "../assets/images/BannerAssest2.png";
import BannerAssests3 from '../assets/images/BannerAssests3.png'


const HomeBannerContent = () => {
  return (
    <div>
           <div className="flex flex-col md:flex-row p-5 font-notosans gap-4">
           <div className="md:w-[50%] w-[100%] h-auto  flex justify-center items-center">
          <img src={BannerAssests3} alt="" className="h-[300px]"/>
        </div>
        <div className="md:w-[50%] w-[100%] gap-2 flex flex-col justify-center ">
          <span className="font-bold text-[1.5rem] font-monsterrtate ">Transform Your Future with Online Learning</span>
         
          <ul className="flex flex-col">
            <h2 className="font-semibold font-monsterrtate">Key Features:</h2>
            <li className="text-[13px]">● Interactive content to keep you inspired.</li>
            <li className="text-[13px]">● Monitor your achievements and milestones.</li>
            <li className="text-[13px]">● Connect with learners and educators worldwide.</li>
          </ul>
        </div>
       
      </div>
      <div className="flex flex-col md:flex-row p-5 font-notosans gap-4">
        <div className="md:w-[50%] w-[100%] md:order-1 gap-2 order-2 flex flex-col justify-center ">
          <span className="font-bold text-[1.5rem] font-monsterrtate ">Unlock Your Potential with Online Learning</span>
          <small>
            Welcome to a platform where learning knows no bounds. Education is
            the key to unlocking personal and professional growth, and we’re
            here to guide you every step of the way.
          </small>
          <ul className="flex flex-col">
            <h2 className="font-semibold font-monsterrtate">Why Choose Us?</h2>
            <li className="text-[13px]">● Access a wide range of expertly crafted courses.</li>
            <li className="text-[13px]">● Learn from experienced instructors.</li>
            <li className="text-[13px]">● Flexible and personalized learning experiences designed for you.</li>
          </ul>
        </div>
        <div className="md:w-[50%] w-[100%] h-auto order-1 md:order-2 flex justify-center items-center">
          <img src={BannerAssest2} alt="" className="h-[300px]"/>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerContent;

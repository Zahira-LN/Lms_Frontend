import React from "react";
import HomeBanner1 from "../assets/images/HomeBanner1.png";
import HomeBannerContent from "../components/HomeBannerContent";
export const Home = () => {

  return (
    <div className="flex flex-col">
    <div className="  flex md:flex-row flex-col justify-center items-center w-[100%] md:h-[100vh] h-auto py-4  ">
      <div className="flex flex-col p-4 md:w-[50%] w-[100%] md:order-1 order-2">
        <span className="font-bold text-[1.5rem] font-monsterrtate ">Unlock Your Potential with Byway</span>
        <small className="font-notosans">
          Welcome to LMS system, where learning knows no bounds. We believe that
          education is the key to personal and professional growth, and we're
          here to guide you on your journey to success. Start your instructor
          journey
        </small>
      </div>

      <div className="h-[100%] flex justify-center items-center md:w-[50%] w-[100%] order-1 md:order-2">
        <img src={HomeBanner1} alt="" className="h-[400px]"/>
      </div>
    </div>
    <HomeBannerContent/>
    </div>
  );
};

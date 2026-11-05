"use client";
import { useEffect } from "react";
import AOS from "aos";
import CustomButton from "../atoms/CustomButton";

interface AboutMeProps {
  about: {
    name: string;
    role: string;
    years_experience: string;
    bio: string;
  };
}

const AboutMe = ({ about }: AboutMeProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="min-h-screen bg-color-darkPurple flex justify-center items-center">
      <div className="w-full lg:w-[80%] lg:h-screen flex flex-col lg:flex-row justify-center items-center p-5 gap-10 2xl:gap-16 text-white">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="h-[356px] max-h-[456px] w-full max-w-[377px] lg:w-[50%] lg:max-h-full lg:max-w-[377px] bg-white rounded-xl text-color-darkPurple relative overflow-hidden"
        >
          <div className="absolute left-2 top-[80%] translate-y-1/4 flex items-center">
            <p className="-rotate-90 leading-none w-max whitespace-nowrap origin-left text-sm md:text-lg">
              ZAKY MAULANA AL BAJILI
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3 absolute right-0 top-[20%]">
            <h1 className="text-[100px] sm:text-[200px] xl:text-[150px] font-bold text-right leading-none">
              {about.years_experience}
            </h1>
            <h2 className="text-xl lg:text-3xl font-bold text-wrap text-center">
              Years Of Experience
            </h2>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
          className="max-w-full md:max-w-[80%] lg:max-w-[50%] flex flex-col gap-5"
        >
          <p className="text-xl font-bold font-gabarito ">
            <span className="text-color-softGreen">-</span> About Me
          </p>
          <h1 className="font-bold font-gabarito sm:text-xl md:text-2xl lg:text-5xl lg:leading-[56px]">
            Who Is{" "}
            <span className="text-color-softGreen">
              {about.name}?
            </span>
          </h1>
          <p className="text-color-subtleGray text-justify">{about.bio}</p>
          {/* <Button variant="softGreen" className="w-fit px-1 py-1 h-12 gap-2 font-gabarito font-semibold">
            <span className="h-10 w-10 rounded-full bg-color-subtleGray flex items-center justify-center text-color-dark shrink-0">
              <ChevronRight />
            </span>
            <span className="h-10 px-3 flex items-center justify-center text-color-dark">
              Download CV
            </span>
          </Button> */}
          <CustomButton variant="dark">Download CV</CustomButton>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;

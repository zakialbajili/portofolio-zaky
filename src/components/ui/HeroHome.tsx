"use client"
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
import { TypewriterEffectSmooth } from "./type-writer-effect";
import ScrollVelocity from "./ScrollVelocity";
/// ..
const HeroHome = () => {
  useEffect(()=> {
    AOS.init()
  },[])
  const words=[{text:"I'm", className:"text-color-primerText"},{text:"Zaky,", className:"underline underline-offset-[12px]"}]
  return (
    <div className="h-screen flex flex-col bg-color-subtleGray text-color-primerText">
      <div className=" flex-grow w-full text-center relative font-Mono">
        <div className="h-[50vh] flex flex-col gap-3 lg:gap-5 justify-center items-center pt-10 lg:pt-0">
          <h1 className="text-lg xl:text-xl 2xl:text-3xl">Hello</h1>
          <TypewriterEffectSmooth words={words} />
          <h2 className="text-xl xl:text-3xl 2xl:text-5xl font-semibold text-center leading-none 2xl:leading-[54px]">
            Fullstack Web Developer
          </h2>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="absolute bottom-0 w-full z-10"
        >
          <Image
            src={"/bw_hero.png"}
            alt="Profile"
            width={500}
            height={300}
            className="w-[80vw] lg:w-[40vw] xl:w-[40vw] lg:max-h-[50vh] xl:max-w-[600px] h-fit mx-auto"
          />
        </div>
        <div data-aos="zoom-in" className="absolute bottom-0 w-full">
          <div className=" w-[90vw] h-[45vw] lg:w-[40vw] lg:max-w-[700px] lg:h-[20vw] lg:max-h-[350px] mx-auto rounded-t-full bg-color-darkPurple"></div>
        </div>
      </div>
      <div className="h-fit justify-center w-full bg-color-softGreen flex items-center overflow-x-hidden">
        <ScrollVelocity
          texts={['Fullstack Web Developer']} 
          velocity={200} 
          numCopies={5}
          className=" custom-scroll-text"
        />
      </div>
    </div>
  );
};
export default HeroHome;

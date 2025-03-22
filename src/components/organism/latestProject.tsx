"use client";
import AOS from "aos";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
const LatestProject = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="min-h-screen bg-color-darkPurple flex flex-col justify-center items-center gap-16 py-16 px-5 text-white">
      <div className="flex flex-col gap-3 self-start w-full lg:w-[80%] mx-auto font-Mono">
        <p className="text-xl font-bold">
          <span className="text-color-softGreen">-</span> Projects
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold text-color-softGreen">
          My Latest Projects
        </h1>
      </div>
      <div className="w-full lg:w-[80%] flex flex-col justify-center items-center gap-10">
        <div
          data-aos="fade-right"
          data-aos-duration="300"
          data-aos-easing="ease-in-sine"
          className="w-full h-fit py-5 px-4 flex flex-col md:flex-row md:justify-between items-center bg-white/30 backdrop-blur rounded-[35px] gap-5"
        >
          <Image
            src={"https://assets.aceternity.com/demos/tailwindmasterkit.webp"}
            alt="Thumbnail Project"
            width={100}
            height={100}
            className="w-full lg:w-[50%] h-fit max-h-[450px] rounded-[35px]"
          />
          <div className="w-full lg:w-[50%] flex flex-col justify-center gap-5 px-5">
            <h1 className="font-bold font-Mono text-lg lg:text-3xl">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="text-xs lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              repellat quasi autem debitis consequatur possimus, cupiditate
              repudiandae porro ipsam tempore modi. Aspernatur animi mollitia
              omnis exercitationem nobis voluptatibus. Inventore, deleniti.
            </p>
            <button className="w-fit p-1 rounded-full flex gap-3 bg-white">
              <div className="h-10 w-10 rounded-full bg-color-softPurple flex items-center justify-center">
                <ChevronRight />
              </div>
              <div className="h-10 w-fit px-5 rounded-full bg-color-softGreen flex items-center justify-center text-color-dark font-semibold">
                <p>View More</p>
              </div>
            </button>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-easing="ease-in-sine"
          className="w-full h-fit py-5 px-4 flex flex-col-reverse md:flex-row md:justify-between items-center bg-white/30 backdrop-blur rounded-[35px] gap-5"
        >
          <div className="w-full lg:w-[50%] flex flex-col justify-center gap-5 px-5">
            <h1 className="font-bold font-Mono text-lg lg:text-3xl">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="text-xs lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              repellat quasi autem debitis consequatur possimus, cupiditate
              repudiandae porro ipsam tempore modi. Aspernatur animi mollitia
              omnis exercitationem nobis voluptatibus. Inventore, deleniti.
            </p>
            <button className="w-fit p-1 rounded-full flex gap-3 bg-white">
              <div className="h-10 w-10 rounded-full bg-color-softPurple flex items-center justify-center">
                <ChevronRight />
              </div>
              <div className="h-10 w-fit px-5 rounded-full bg-color-softGreen flex items-center justify-center text-color-dark font-semibold">
                <p>View More</p>
              </div>
            </button>
          </div>
          <Image
            src={"https://assets.aceternity.com/demos/tailwindmasterkit.webp"}
            alt="Thumbnail Project"
            width={100}
            height={100}
            className="w-full lg:w-[50%] h-fit max-h-[450px] rounded-[35px]"
          />
        </div>
        <div
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className="w-full h-fit py-5 px-4 flex flex-col md:flex-row md:justify-between items-center bg-white/30 backdrop-blur rounded-[35px] gap-5"
        >
          <Image
            src={"https://assets.aceternity.com/demos/tailwindmasterkit.webp"}
            alt="Thumbnail Project"
            width={100}
            height={100}
            className="w-full lg:w-[50%] h-fit max-h-[450px] rounded-[35px]"
          />
          <div className="w-full lg:w-[50%] flex flex-col justify-center gap-5 px-5">
            <h1 className="font-bold font-Mono text-lg lg:text-3xl">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="text-xs lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              repellat quasi autem debitis consequatur possimus, cupiditate
              repudiandae porro ipsam tempore modi. Aspernatur animi mollitia
              omnis exercitationem nobis voluptatibus. Inventore, deleniti.
            </p>
            <button className="w-fit p-1 rounded-full flex gap-3 bg-white">
              <div className="h-10 w-10 rounded-full bg-color-softPurple flex items-center justify-center">
                <ChevronRight />
              </div>
              <div className="h-10 w-fit px-5 rounded-full bg-color-softGreen flex items-center justify-center text-color-dark font-semibold">
                <p>View More</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LatestProject;

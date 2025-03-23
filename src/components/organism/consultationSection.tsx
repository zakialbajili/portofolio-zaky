'use client'
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import FormConsultation from "../molecules/FormConsultation";
import AOS from "aos"
import { useEffect } from "react";
const ConsultationSection = () => {
    useEffect(()=>{
        AOS.init()
    },[])
  return (
    <div className="bg-color-darkPurple min-h-screen flex justify-center items-center p-5 overflow-x-hidden">
      <div className="w-full lg:w-[80%] flex flex-col md:flex-row justify-center gap-10 lg:gap-16">
        <div
            data-aos="zoom-in"
            data-aos-duration="500"
            className="flex flex-col gap-5 font-gabarito flex-grow md:max-w-[50%] lg:w-[50%] text-white"
        >
          <h1 className="text-3xl 2xl:text-5xl font-bold text-color-softGreen">
            <span className="text-white">Let's</span> Collaborate With Me
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
            adipisci! Natus velit dignissimos, tempore facere mollitia quos
            similique fugiat
          </p>
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center bg-white text-color-darkPurple h-10 w-10 rounded-full">
              <Mail />
            </div>
            <p>zakyalbajili10@gmail.com</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center bg-white text-color-darkPurple h-10 w-10 rounded-full">
              <Phone />
            </div>
            <p>0896-5426-0065</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center bg-white text-color-darkPurple h-10 w-10 rounded-full">
              <Linkedin />
            </div>
            <p>zakyalbajili10</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center bg-white text-color-darkPurple h-10 w-10 rounded-full">
              <Instagram />
            </div>
            <p>zakialbajili</p>
          </div>
        </div>
        <div
            data-aos="zoom-out-left"
            data-aos-duration="1000"
            className="flex-grow lg:w-[50%]"
        >
          <FormConsultation />
        </div>
      </div>
    </div>
  );
};
export default ConsultationSection;

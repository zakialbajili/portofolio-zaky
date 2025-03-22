'use client'
import { BriefcaseBusiness, GraduationCap } from "lucide-react"
import AOS from "aos"
import { useEffect } from "react"
const EducationSection = () => {
    useEffect(()=> {
        AOS.init()
      },[])
    return(
        <div className="min-h-screen bg-color-subtleGray flex items-center justify-center py-16 px-5">
          <div className="w-full lg:w-[80%] flex flex-col lg:flex-row justify-center gap-10">
            <div
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="h-fit w-full lg:w-[50%] bg-color-secondaryText/10 rounded-xl p-5"
            >
              <div className="flex justify-center items-center gap-5 pb-3 border-b-[1px] border-color-primerText/50">
                <div className="bg-color-darkPurple p-3 rounded-full text-white">
                  <GraduationCap />
                </div>
                <h1 className="text-xl lg:text-3xl font-bold font-Mono text-color-darkPurple">
                  Education
                </h1>
              </div>
              <div className="py-4 flex flex-col gap-3">
                <div className="flex justify-between gap-3 text-color-primerText">
                  <div>
                    <h1 className="text-md lg:text-2xl font-bold">
                      University of Sultan Ageng Tirtayasa
                    </h1>
                    <p className="text-xs lg:text-base text-color-secondaryText">
                      Bachelor in Electrical Engineering
                    </p>
                  </div>
                  <p className="text-sm lg:text-base ">2020-2024</p>
                </div>
              </div>
            </div>
            <div 
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
                className="w-full lg:w-[50%] bg-color-secondaryText/10 rounded-xl p-5"
            >
              <div className="flex justify-center items-center gap-5 pb-3 border-b-[1px] border-color-primerText/50">
                <div className="bg-color-darkPurple p-3 rounded-full text-white">
                  <BriefcaseBusiness />
                </div>
                <h1 className="text-xl lg:text-3xl font-bold font-Mono text-color-darkPurple text-center">
                  Work Experiences
                </h1>
              </div>
              <div className="py-4 flex flex-col gap-5">
                <div className="flex justify-between gap-3 text-color-primerText">
                  <div>
                    <h1 className="text-md lg:text-2xl font-bold">
                      Candidax Consultant
                    </h1>
                    <p className="text-xs lg:text-base text-color-secondaryText">
                      Fullstack Web Developer (Freelance)
                    </p>
                  </div>
                  <p className="text-sm lg:text-base ">2024</p>
                </div>
                <div className="flex justify-between gap-3 text-color-primerText">
                  <div>
                    <h1 className="text-md lg:text-2xl font-bold">
                      PT. OQB Software House
                    </h1>
                    <p className="text-xs lg:text-base text-color-secondaryText">
                      Fullstack Web Developer (Freelance)
                    </p>
                  </div>
                  <p className="text-sm lg:text-base ">2024</p>
                </div>
                <div className="flex justify-between gap-3 text-color-primerText">
                  <div>
                    <h1 className="text-md lg:text-2xl font-bold">
                      SMKN 3 Kota Serang
                    </h1>
                    <p className="text-xs lg:text-base text-color-secondaryText">
                      Fullstack Web Developer (Freelance)
                    </p>
                  </div>
                  <p className="text-sm lg:text-base ">2024</p>
                </div>
                <div className="flex justify-between gap-3 text-color-primerText">
                  <div>
                    <h1 className="text-md lg:text-2xl font-bold">
                      MYG Beauty Clinic
                    </h1>
                    <p className="text-xs lg:text-base text-color-secondaryText">
                      Fullstack Web Developer (Freelance)
                    </p>
                  </div>
                  <p className="text-sm lg:text-base ">2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
export default EducationSection
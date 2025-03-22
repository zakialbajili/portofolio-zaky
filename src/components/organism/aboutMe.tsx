'use client'
import { ChevronRight } from "lucide-react"
import { useEffect } from "react"
import AOS from "aos"
const AboutMe = () => {
    useEffect(()=> {
        AOS.init()
      },[])
    return(
        <div className="min-h-screen bg-color-darkPurple flex justify-center items-center">
          <div className="w-full lg:w-[80%] lg:h-[50vh] flex flex-col lg:flex-row justify-center items-center p-5 gap-16 text-white">
            <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="h-[356px] max-h-[456px] w-full max-w-[377px] lg:w-[50%] lg:max-h-full lg:max-w-[377px] bg-white rounded-xl text-color-darkPurple relative overflow-hidden"
            >
              <div className="absolute left-2 top-[80%] translate-y-1/4 flex items-center">
                <p className="-rotate-90 leading-none w-max whitespace-nowrap origin-left text-sm md:text-xl">
                  ZAKY MAULANA AL BAJILI
                </p>
              </div>
              <div className="flex flex-col justify-center gap-3 absolute right-0 top-[20%]">
                <h1 className="text-[200px] sm:text-[200px] font-bold text-right leading-none">
                  1+
                </h1>
                <h2 className="text-xl lg:text-3xl font-bold text-wrap text-center">
                  Years Of Experience
                </h2>
              </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
                className="max-w-full md:max-w-[80%] lg:max-w-[50%] flex flex-col gap-5"
            >
              <p className="text-xl font-bold "><span className="text-color-softGreen">-</span>About Me</p>
              <h1 className="font-bold font-Mono sm:text-xl md:text-3xl lg:text-5xl lg:leading-[56px]">
                Who Is{" "}
                <span className="text-color-softGreen">
                  Zaky Maulana Al Bajili?
                </span>
              </h1>
              <p className="text-color-subtleGray">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum debitis quas aperiam, molestias impedit culpa
                molestiae doloribus ipsa, non eum veritatis possimus adipisci,
                eius vitae vel omnis maxime. Officia, tenetur!
              </p>
              <button className="w-fit bg-color-dark p-1 rounded-full flex gap-2">
                <div className="h-10 w-10 rounded-full bg-color-subtleGray flex items-center justify-center text-color-dark">
                  <ChevronRight />
                </div>
                <div className="h-10 p-3 bg-color-softGreen rounded-full text-color-dark flex items-center justify-center">
                  Download CV
                </div>
              </button>
            </div>
          </div>
        </div>
    )
}
export default AboutMe
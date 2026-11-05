'use client'
import { BriefcaseBusiness, GraduationCap } from "lucide-react"
import AOS from "aos"
import { useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const SectionCard = ({ icon, title, children, aosOffset }: { icon: React.ReactNode; title: string; children: React.ReactNode; aosOffset?: string }) => (
  <Card
    data-aos="fade-up"
    data-aos-offset={aosOffset}
    data-aos-easing="ease-in-sine"
    className="h-fit w-full lg:w-[50%] bg-color-secondaryText/10 rounded-xl border-none p-5 shadow-none"
  >
    <div className="flex justify-center items-center gap-5 pb-3 font-gabarito">
      <div className="bg-color-darkPurple p-3 rounded-full text-white">
        {icon}
      </div>
      <h1 className="text-xl lg:text-3xl font-bold text-color-darkPurple text-center">
        {title}
      </h1>
    </div>
    <Separator className="bg-color-primerText/30" />
    <div className="py-4 flex flex-col gap-5 font-gabarito">{children}</div>
  </Card>
)

const ExperienceItem = ({ role, company, period }: { role: string; company: string; period: string }) => (
  <div className="flex justify-between gap-3 text-color-primerText">
    <div className="text-nowrap">
      <h1 className="text-md lg:text-lg font-bold">{role}</h1>
      <p className="text-xs lg:text-base text-color-secondaryText">{company}</p>
    </div>
    <p className="text-sm lg:text-base text-pretty">{period}</p>
  </div>
)

interface EducationItem {
  degree: string;
  school: string;
  period: string;
}
interface ExperienceItemData {
  role: string;
  company: string;
  period: string;
}
interface EducationSectionProps {
  education: EducationItem[];
  experiences: ExperienceItemData[];
}

const EducationSection = ({ education, experiences }: EducationSectionProps) => {
    useEffect(()=> {
        AOS.init()
      },[])
    return(
        <div className="min-h-screen bg-color-subtleGray flex items-center justify-center py-16 px-5">
          <div className="w-full lg:w-[80%] flex flex-col lg:flex-row justify-center gap-10">
            <SectionCard icon={<GraduationCap />} title="Education">
              {education.map((e) => (
                <div key={e.degree + e.school} className="flex justify-between gap-3 text-color-primerText">
                  <div>
                    <h1 className="text-md lg:text-lg font-bold">{e.school}</h1>
                    <p className="text-xs lg:text-base text-color-secondaryText">{e.degree}</p>
                  </div>
                  <p className="text-sm lg:text-base ">{e.period}</p>
                </div>
              ))}
            </SectionCard>
            <SectionCard icon={<BriefcaseBusiness />} title="Work Experiences">
              {experiences.map((x, i) => (
                <div key={x.role + x.company} className="flex flex-col gap-5">
                  {i > 0 && <Separator className="bg-color-primerText/30" />}
                  <ExperienceItem role={x.role} company={x.company} period={x.period} />
                </div>
              ))}
            </SectionCard>
          </div>
        </div>
    )
}
export default EducationSection

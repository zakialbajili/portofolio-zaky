"use client";
import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CustomButton from "@/components/atoms/CustomButton";

interface ProjectItem {
  title: string;
  description: string;
  image_url: string;
}

interface LatestProjectProps {
  projects: ProjectItem[];
}

const cardClasses =
  "w-full h-fit py-5 px-4 flex flex-col md:flex-row md:justify-between items-center bg-color-secondaryText/20 border border-color-white/20 rounded-[35px] gap-5";

const LatestProject = ({ projects }: LatestProjectProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="min-h-screen bg-color-darkPurple flex flex-col justify-center items-center gap-16 py-16 px-5 text-white">
      <div className="w-full lg:w-[80%] flex flex-col lg:flex-row justify-between gap-7">
        <div className="flex flex-col gap-3 self-start w-full lg:w-[80%] mx-auto font-gabarito">
          <Badge variant="secondary"
          className="w-fit px-5 text-lg bg-color-softPurple text-color-white hover:bg-color-softPurple"
          >
            Projects
          </Badge>
          <h1 className="text-3xl md:text-5xl font-semibold text-color-softGreen">
            <span className="text-color-white">My</span> Latest Projects
          </h1>
        </div>
        <CustomButton variant="default">
          View More
        </CustomButton>
      </div>
      <div className="w-full lg:w-[80%] flex flex-col justify-center items-center gap-10">
        {projects.map((project, i) => (
          <Card
            key={project.title + i}
            data-aos="fade-right"
            data-aos-duration={300 + i * 100}
            data-aos-easing="ease-in-sine"
            className={cardClasses}
          >
            {i % 2 === 0 ? (
              <>
                <ProjectImage src={project.image_url} />
                <ProjectBody title={project.title} description={project.description} />
              </>
            ) : (
              <>
                <ProjectBody title={project.title} description={project.description} />
                <ProjectImage src={project.image_url} />
              </>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

function ProjectImage({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt="Thumbnail Project"
      width={100}
      height={100}
      className="w-full lg:w-[50%] h-fit max-h-[450px] rounded-2xl"
    />
  );
}

function ProjectBody({ title, description }: { title: string; description: string }) {
  return (
    <div className="w-full lg:w-[50%] flex flex-col justify-center gap-5 px-5">
      <h1 className="font-bold font-gabarito text-lg lg:text-3xl text-color-softGreen">
        {title}
      </h1>
      <p className="text-xs lg:text-base text-color-border">{description}</p>
      <CustomButton variant="default">View More</CustomButton>
    </div>
  );
}

export default LatestProject;

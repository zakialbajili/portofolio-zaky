import HeroHome from "@/components/ui/HeroHome";
import ScrollToTop from "@/components/atoms/ScrollToTop";
import AboutMe from "@/components/organism/AboutMe";
import EducationSection from "@/components/organism/EducationSection";
import LatestProject from "@/components/organism/LatestProject";
import ConsultationSection from "@/components/organism/ConsultationSection";
import { getContent } from "@/lib/content";

export default function Home() {
  const content = getContent();
  return (
    <>
      <main>
        <HeroHome />
        <AboutMe about={content.about!} />
        <EducationSection
          education={content.education}
          experiences={content.experiences}
        />
        <LatestProject projects={content.projects} />
        <ConsultationSection />
      </main>
      <ScrollToTop />
    </>
  );
}

import EducationSection from "@/components/organism/EducationSection";
import { getEducation, getExperiences } from "@/lib/content";

export default function ExperiencePage() {
  return (
    <main>
      <EducationSection
        education={getEducation()}
        experiences={getExperiences()}
      />
    </main>
  );
}

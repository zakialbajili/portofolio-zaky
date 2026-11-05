import AboutMe from "@/components/organism/AboutMe";
import { getAbout } from "@/lib/content";

export default function AboutPage() {
  const about = getAbout();
  return (
    <main>
      <AboutMe about={about!} />
    </main>
  );
}

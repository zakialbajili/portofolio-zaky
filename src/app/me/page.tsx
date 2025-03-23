import { NavbarDemo } from "@/components/organism/Navbar";
import HeroHome from "@/components/ui/HeroHome";
import ScrollToTop from "@/components/atoms/scrollToTop";
import AboutMe from "@/components/organism/aboutMe";
import EducationSection from "@/components/organism/educationSection";
import LatestProject from "@/components/organism/latestProject";
import ConsultationSection from "@/components/organism/consultationSection";
import Footer from "@/components/organism/Footer";
export default function Home() {
  return (
    <>
      <NavbarDemo />
      <main>
        <HeroHome />
        <AboutMe />
        <EducationSection />
        <LatestProject />
        <ConsultationSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

import { Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-16">
      <div className="bg-white w-[80%] mx-auto">
        <h1 className="font-gabarito text-2xl md:text-3xl lg:text-5xl font-bold pb-5 border-b-[1px] border-color-border text-color-primerText">
          Let's <span className="text-color-darkPurple">Connect </span>With Me
        </h1>
        <div className="py-5 flex flex-col lg:flex-row justify-between gap-y-5 gap-x-10">
          <div className="flex-grow lg:w-1/3 flex flex-col gap-5 text-color-primerText">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 bg-color-darkPurple p-1">
                <AvatarImage src="/logo_zaky.webp" alt="logo" />
              </Avatar>
              <h2 className="font-thin text-2xl 2xl:text-3xl font-gabarito">
                Zaky Maulana Al Bajili
              </h2>
            </div>
            <p className="text-color-secondaryText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              facere illum aspernatur quibusdam? Sit quam ratione veritatis,
              eaque saepe accusamus exercitationem, voluptate dolor, vitae atque
              earum harum nulla? Soluta, sequi!
            </p>
            <div className="flex gap-3">
              <Button asChild variant="default" size="icon" aria-label="Email">
                <Link href={"mailto:zakyalbajili10@gmail.com"}>
                  <Mail />
                </Link>
              </Button>
              <Button asChild variant="default" size="icon" aria-label="LinkedIn">
                <Link href={"https://www.linkedin.com/in/zakyalbajili10"}>
                  <Linkedin />
                </Link>
              </Button>
              <Button asChild variant="default" size="icon" aria-label="Instagram">
                <Link href={"https://www.instagram.com/zakialbajili"}>
                  <Instagram />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-grow lg:w-1/3  flex flex-col gap-5 text-color-secondaryText">
            <h2 className="font-semibold text-color-darkPurple">Navigation</h2>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/projects"}>Projects</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
          <div className="flex-grow lg:w-1/3  flex flex-col gap-5 text-color-secondaryText">
            <h2 className="font-semibold text-color-darkPurple">Contact</h2>
            <Link href={"https://www.linkedin.com/in/zakyalbajili10"}>www.linkedin.com/in/zakyalbajili10</Link>
            <Link href={"https://zakyalbajili.vercel.app"}>
              www.zakyalbajili.vercel.app
            </Link>
            <Link href={"mailto:zakyalbajili10"}>zakyalbajili10@gmail.com</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

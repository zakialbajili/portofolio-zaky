import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
              <Image src="/logo.png" alt="logo" width={50} height={50} />
              <h2 className="font-thin text-2xl 2xl:text-3xl font-gabarito">
                Zaky
              </h2>
            </div>
            <p className="text-color-secondaryText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              facere illum aspernatur quibusdam? Sit quam ratione veritatis,
              eaque saepe accusamus exercitationem, voluptate dolor, vitae atque
              earum harum nulla? Soluta, sequi!
            </p>
            <div className="flex gap-3">
              <div className="flex items-center justify-center bg-color-darkPurple text-white h-10 w-10 rounded-full">
                <Phone />
              </div>
              <div className="flex items-center justify-center bg-color-darkPurple text-white h-10 w-10 rounded-full">
                <Mail />
              </div>
              <div className="flex items-center justify-center bg-color-darkPurple text-white h-10 w-10 rounded-full">
                <Linkedin />
              </div>
              <div className="flex items-center justify-center bg-color-darkPurple text-white h-10 w-10 rounded-full">
                <Instagram />
              </div>
            </div>
          </div>
          <div className="flex-grow lg:w-1/3  flex flex-col gap-5 text-color-secondaryText">
            <h2 className="font-semibold text-color-darkPurple">Navigation</h2>
            <Link href={"/me"}>Home</Link>
            <Link href={"/me"}>Projects</Link>
            <Link href={"/me"}>Contact</Link>
          </div>
          <div className="flex-grow lg:w-1/3  flex flex-col gap-5 text-color-secondaryText">
            <h2 className="font-semibold text-color-darkPurple">Contact</h2>
            <Link href={"/me"}>0896-5426-0065</Link>
            <Link href={"https://zakyalbajili.vercel.app"}>www.zakyalbajili.vercel.app</Link>
            <Link href={"/me"}>zakyalbajili10@gmail.com</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

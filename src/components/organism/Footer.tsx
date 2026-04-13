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
              <div className="rounded-full p-1 bg-color-darkPurple">
                <Image
                  src="/logo_zaky.webp"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </div>
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
              <Link
                href={"mailto:zakyalbajili10@gmail.com"}
                className="flex items-center justify-center bg-color-darkPurple hover:bg-color-softPurple text-white h-10 w-10 rounded-full"
              >
                <Mail />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/zakyalbajili10"}
                className="flex items-center justify-center bg-color-darkPurple hover:bg-color-softPurple text-white h-10 w-10 rounded-full"
              >
                <Linkedin />
              </Link>
              <Link
                href={"https://www.instagram.com/zakialbajili"}
                className="flex items-center justify-center bg-color-darkPurple hover:bg-color-softPurple text-white h-10 w-10 rounded-full"
              >
                <Instagram />
              </Link>
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

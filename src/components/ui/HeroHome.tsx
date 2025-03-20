import Image from "next/image";
const HeroHome = () => {
  return (
    <div className="h-screen flex flex-col bg-color-subtleGray text-color-primerText">
      <div className=" flex-grow w-full text-center relative font-Mono">
        <div className="h-[50vh] flex flex-col gap-3 lg:gap-5 justify-center items-center">
          <h1 className="text-lg lg:text-3xl">Hello</h1>
          <h2 className="text-3xl lg:text-5xl font-semibold text-center lg:leading-[64px]">
            I'm <span className="text-color-softPurple">Zaky</span>, <br />{" "}
            Fullstack Web Developer
          </h2>
        </div>
        <div className="absolute bottom-0 w-full z-10">
          <Image
            src={"/bw_hero.png"}
            alt="Profile"
            width={500}
            height={300}
            className="w-[80vw] lg:w-[50vw] lg:max-w-[600px] h-fit mx-auto"
          />
        </div>
        <div className="absolute bottom-0 w-full">
          <div className=" w-[90vw] h-[45vw] lg:w-[50vw] lg:max-w-[700px] lg:h-[25vw] lg:max-h-[350px] mx-auto rounded-t-full bg-color-darkPurple"></div>
        </div>
      </div>
      <div className="h-20 text-center w-full bg-color-softGreen">
        TESSSSSSS
      </div>
    </div>
  );
};
export default HeroHome;

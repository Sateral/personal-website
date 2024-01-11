import Me from "@/public/me.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex ss:flex-row flex-col justify-center items-center py-20">
      <div className="flex flex-1 basis-1/2 justify-center items-center">
        <div>
          <h1 className="font-bold xl:text-4xl md:text-3xl text-2xl text-left bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text">
            I'm Daniel, a
          </h1>
          <div className="inline-block">
            <h2 className="font-bold xl:text-7xl md:text-6xl text-5xl bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text -ml-[0.5px] typewriter">
              PROGRAMMER
            </h2>
          </div>
          <p className="md:text-lg sm:text-base font-extralight leading-[30.8px] mt-5">
            With a love for coding, I strive to develop user-friendly,
            efficient, and impactful programs and coding solutions.
          </p>
        </div>
      </div>
      <div className="flex flex-1 basis-1/3 justify-center items-center relative">
        <Image src={Me} alt="Picture of me" className="relative z-50"></Image>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient" />

        <div className="absolute z-[1] w-[40%] h-[40%] rounded-full bottom-0 pink__gradient" />

        <div className="absolute z-[0] w-[100%] h-[50%] right-20 bottom-20 white__gradient" />
      </div>
    </div>
  );
};

export default Hero;

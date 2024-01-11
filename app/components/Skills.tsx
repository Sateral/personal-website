import CodingIcons from "@/public/Coding icons.png";
import MSIcons from "@/public/Microsoft icons.png";
import Image from "next/image";

const Skills = () => {
  return (
    <section id="skills" className="sm:py-16 py-6">
      <div className="font-medium text-3xl border-b-2 w-[100px] mb-8">
        Skills
      </div>

      <div className="flex md:flex-row flex-col md:pb-32 pb-8">
        <div className="flex-1 basis-1/2 flex justify-center items-center flex-col xl:px-0 sm:px-16 px-6">
          <div className="md:ml-[40px]">
            <div className="flex flex-row justify-center items-center">
              <h1 className="flex-1 font-semibold ss:text-[42px] text-[32px] text-offWhite ss:leading-[50px] leading-[60px]">
                Coding Versatility
              </h1>
            </div>

            <p className="font-extralight ss:text-[18px] text-[16px]  leading-[30.8px] max-w-[470px] mt-5">
              Over the past couple of years, I&apos;ve gained experience in
              various languages, including Python, Java, JavaScript, TypeScript,
              and C. Furthermore, I&apos;ve worked with various frameworks and
              libraries to develop interactive, user-friendly, responsive web
              applications.
            </p>
          </div>
        </div>

        <div className="flex-1 basis-1/2 flex justify-center items-center md:my-0 my-10 relative">
          <Image
            src={CodingIcons}
            alt="Daniel Kop"
            className="w-[250px] h-[auto] relative z-[5]"
          ></Image>
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient " />

          <div className="absolute z-[1] w-[40%] h-[40%] rounded-full bottom-0 pink__gradient " />

          <div className="absolute z-[0] w-[100%] h-[50%] right-20 bottom-20 white__gradient " />
        </div>
      </div>

      <div className="flex md:flex-row flex-col fadeIn">
        <div className="flex-1 basis-1/2 flex justify-center items-center md:my-0 my-10 md:order-1 order-2 relative">
          <Image
            src={MSIcons}
            alt="Daniel Kop"
            className="w-[350px] h-[auto] relative z-[5]"
          ></Image>
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient" />

          <div className="absolute z-[1] w-[40%] h-[40%] rounded-full bottom-0 pink__gradient" />

          <div className="absolute z-[0] w-[100%] h-[50%] right-20 bottom-20 white__gradient" />
        </div>

        <div className="flex-1 basis-1/2 flex justify-center items-center flex-col xl:px-0 sm:px-16 px-6 md:order-2 order-1">
          <div>
            <div className="flex flex-row justify-center items-center">
              <h1 className="flex-1 font-semibold ss:text-[42px] text-[32px] text-offWhite ss:leading-[50px] leading-[60px] text-right">
                Microsoft Proficiency
              </h1>
            </div>

            <p className="font-extralight text-offWhite ss:text-[18px] text-[16px]  leading-[30.8px] max-w-[470px] mt-5">
              With proficiency in Microsoft applications, I excel in creating
              refined documents, impactful presentations, and efficient
              spreadsheet, leveraging VBA to automate taks and enhance data
              analysis.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center items-center flex-col md:mt-40 mt-24">
        <div>
          <h1 className="font-quicksand font-semibold ss:text-[42px] text-[32px] text-offWhite ss:leading-[75px] leading-[60px] fadeIn">
            Lorem Ipsum
          </h1>
        </div>
        <div className="grid md:grid-cols-4 xs:grid-cols-2 grid-cols-1 md:gap-32 gap-12 gap-x-32">
          <div
            className="font-quicksand text-offWhite flex flex-col justify-center items-center fadeIn"
            style={{ transitionDelay: "0s" }}
          >
            <h1 className="py-6">Collaborative</h1>
            <img
              src={Collaborative}
              className="w-[150px] h-auto py-10 px-8 skill__icons"
            />
          </div>

          <div
            className="font-quicksand text-offWhite flex flex-col justify-center items-center fadeIn"
            style={{ transitionDelay: "50ms" }}
          >
            <h1 className="py-6">Adaptable</h1>
            <img
              src={Adaptable}
              className="w-[150px] h-auto py-8 px-8 skill__icons"
            />
          </div>

          <div
            className="font-quicksand text-offWhite flex flex-col justify-center items-center fadeIn"
            style={{ transitionDelay: "100ms" }}
          >
            <h1 className="py-6">Independent</h1>
            <img
              src={Independent}
              className="w-[150px] h-auto py-10 px-8 skill__icons"
            />
          </div>

          <div
            className="font-quicksand text-offWhite flex flex-col justify-center items-center fadeIn"
            style={{ transitionDelay: "150ms" }}
          >
            <h1 className="py-6">Efficient</h1>
            <img
              src={Efficient}
              className="w-[150px] h-auto py-10 px-8 skill__icons"
            />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Skills;

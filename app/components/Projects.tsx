import Me from "@/public/me.png";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      projectName: "Aurore de la Vie",
      imageSrc: require("@/public/adlv.png"),
      link: "https://www.auroredelavie.com/",
      description: "",
    },
    {
      projectName: "Hamilton Cat Fanciers Club",
      imageSrc: require("@/public/hcf.png"),
      link: "https://www.hamiltoncatshow.ca/",
      description: "",
    },
    {
      projectName: "Re-usable LightBox Component",
      imageSrc: require("@/public/adlv.png"),
      link: "Null",
      description: "",
    },
  ];
  return (
    <div className="sm:py-16 py-6">
      <div className="font-medium text-3xl border-b-2 w-[13]5px] mb-8">
        Projects
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {projects.map((project) => (
          <div className="hover:scale-105 transition-transform ease-in">
            <p className="font-extralight">{project.projectName}</p>
            <Link href={project.link} target="_blank">
              <Image
                src={project.imageSrc}
                alt={project.projectName}
                className="rounded-lg border-white border-2"
              />
            </Link>
            <p className="font-extralight">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

import Me from "@/public/me.png";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      projectName: "Aurore de la Vie",
      imageSrc: require("@/public/adlv.png"),
      link: "https://www.auroredelavie.com/",
      description:
        "Aurore de la Vie is a British Shorthair Cattery based in Georgetown, ON. This is a full-stack web application built using NextJS, TypeScript, TailwindCSS, Prisma, and MongoDB. This application has a private admin dashboard for the web admins. See Admin Dashboard for an example.",
    },
    {
      projectName: "Hamilton Cat Fanciers Club",
      imageSrc: require("@/public/hcf.png"),
      link: "https://www.hamiltoncatshow.ca/",
      description:
        "Hamilton Cat Fanciers Club is a not-for-profit cat club. This is a front-end web application built using NextJS, TypeScript, and TailwindCSS.",
    },
    {
      projectName: "Re-usable LightBox Component",
      imageSrc: require("@/public/adlv.png"),
      link: "Null",
      description:
        "Lightboxes were one of the biggest headaches I stumbled upon when beginning to code web applications. This is the first version of a resuable lightbox component I developed using TypeScript and Hooks that can be easily implemented in future projects. The current modal is to be revised.",
    },
    {
      projectName: "Admin Dashboard",
      imageSrc: require("@/public/admin-dashboard.png"),
      link: "https://admin-dashboard-git-main-sateral.vercel.app/categories",
      description: "",
    },
  ];

  return (
    <div className="sm:py-16 py-6">
      <div className="font-medium text-3xl border-b-2 w-[13]5px] mb-8">
        Projects
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 ">
        {projects.map((project) => (
          <div
            className="group hover:scale-105 transition-transform ease-in"
            key={project.projectName}
          >
            <p className="font-extralight">{project.projectName}</p>
            <Link href={project.link} target="_blank">
              <Image
                src={project.imageSrc}
                alt={project.projectName}
                className="rounded-lg border-white border-2"
              />
            </Link>
            <p className="font-extralight mt-2 text-sm line-clamp-[1] group-hover:line-clamp-none">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

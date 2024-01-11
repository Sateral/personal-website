import React from "react";
import Code from "@/public/code.svg";
import Briefcase from "@/public/briefcase.svg";
import graduationCap from "@/public/graduation-cap.svg";
import Image from "next/image";

const About = () => {
  const aboutCards = [
    {
      id: "developer",
      header: "Developer",
      icon: Code,
      description:
        "I've always had a passion for creation, and my passion found its outlet in coding, allowing me to transform my ideas into tangible realities. ",
    },
    {
      id: "business man",
      header: "Business Man",
      icon: Briefcase,
      description:
        "With love for entrepreneurship, I aspire transform innovative ideas into impactful solutions.",
    },
    {
      id: "student",
      header: "Student",
      icon: graduationCap,
      description:
        "As a dedicated student, I am committed to achieving academic excellence, participating in school events, and making the most of my education experience",
    },
  ];

  return (
    <section id="about me" className="flex flex-col gap-12 sm:py-16 py-6">
      <div className="font-medium text-3xl border-b-2 w-[155px]">About Me</div>

      <div className="flex md:flex-row flex-col justify-center items-center px-16">
        {aboutCards.map((card, index) => (
          <div
            key={card.id}
            className={`about__card flex flex-col items-center md:min-w-[320px] sm:min-w-full md:min-h-[300px] min-h-[220px] py-8 mb-10 ${
              index !== aboutCards.length - 1 ? "md:mr-8" : ""
            }`}
          >
            <h1 className="text-center font-krona">{card.header}</h1>
            <Image
              alt={card.header}
              src={card.icon}
              className={`py-6 ${index === 1 ? "w-[29.5px]" : "w-[36px]"}`}
            />
            <p className="px-8">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

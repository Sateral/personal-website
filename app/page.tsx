import Image from "next/image";
import Hero from "@/app/components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main id="home" className="w-full overflow-hidden">
      <section className="bg-[#1a1a1e]">
        <div className="max-w-[1280px] mx-auto">
          <div className="mx-8 pt-20">
            <Hero />
            <About />
          </div>
        </div>
      </section>
      <section className="bg-[#0f0f11] border-y-[1px] border-y-[#707070]">
        <div className="max-w-[1280px] mx-auto">
          <div className="mx-8">
            <Skills />
          </div>
        </div>
      </section>
      <section className="bg-[#1a1a1e]">
        <div className="max-w-[1280px] mx-auto">
          <div className="mx-8">
            <Projects />
          </div>
        </div>
      </section>
    </main>
  );
}

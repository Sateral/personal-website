import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <About />
        </div>
      </div>

      <div className="bg-secondary flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Skills />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-center">
        <div className="xl:max-w-[1280px] md:max-w-[1200px] w-full">
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
);

export default App
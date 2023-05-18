import React from 'react'

import { aboutCards } from '../constants';

import Code from '../assets/code.svg'
import Briefcase from '../assets/briefcase.svg'
import graduationCap from '../assets/graduation-cap.svg'

const About = () => (
  <section id='about me' className='flex flex-col justify-center gap-12 items-center sm:py-16 py-6'>
    <div className='font-lexend ss:text-[24px] text-[20x] text-offWhite dark__gradient px-[64px] py-[8px] rounded-[8px]'>About Me</div>

    <div className='flex md:flex-row flex-col justify-center items-center text-offWhite px-16'>
      {aboutCards.map((card, index) => (
        <div key={card.id} className={`about__card rounded-[15px] flex flex-col items-center max-w-[350px] py-8 mb-10 ${index !== aboutCards.length - 1 ? 'md:mr-8' : ''}`}>
          <h1 className='text-center font-krona'>
            {card.header}
          </h1>
          <img src={card.icon} className='w-[36px] py-6' />
          <p className='px-8'>
            {card.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default About

      // <div className='flex flex-col justify-center items-center rounded-[8px] text-of about__card '>
      //   <h1 className='py-6 font-krona'>Developer</h1>
      //   <p className='text-text-center font-quicksand text-[12px] px-8 pb-6'>
      //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      //   </p>
      // </div>
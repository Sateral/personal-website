import React from 'react'
import { aboutCards } from '../constants';

const About = () => (
  <section id='about me' className='flex flex-col justify-center gap-12 items-center sm:py-16 py-6'>
    <div className='font-lexend ss:text-[24px] text-[20x] text-offWhite dark__gradient px-[64px] py-[8px] rounded-[8px] about__card'>About Me</div>

    <div className='flex md:flex-row flex-col justify-center items-center text-offWhite px-16'>
      {aboutCards.map((card, index) => (
        <div key={card.id} className={`about__card rounded-[15px] flex flex-col items-center md:max-w-[350px] py-8 mb-10 ${index !== aboutCards.length - 1 ? 'md:mr-8' : ''}`}>
          <h1 className='text-center font-krona'>
            {card.header}
          </h1>
          <img src={card.icon} className={`py-6 ${index === 1 ? 'w-[29.5px]' : 'w-[36px]'}`} />
          <p className='px-8'>
            {card.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default About;

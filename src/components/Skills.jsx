import React, { useEffect, useRef } from 'react';
import CodingIcons from '../assets/Coding icons.png';
import MSIcons from '../assets/Microsoft icons.png';
import Adaptable from '../assets/adaptable.svg';
import Efficient from '../assets/efficient.svg';
import Collaborative from '../assets/handshake.svg';
import Independent from '../assets/independent.svg';

const Skills = () => {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.fadeIn');
    hiddenElements.forEach((el) => observer.current.observe(el));

    // Cleanup the observer when the component unmounts
    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <section id='skills' className='sm:py-16 py-6'>
      <div className='flex md:flex-row flex-col md:pb-32 pb-8 fadeIn'>
        <div className='flex-1 basis-1/2 flex justify-center items-center flex-col xl:px-0 sm:px-16 px-6'>
          <div className='md:ml-[40px]'>
            <div className='flex flex-row justify-center items-center'>
              <h1 className='flex-1 font-quicksand font-semibold ss:text-[42px] text-[32px] text-offWhite ss:leading-[75px] leading-[60px]'>
                Lorem ipsum
              </h1>
            </div>

            <p className='font-quicksand font-normal text-offWhite ss:text-[18px] text-[16px]  leading-[30.8px] max-w-[470px] mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className='flex-1 basis-1/2 flex justify-center items-center md:my-0 my-10 relative'>
          <img src={CodingIcons} alt='Daniel Kop' className='w-[250px] h-[auto] relative z-[5]'></img>
          <div className='absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient ' />

          <div className='absolute z-[1] w-[40%] h-[40%] rounded-full bottom-0 pink__gradient ' />

          <div className='absolute z-[0] w-[100%] h-[50%] right-20 bottom-20 white__gradient ' />
        </div>
      </div>

      <div className='flex md:flex-row flex-col fadeIn'>
        <div className='flex-1 basis-1/2 flex justify-center items-center md:my-0 my-10 md:order-1 order-2 relative'>
          <img src={MSIcons} alt='Daniel Kop' className='w-[350px] h-[auto] relative z-[5]'></img>
          <div className='absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient' />

          <div className='absolute z-[1] w-[40%] h-[40%] rounded-full bottom-0 pink__gradient' />

          <div className='absolute z-[0] w-[100%] h-[50%] right-20 bottom-20 white__gradient' />
        </div>

        <div className='flex-1 basis-1/2 flex justify-center items-center flex-col xl:px-0 sm:px-16 px-6 md:order-2 order-1'>
          <div>
            <div className='flex flex-row justify-center items-center'>
              <h1 className='flex-1 font-quicksand font-semibold ss:text-[42px] text-[32px] text-offWhite ss:leading-[75px] leading-[60px] text-right'>
                Lorem ipsum
              </h1>
            </div>

            <p className='font-quicksand font-normal text-offWhite ss:text-[18px] text-[16px]  leading-[30.8px] max-w-[470px] mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center flex-col md:mt-40 mt-24'>
        <div>
          <h1 className='font-quicksand font-semibold ss:text-[42px] text-[32px] text-offWhite ss:leading-[75px] leading-[60px] fadeIn'>
            Lorem Ipsum
          </h1>
        </div>
        <div className='grid md:grid-cols-4 xs:grid-cols-2 grid-cols-1 md:gap-32 gap-12 gap-x-32'>
          <div className='font-quicksand text-offWhite flex flex-col justify-center items-center fadeIn' style={{ transitionDelay: '0s' }}>
            <h1 className='py-6'>
              Collaborative
            </h1>
            <img src={Collaborative} className='w-[150px] h-auto py-10 px-8 skill__icons' />
          </div>

          <div className='font-quicksand text-offWhite flex flex-col justify-center items-center fadeIn' style={{ transitionDelay: '50ms' }}>
            <h1 className='py-6'>
              Adaptable
            </h1>
            <img src={Adaptable} className='w-[150px] h-auto py-8 px-8 skill__icons' />
          </div>

          <div className='font-quicksand text-offWhite flex flex-col justify-center items-center fadeIn' style={{ transitionDelay: '100ms' }}>
            <h1 className='py-6'>
              Independent
            </h1>
            <img src={Independent} className='w-[150px] h-auto py-10 px-8 skill__icons' />
          </div>

          <div className='font-quicksand text-offWhite flex flex-col justify-center items-center fadeIn' style={{ transitionDelay: '150ms' }}>
            <h1 className='py-6'>
              Efficient
            </h1>
            <img src={Efficient} className='w-[150px] h-auto py-10 px-8 skill__icons' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
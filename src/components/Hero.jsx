import React from 'react'
import Me from '../assets/me.png'

const Hero = () => (
  <section id='home' className='flex md:flex-row flex-col sm:py-16 py-6'>
    <div className='flex-1 flex basis-1/2 justify-center items-center flex-col xl:px-0 sm:px-16 px-6'>
      <div>
        <div className='flex flex-row justify-center items-center'>
          <h1 className='flex-1 font-quicksand font-semibold ss:text-[42px] text-[32px] text-offWhite ss:leading-[75px] leading-[60px]'>
            I'm Daniel, a <br className='sm:block hidden'/> {" "} <span className='font-reem ss:text-[72px] text-[52px]'>PROGRAMMER</span> {" "}
          </h1>
        </div>

        <p className='font-quicksand font-normal text-offWhite ss:text-[18px] text-[14px]  leading-[30.8px] max-w-[470px] mt-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </p>
      </div>
    </div>

    <div className='flex-1 flex basis-1/3 justify-center items-center md:my-0 my-10 relative'>
      <img src={Me} alt='Daniel Kop' className='w-[250px] h-[100%] relative z-[5]'></img>
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient' />

      <div className='absolute z-[1] w-[40%] h-[40%] rounded-full bottom-0 pink__gradient' />

      <div className='absolute z-[0] w-[100%] h-[50%] right-20 bottom-20 white__gradient' />
    </div>
  </section>
);

export default Hero
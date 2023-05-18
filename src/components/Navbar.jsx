import { useState } from 'react';

// import { close, menu } from "../assets";
import close from "../assets/close.svg"
import menu from "../assets/menu.svg"
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className='logo text-offWhite text-[24px]'>
        <h1 className='font-krona'>Daniel</h1>
        <h1 className='font-lexend tracking-[13px] -mt-2 -ml-[0.12rem]'>KOP</h1>
      </div>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-quicksand font-normal cursor-pointer text-[16px] text-offWhite ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-secondary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-quicksand font-normal cursor-pointer text-[16px] text-offWhite ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </nav>
  )
}

export default Navbar
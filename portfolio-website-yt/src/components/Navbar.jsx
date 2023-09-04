import React, { useState } from 'react';
import { logo } from '../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='flex justify-between'>
      <div>
        <img src={logo} alt='logo' className='h-5' />
      </div>
      <div className='hidden md:flex'>
        <ul className='flex flex-row gap-10'>
          <li className='transition-all ease-in-out hover:scale-110 cursor-pointer'>
            Home
          </li>
          <li className='transition-all ease-in-out hover:scale-110 cursor-pointer'>
            About Me
          </li>
          <li className='transition-all ease-in-out hover:scale-110 cursor-pointer'>
            Skills
          </li>
          <li className='transition-all ease-in-out hover:scale-110 cursor-pointer'>
            Portfolio
          </li>
          <li className='transition-all ease-in-out hover:scale-110 cursor-pointer'>
            Companies
          </li>
          <li className='transition-all ease-in-out hover:scale-110 cursor-pointer'>
            Contact Me
          </li>
        </ul>
      </div>
      <div className='md:hidden lg:hidden'>
        {!toggle ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-6 h-6 cursor-pointer'
            onClick={() => setToggle(true)}
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-6 h-6 cursor-pointer float-right'
            onClick={() => setToggle(false)}
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        )}
        {toggle ? (
          <ul className='flex flex-col gap-4 mt-8 bg-gray-300 p-4'>
            <li className='transition-all ease-in-out hover:scale-110 cursor-pointer'>
              Home
            </li>
            <li className='transition-all ease-in-out hover:scale-110 cursor-pointer'>
              About Me
            </li>
            <li className='transition-all ease-in-out hover:scale-110 cursor-pointer'>
              Skills
            </li>
            <li className='transition-all ease-in-out hover:scale-110 cursor-pointer'>
              Portfolio
            </li>
            <li className='transition-all ease-in-out hover:scale-110 cursor-pointer'>
              Companies
            </li>
            <li className='transition-all ease-in-out hover:scale-110 cursor-pointer'>
              Contact Me
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;

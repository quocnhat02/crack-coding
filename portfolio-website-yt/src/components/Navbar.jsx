import React from 'react';
import { logo } from '../assets';

const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <div>
        <img src={logo} alt='logo' className='h-5' />
      </div>
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
  );
};

export default Navbar;

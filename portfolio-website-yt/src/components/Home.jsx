import React from 'react';
import { AppText } from '../constants';
import { homeImage } from '../assets';

const Home = () => {
  return (
    <div className=' flex flex-col mt-7 px-4 gap-8 items-center md:px-20 md:flex-row md:gap-14'>
      <div>
        <h2 className='text-[40px] font-bold'>{AppText.hello}</h2>
        <h2 className='text-[40px] font-bold'>
          {AppText.Iam} <span className='text-purple-600'>{AppText.name}</span>
        </h2>
        <h3 className='text-gray-500 mt-4 break-words'>
          {AppText.aboutMeDescription}
        </h3>
        <button className='bg-purple-600 mt-4 px-4 py-2 rounded-md transition-all ease-in-out hover:scale-110 text-white'>
          Resume
        </button>
      </div>
      <img
        src={homeImage}
        alt='home_image'
        className='w-[300px] md:w-[400px]'
      />
    </div>
  );
};

export default Home;

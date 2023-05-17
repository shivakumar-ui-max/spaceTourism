import React, { useState } from 'react'
import { crew } from '../pages/data.json';

const Crew = () => {
  const [items] = useState(crew);
  const [value, setValue] = useState(0);

  const { name, images, role, bio } = items[value];
  return (
    <section className='w-full  font-normal text-center text-white bg-center bg-no-repeat bg-cover pt-[88px]  font-Barlow min-h-screen pb-14 md:pt-32 bg-fixed bg-bgcrew-mobile md:bg-bgcrew-tablet lg:bg-bgcrew-laptop md:px-4 lg:text-left' >
      <h1 className='text-[16px] tracking-[2.7px] leading-[19.2px] md:text-left md:text-[20px] md:leading-[24px] md:tracking-[3.37px] lg:mt-10 lg:text-[28px] lg:leading-[33px] lg:tracking-[4.72px] uppercase lg:px-[166px] inline'><span className='mr-2 font-bold opacity-25 mix-blend-normal'>02</span>meet your crew</h1>
      <div className='px-6 md:flex-col-reverse md:flex md:px-[155px] md:mt-6 lg:flex lg:justify-between lg:flex-row-reverse lg:items-center lg:gap-x-14'>
        <img src={images.webp} alt={name} className='object-contain w-[177px] h-[222px] mx-auto mt-8 md:w-[456px] md:h-[520px] md:mt-10 lg:h-[712px] lg:w-[568px] lg:mt-0' />
        <div className='md:flex md:flex-col'>
          <div className='order-2'>
            {
              items.map((curr, index) => <button className={`${index === value ? ' bg-white' : 'bg-slate-600'} w-[10px] h-[10px] rounded-lg mr-4 mt-8 lg:w-[15px] lg:h-[15px] lg:mt-28`} key={index} onClick={() => setValue(index)}></button>)
            }
          </div>
          <h2 className='mt-8 font-normal font-Bellefair text-[16px] mix-blend-normal opacity-25 leading-[18px] uppercase md:text-[24px] md:leading-[28px] lg:text-[32px] lg:leading-[37px]'>{role}</h2>
          <h1 className='mt-2 font-normal font-Bellefair text-[24px] leading-[28px] text-white uppercase md:text-[40px] md:leading-[46px] lg:text-[56px] lg:leading-[64px]'>{name}</h1>
          <p className='mt-4 text-text text-[15px] leading-[25px] md:text-[14px] md:leading-[28px] lg:text-[18px] lg:leading-[32px] '>{bio}</p>
        </div>
      </div>


    </section >
  )
}

export default Crew;
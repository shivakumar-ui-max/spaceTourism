import React, { useState } from 'react'
import { technology } from '../pages/data.json';
const Technology = () => {



  const [items] = useState(technology);
  const [value, setValue] = useState(0);

  const { name, images, description } = items[value];
  return (
    <section className='w-full  font-normal text-center text-white bg-center bg-no-repeat bg-cover pt-[88px]  font-Barlow min-h-screen pb-14 md:pt-32 bg-fixed bg-bgcrew-mobile md:bg-bgcrew-tablet lg:bg-bgcrew-laptop md:px-4 lg:text-left' >

      <h1 className='text-[16px] tracking-[2.7px] leading-[19.2px] md:text-left md:text-[20px] md:leading-[24px] md:tracking-[3.37px] lg:mt-10 lg:text-[28px] lg:leading-[33px] lg:tracking-[4.72px] uppercase lg:px-[166px]  '><span className='mr-2 font-bold opacity-25 mix-blend-normal'>03</span>space launch 101</h1>

      <div className=' lg:flex lg:flex-row-reverse lg:justify-between'>
        <img src={images.portrait} alt="img" className='hidden lg:block lg:w-[515px] lg:h-[527px] ' />
        <img src={images.landscape} alt="img" className='mt-8 w-[375px] h-[170px] mx-auto md:w-[768px] md:h-[310px] md:mt-[60px] lg:hidden' />

        <div className='px-6 lg:flex lg:items-center gap-x-5'>
          <div className='lg:flex lg:flex-col'>
            {
              items.map((curr, index) => <button key={index + 1} onClick={() => setValue(index)} className={`mt-[34px] mr-4 w-[40px] h-[40px] font-Bellefair text-[16px] leading-[18px] rounded-full ${index === value ? 'bg-white text-mix' : 'border border-gray-600'} md:mt-14 md:w-[60px] md:h-[60px] md:text-[24px] lg:m-6`} >{index + 1}</button>)
            }
          </div>

          <div className='lg:w-[470px] lg:h-[303px]'>
            <h2 className=' uppercase mt-[1.625rem] text-text tracking-[2.36px] leading-[17px] text-[14px] md:text-[16px] md:leading-[19px] md:tracking-[2.7px] lg:[16px] lg:leading-[19.2px] lg:tracking-[2.7px] '>the terminology ...</h2>
            <h1 className='mt-2 uppercase text-[24px] leading-[28px] font-Bellefair md:text-[40px] md:mt-4 md:leading-[46px] lg:text-[56px] lg:leading-[64.18px] lg:mt-3'>{name}</h1>
            <p className='mt-4 text-text leading-[25px] text-[15px] md:text-[16px] md:leading-[28px] lg:text-[18px] lg:leading-[32px] lg:mt-4'>{description}</p>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Technology
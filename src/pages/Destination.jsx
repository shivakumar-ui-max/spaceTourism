import React, { useState } from 'react';
import { destinations } from '../pages/data.json';


const Destination = () => {
  const [planat] = useState(destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planat[value];
  return (
    <section className='w-full  font-normal text-center text-white bg-center bg-no-repeat bg-cover pt-[88px] bg-destination-mobile md:bg-destination-tablet lg:bg-destination-laptop font-Barlow min-h-screen pb-14 md:pt-32 bg-fixed ' >


      <div className='px-6 md:px-24 lg:px-32'>

        <h1 className='text-[16px] tracking-[2.7px] leading-[19.2px] md:text-left md:text-[20px] md:leading-[24px] md:tracking-[3.37px] lg:mt-10 lg:text-[28px] lg:leading-[33px] lg:tracking-[4.72px]'><span className='mr-2 font-bold opacity-25 mix-blend-normal'>01</span>pick your destination</h1>

        <div className='lg:flex lg:gap-x-80 lg:text-left lg:mr-28'>

          <img src={images.webp} alt={name} className='w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px mx-auto mt-8 lg:mt-20 object-cover animate-spin-slow ' />

          <article className='px-30'>
            {
              planat.map((curr, index) => <button onClick={() => { setValue(index) }} className={`mr-6 text-[14px] tracking-[2.36px] leading-[16.8px] mt-6 ${index === value ? 'border-b pb-1' : null} md:mr-9 md:mt-[53px] md:text-[16px] md:tracking-[2.7px] md:leading-[19px]`} key={index}>{curr.name}</button>)
            }

            <h1 className='font-normal font-Bellefair text-[56px] leading-[64px] mt-5 uppercase md:text-[80px] md:leading-[92px]'>{name}</h1>
            <p className='text-[15px] leading-[25px] md:mt-2 md:text-[16px] md:leading-[28px]'>{description}</p>
            <hr className='bg-hr h-[1px] w-full mt-8 ' />
            <div className=' md:flex md:justify-center md:gap-10 md:mt-12 lg:justify-start' >
              <h6 className='mt-8 text-text text-[14px] leading-[17px] tracking-[2.36px] flex flex-col items-center gap-3 uppercase'>AVG. DISTANCE<span className='font-Bellefair text-[28px] font-normal leading-[32px] text-white'>{distance}</span></h6>

              <h6 className='text-[14px] leading-[17px] tracking-[2.36px] text-text flex flex-col items-center mt-8 gap-3 uppercase'>EST. TRAVEL TIME<span className='font-normal text-white font-Bellefair leading-[32px] text-[28px] '>{travel}</span></h6>
            </div>

          </article>
        </div>
      </div>

    </section >
  )
}

export default Destination
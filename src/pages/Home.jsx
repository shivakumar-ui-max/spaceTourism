import React from 'react';
// @ts-ignore
import explore from '../assets/home/explore.svg';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='grid w-full h-screen grid-cols-1 px-4 pt-32 mx-auto font-normal text-center text-white bg-center bg-no-repeat bg-cover bg-bg-mobile md:bg-bg-tablet lg:bg-bg-laptop font-Barlow lg:grid-cols-2 place-items-center'>
            <div className='container px-2 mx-auto  md:mt-10 md:max-w-[450px] lg:text-left'>
                <h3 className='text-[16px] tracking-[2.7px] text-text pt-5 md:text-xl md:mt-6'>SO, YOU WANT TO TRAVEL TO</h3>
                <h1 className='text-[80px] font-Bellefair leading-[100px] mt-6 md:text-9xl'>SPACE</h1>
                <p className='text-[15px] leading-[25px] text-text mt-3 md:text-[16px] md:leading-[28px] md:mt-5'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>

            <div className="explore ">
                <Link to={'/Destination'}>
                    <img src={explore} alt="explore" className='mx-auto max-w-[150px] max-h-[150px] w-[100%] h-[100%] mt-10 md:max-w-[242px] md:max-h-[242px] md:mt-32 lg:w-[274px] lg:h-[274px]' />
                </Link>
            </div>
        </div>
    )
}
export default Home;
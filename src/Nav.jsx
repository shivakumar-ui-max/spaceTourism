import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import logo from './assets/shared/logo.svg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const arr = [
    {
        no: '00',
        name: 'Home',
    },
    {
        no: '01',
        name: 'Destination',
    }, {
        no: '02',
        name: 'Crew',
    }, {

        no: '03',
        name: 'Technology'
    }
]

const Nav = () => {

    const [open, setOpen] = useState(false);
    const show = () => {
        setOpen((pre) => !pre)
    }
    return (
        <header className='absolute top-0 left-0 z-20 w-full p-5 text-base font-normal font-Barlow'>
            <nav className='flex items-center justify-between'>
                <div>
                    <Link to='/Home'>
                        <img src={logo} alt="logo" className='w-[40px] h-[40px] md:w-[48px] md:h-[48px]' />
                    </Link>
                </div>
                <ul className='hidden text-white md:flex md:justify-between md:items-center md:w-[450px] md:h-[96px] menu  md:gap-5 md:px-5 lg:w-[830px]'>

                    {
                        arr.map((curr, index) => <li key={index} onClick={show} className='grid w-full h-full text-center place-items-center text-[14px] active:border-b-2 active:text-white duration-500'><Link to={`/${curr.name}`}> <span className='mr-3 font-bold'>{curr.no}</span>{curr.name}</Link></li>)
                    }
                </ul>
                <div onClick={show} className='block md:hidden lg:hidden'>

                    <AiOutlineMenu className='text-2xl text-white' />

                </div>
                <ul className={open ? 'px-8  text-white absolute top-0 right-0 w-[70%] min-h-screen menu bg-white  p-5 pt-10 tracking-[2.75px] md:hidden lg:hidden  ' : 'hidden'}>
                    <AiOutlineClose onClick={show} className='z-10 ml-auto text-2xl text-white mr-7' />

                    {
                        arr.map((curr, index) => <li key={index} onClick={show} className='mt-8 list-none'><Link to={`/${curr.name}`}> <span className='mr-3 font-bold'>{curr.no}</span>{curr.name}</Link></li>)
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Nav;
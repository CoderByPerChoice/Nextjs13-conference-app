'use client'

import { useState } from 'react';
import '../styles/globals.css';
import NavLink from './nav-links';
import { Poppins } from '@next/font/google'
const poppins = Poppins({ weight: '800', subsets: ['latin'], })


const Header = () => {
    const [openmenu, setOpenMenu] = useState(false);

    return (
        <header className={poppins.className}>
            <div className="flex flex-row justify-end" >
                <svg onClick={() => setOpenMenu(!openmenu)} fill="none" viewBox='0 0 24 24 ' strokeWidth={1.5} stroke='currentColor' className='h-10 text-white md:hidden text-2xl cursor-pointer mx-5 my-5'>
                    <path strokeLinecap='round' strokeLinejoin='round' d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
            </div>
            <nav className={`${openmenu ? 'hidden ' : '' }text-white flex flex-col md:flex-row absolute md:relative z-20 w-full bg-gray-800 md:bg-transparent md:flex justify-around items-center md:mt-5 lg:mt-5 md:mb-10 lg:mb-10`} >
                <h3 className='my-5'>
                    <NavLink href="/">
                        Home
                    </NavLink>
                </h3>
                <h3 className='my-5'>
                    <NavLink href="/sessions">
                        Conferences
                    </NavLink>
                </h3>
                <h3 className='my-5'>
                    <NavLink href="/speakers">
                        Speakers
                    </NavLink>
                </h3>
                <h3 className='my-5'>
                    <NavLink href="/topics">
                        Topics
                    </NavLink>
                </h3>
                <h3 className='my-5'>
                    <NavLink className='menuBarLinks' href="/aboutus" header={false}>
                        About Us
                    </NavLink>
                </h3>
            </nav>
        </header>
    );
}

export default Header;
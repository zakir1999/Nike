import React from 'react'
import headerlogo from '../assets/images/header-logo.svg';
import { navLinks } from '../constants';
import { hamburger } from '../assets/icons';
const Nav = () => {
  return (
    <header className="padding-x absolute py-10 z-10 w-full">
        <nav className="flex justify-between items-center max-container mx-auto">
            <a href="/">
            <img src={headerlogo} alt="Logo" width={130} height={30} /></a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>


                {navLinks.map((link) => (
                    <li key={link.label} className="text-black text-[16px] p-2 font-normal cursor-pointer rounded-full hover:text-white  hover:bg-coral-red transition-all duration-200 ease-in-out">

                    <a href={link.href} className='font-monts errat leading-normal text-lg text-slate-gray'>
                        {link.label}
                    </a>
                    </li>
               ) )}
            </ul>
            <div className='hidden max-lg:block p-10'>

                <img src={hamburger} alt="Hamuberger" width={20} height={20} />
            </div>


            
        </nav>
    </header>
  )
}

export default Nav
import React from 'react'
import logo from '../assets/logo.png'
import { GrLanguage } from "react-icons/gr"

const Navbar = () => {

    const navItems = [
        {link: "Overview", path: "home"},
        {link: "Feature", path: "feature"},
        {link: "About", path: "about"},
        {link: "Pricing", path: "pricing"},
    ]
  return (
    <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary'>
        <div className='flex items-center justify-between container font-medium mx-auto '> 
            <div className='flex items-center space-x-14' >
                <a href="/">
                    <img className='h-50 md:h-74 inline-block items-center' src={logo} alt="logo"/>
                </a>
                <ul className='hidden lg:flex space-x-12'>
                    {
                        navItems.map(({link,path}) => 
                            <a key={link} href={path} className='block hover:text-secondary'>{link}</a>
                            )
                    }
                </ul>
            </div>

            <div className='space-x-12 md:flex items-center'>
                <a href='#'className='hidden lg:flex items-center hover:text-secondary '>
                    <GrLanguage className='mr-2' />
                    Language
                </a>
                <button className='bg-secondary px-4 py-2 rounded-lg text-white 
                    hover:bg-primary transition-all duration-300 text-base'>
                    Sign up
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
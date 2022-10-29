import React, { useState } from 'react'
import BC from '../../assets/bc.png'

const Navbar = () => {
    const [show, setShow] =useState(false)
    const navOpenHandler = ()=> {
        setShow(!show)
    }
    return (
        <div>

            <nav className="z-10 font-[montserrat] w-full py-2.5 px-8">
                <div className="container flex flex-wrap justify-between items-center mx-auto relative">
                    <a href="#" className="flex items-center">
                        {/* <img src="/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="MOJ_Logo"/> */}
                        <span className="self-center text-2xl text-gray-800 font-extrabold whitespace-nowrap">MOJ</span>
                    </a>
                    <div className="flex md:order-2">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 sm:py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Blogs</button>
                        <button onClick={navOpenHandler} data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-800 hover:text-white rounded-lg md:hidden hover:bg-blue-700 focus:outline-none" aria-controls="mobile-menu-4" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={`${show?'': 'hidden'} w-60 absolute right-[2%] top-[100%] md:static backdrop-blur-md bg-blue-600/30 z-50 md:bg-transparent mt-2 rounded-xl shadow-2xl md:shadow-none justify-between items-center md:flex md:w-auto md:order-1" id="mobile-menu-4`}>
                        <ul className="flex flex-col font-[montserrat] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <a href="#" className="block py-2 px-5 hover:text-white md:font-semibold border-b md:border-none border-gray-600  md:bg-transparent hover:bg-blue-700 rounded-t-xl md:p-0" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-5 hover:text-white md:font-semibold border-b md:border-none border-gray-600 hover:bg-blue-600 md:rounded-t-xl md:hover:bg-transparent md:border-0 md:hover:bg-blue-700 md:p-0  ">Projects</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-5 hover:text-white md:font-semibold border-b md:border-none border-gray-600 hover:bg-blue-600  md:rounded-t-xl md:hover:bg-transparent md:border-0 md:hover:bg-blue-700 md:p-0">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-5 hover:text-white md:font-semibold hover:bg-blue-600 rounded-b-xl md:rounded-b-none md:rounded-t-xl md:hover:bg-transparent md:border-0 md:hover:bg-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 ">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar

import React from 'react'
import ProfilePic from '../media/xx.png'
import Thumb from '../media/icons/thumbup.png'
import Glasses from '../media/icons/glasses.png'
import Crown from '../media/icons/crown.png'
import Vector from '../media/vectors/Vector2.png'
const Home = () => {
  return (
    <div className="px-8 pt-20 md:pt-0">
        <div className='flex flex-col-reverse md:flex-row items-center justify-around gap-10 md:gap-0 h-screen w-full'>
            <div className="text-gray-800">
                <h1 className='text-5xl lg:text-7xl font-[cubano] pb-4'><span className='block font-[montserrat] text-3xl lg:text-4xl pb-4'>Hello,</span>I'm <span className='text-pink-600'>Osama.</span></h1>
                <p className='font-[poppins] text-lg lg:text-2xl font-light pb-4'>Web Desinger and Web Developer
                <br />from Peshawar, Pakistan. <br />
                    I create custom websites <br/> to
                    help bussiness do better online.</p>
                <button className='text-white w-36 lg:w-44 my-2 px-6 lg:px-8 py-2 text-lg lg:text-xl font-[montserrat] hover:bg-blue-600 hover:text-gray-100 bg-gray-800 transition-all'>Hire Me!</button>
            </div>
            <div className="imgSetting relative">
                <div className="absolute right-0 top-10 md:top-20 w-36 lg:w-56 rounded-md border-4 border-pink-400 px-4 py-2 flex items-center justify-around gap-4 bg-white text-black">
                    <img className='w-8 md:w-12 lg:w-16' src={Thumb} alt="" />
                    <p className='font-[gumela] text-xs md:text-base'>UI/UX <br /> Designer</p>
                </div>
                <div className="absolute bottom-0 md:left-[-5rem] lg:left-0 lg:bottom-16 lg:w-56 rounded-md border-4 border-pink-400 px-4 py-2 flex items-center justify-around gap-4 bg-white text-black">
                    <img className='w-8 md:w-12 lg:w-16' src={Crown} alt="" />
                    <p className='font-[gumela] text-xs md:text-base'>Web <br /> Developer</p>
                </div>
                <div className="imgSetting w-full h-96 md:h-[25rem] lg:h-[40rem]">
                    {/* <svg/> */}
                    <img className='w-full h-full object-contain z-100' src={ProfilePic} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home

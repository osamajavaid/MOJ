import React from 'react'
// import svg from '../media/blob.svg'
import blob from '../media/blob.png'
import ProfilePic from '../media/xx.png'
const Home = () => {
  return (
    <div className="px-8 mt-8">
        <div className='flex  items-center justify-around h-96 w-full'>
            <div className="text-white">
                <h1 className='text-6xl font-[cubano]'><span className='block font-[montserrat] text-4xl'>Hello,</span>I'm Osama.</h1>
                <p className='font-[poppins] text-2xl font-extralight'>Web Desinger and Web Developer
                <br />from Peshawar, Pakistan. <br />
                    I create custom websites <br /> to
                    help bussiness do better online.</p>
            </div>
            <div className="imgSetting">
                <div className="imgSetting w-full h-[26rem]">
                    {/* <svg/> */}
                    <img className='w-full h-full object-contain z-100' src={ProfilePic} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home

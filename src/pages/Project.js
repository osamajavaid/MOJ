import React from 'react'
import Card from '../components/Card/Card'
import Expense from '../media/projects/et.gif'
import GBV from '../media/projects/gbv.gif'
import Git from '../media/projects/git.gif'
import News from '../media/projects/news.gif'
import Text from '../media/projects/text.gif'
import Ring from '../media/our-portfolio-home.png'
import Texture from '../assets/texture5.png'
// style={{backgroundImage: `url(${Texture})`}}
const Project = () => {
  return (
    <div className="myProjects w-full px-8 my-16 py-16" >
      <div className="relative">
        <img className='absolute top-[-5rem] left-44' src={Ring} alt="" />
        <p className='pb-10 text-7xl text-center text-yellow-400 font-[cubano]'><span className='text-gray-800'>Recent </span>Projects</p>
      </div>
      <div className="">
       <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6 lg:gap-10 cards">
        <Card projectImage={Git} count='1'/>
        <Card projectImage={Expense} count='2'/>
        <Card projectImage={GBV} count='3'/>
        <Card projectImage={News} count='4'/>
        <Card projectImage={Text} count='5'/>
       </div>
      </div>
    </div>
  )
}

export default Project

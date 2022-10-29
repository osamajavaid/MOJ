import React from 'react'
import Card from '../components/Card/Card'
import Expense from '../media/projects/et.gif'
import GBV from '../media/projects/gbv.gif'
import Git from '../media/projects/git.gif'
import News from '../media/projects/news.gif'
import Text from '../media/projects/text.gif'
import background1 from '../assets/project_bc.png'
import Texture from '../assets/texture3.png'
const Project = () => {
  return (
    <div className="myProjects w-full px-8 my-16 py-16 bg-blue-700 bg-opacity-60" style={{backgroundImage: `url(${Texture})`}}>
      <p className='text-white font-[montserrat] text-3xl pb-10'><span className='text-5xl font-[cubano]'>Projects</span> that I have experienced</p>
      <div className="">
       <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6 lg:gap-4 cards">
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

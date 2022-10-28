import React from 'react'
import Card from '../components/Card/Card'
import Expense from '../media/projects/et.gif'
import GBV from '../media/projects/gbv.gif'
import Git from '../media/projects/git.gif'
import News from '../media/projects/news.gif'
import Text from '../media/projects/text.gif'
const Project = () => {
  return (
    <div className='myProjects px-8 mt-8'>
      <div className="">
       <div className="grid grid-cols-3 gap-4 cards">
        <Card projectImage={Git}/>
        <Card projectImage={Expense}/>
        <Card projectImage={GBV}/>
        <Card projectImage={News}/>
        <Card projectImage={Text}/>
       </div>
      </div>
    </div>
  )
}

export default Project

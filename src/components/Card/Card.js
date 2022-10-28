import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className="card shadow-md bg-white rounded-md w-96">
            <div className="cardimg relative">
                <div className='text-3xl font-[montserrat] flex items-center justify-center text-white absolute left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%] bottom-[-1.5rem] backdrop-blur-sm bg-blue-500/50 px-4 rounded-md'>6</div>
                <img className='w-full h-full rounded-md' src={props.projectImage} alt="" />
            </div>
            <div className="py-2 cardText text-teal-800 text-center">
                <h1 className='text-2xl font-[montserrat] font-bold'>Expense Tracker</h1>
                <p className='font-[poppins] text-sm'>Track your daily expenses with filtering feature</p>
            </div>
        </div>
    </>
  )
}

export default Card

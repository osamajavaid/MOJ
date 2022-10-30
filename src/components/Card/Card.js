import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className="card shadow-lg shadow-slate-900 bg-gray-700 rounded-md lg:w-88 hover:scale-[1.02] transition ease-in-out delay-150">
            <div className="cardimg relative">
                <div className='text-3xl font-[montserrat] flex items-center justify-center font-bold text-white shadow-2xl absolute left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%] bottom-[-2rem] bg-blue-700 px-4 rounded-md'>{props.count}</div>
                <img className='w-full h-full rounded-t-md' src={props.projectImage} alt="" />
            </div>
            <div className="py-4 cardText text-white px-2 text-center">
                <p className='text-2xl font-[cubano] font-light'>Expense Tracker</p>
                <p className='font-[montserrat] text-sm'>Track your daily expenses with filtering feature</p>
            </div>
        </div>
    </>
  )
}

export default Card

import React from 'react'
import ExperienceCard from './ExpCard'

function Experience({experience}) {
  // console.log(experience)
  return (
    <div className='h-screen flex flex-col justify-evenly items-center  '>
        <h3 className=' relative top-20 text-2xl tracking-widest font-serif uppercase text-green-300 '>Experience</h3>
        <div className='w-full flex justify-center space-x-5 overflow-x-scroll py-20 snap-mandatory snap-x scrollbar scrollbar-thumb-green-900 scrollbar-track-green-200'>
           {experience.map((experiences)=>{
            return(
            <ExperienceCard key={experiences._id} experiences={experiences}/>
            );
           })}
        </div>
    </div>
  )
}

export default Experience
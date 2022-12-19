import React from 'react'
import ExperienceCard from './ExpCard'

function Experience() {
  return (
    <div className='h-screen flex flex-col justify-evenly items-center relative '>
        <h3 className=' relative top-20 text-2xl tracking-widest font-serif uppercase text-green-300 '>Experience</h3>

        <div className='w-full flex space-x-5 overflow-x-scroll py-14 snap-mandatory snap-x scrollbar scrollbar-thumb-green-900 scrollbar-track-green-200'>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
        </div>
    </div>
  )
}

export default Experience
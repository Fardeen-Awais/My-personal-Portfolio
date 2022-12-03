import React from 'react'

function ExperienceCard() {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#131513] p-10 ml-10 overflow-hidden opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 '>
        <img 
        className='w-16 h-16 rounded-full xl:w-26 xl:h-26 object-cover object-center mr-14'
        src="https://miro.medium.com/max/1400/1*CStP06JrfLSevaOkPZavvg.png" alt="NextImg" />
        <div className='px-0 md:px-10'>
          <h4 className='text-3xl font-semibold'>NextJs</h4>
          <p className='text-lg py-2'>1 year of experience</p>
          <ul className='list-disc space-y-2 text-sm'>
            <li>hello</li>
            <li>hello1</li>
            <li>My personal thought's</li>
            <li>My personal thought's</li>
            <li>My personal thought's</li>
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard
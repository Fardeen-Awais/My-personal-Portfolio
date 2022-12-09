import React from 'react'

function ExperienceCard() {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#fbfefc] p-10 ml-10 overflow-hidden opacity-70 hover:opacity-100 cursor-pointer transition-opacity duration-200 text-black'>
        <img 
        className='w-16 h-16 rounded-full xl:w-26 xl:h-26 object-cover object-center mr-14'
        src="https://miro.medium.com/max/1400/1*CStP06JrfLSevaOkPZavvg.png" alt="NextImg" />
        <div className='px-0 md:px-10'>
          <h4 className='text-3xl font-semibold'>NextJs</h4>
          <p className='text-lg py-2'>1 year of experience</p>
          <ul className='list-disc space-y-2 text-sm'>
            <li>I Personally use NextJs in my projects</li>
            <li>Best Seo due to server side rendering</li>
            <li>I use sanity with NextJs for backend</li>
            <li>Deployment of the web with next js is awesome</li>
            <li>I make my personal project with nextjs </li>
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard
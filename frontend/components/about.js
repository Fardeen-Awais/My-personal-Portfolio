import React from 'react'

function About({ProfileInfo}) { 
  // ProfileInfo props return ProfileInfo.about "see the component props "
  const aboutDes = ProfileInfo //Then i store the result in a variable for some experiment purpose
  return (
    <div className='flex flex-col justify-center items-center h-screen  mx-auto max-w-2xl'>
        <h3 className=' text-2xl tracking-widest font-serif uppercase text-green-300 '>About</h3>
        
          <p className='space-y-10 md:px-0 px-10 py-1'>
          {aboutDes}
          </p>
        
    </div>
  )
}

export default About
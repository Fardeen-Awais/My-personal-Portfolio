import React from 'react'

function Skill() {
  // if()
  return (
    <div className='flex cursor-pointer group'>
      <img className='w-20 h-20 border-white rounded-full border object-cover group-hover:grayscale transition duration-300 ease-in-out' src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_96102ac6497377cd53da621075fe828e/sanity.png" alt="skill img" />
      <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-green-100 w-20 h-20 rounded-full z-0'>
        <div className='flex justify-center items-center h-full '>
          <p className='percent text-2xl text-black font-semibold'>100%</p>
        </div>
      </div>
      
    </div>
  )
}

export default Skill
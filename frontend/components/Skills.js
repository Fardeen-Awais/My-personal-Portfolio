import React from 'react'
import { motion } from "framer-motion"
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

function Skill({skill}) {
  const client = createClient({
    projectId: "o6h5kv64", 
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
  });
  
  const builder = imageUrlBuilder(client);
  return (
    <div className='flex cursor-pointer group'>
      <motion.img

      className='w-20 h-20 border-white rounded-full border object-cover group-hover:grayscale transition duration-300 ease-in-out' src={builder.image(skill.skillimg).url()} alt="skill img" />
      <div className='absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:bg-green-100 w-20 h-20 rounded-full z-0'>
        <div className='flex justify-center items-center h-full '>
          <p className='percent text-2xl text-black font-semibold'>{skill.Progress}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Skill
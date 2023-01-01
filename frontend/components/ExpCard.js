import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
function ExperienceCard({experiences}) {
  const client = createClient({
    projectId: "o6h5kv64", 
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[250px] md:w-[500px] xl:w-[600px] snap-center bg-[#fbfefc] p-10 my-8 mx-10 overflow-hidden  text-black '>
        <img 
        className='w-16 h-16 rounded-full xl:w-26 xl:h-26 object-cover object-center mr-14'
        src={builder.image(experiences.frameworkimg).url()} alt="NextImg" />
        <div className='px-0 md:px-10'>
          <h4 className='text-3xl font-semibold'>{experiences.framework}</h4>
          <p className='text-lg py-2'>{experiences.experience}</p>
          <ul className='list-disc space-y-2 text-sm'>
           
            <li>{experiences.point1}</li>
            <li>{experiences.point2}</li>
            <li>{experiences.point3}</li>
            <li>{experiences.point4}</li>
            <li>{experiences.point5}</li>
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard
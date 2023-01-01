import React from "react";
import { motion } from "framer-motion"
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
function Project({project}) {
  const client = createClient({
    projectId: "o6h5kv64", 
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);
  return (
    <div className="h-screen flex flex-col justify-center items-center relative mx-auto overflow-hidden md:flex-row">
      <h3 className="absolute top-[80px] text-2xl tracking-widest font-serif uppercase text-green-300">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scroll-smooth  scrollbar-thumb-green-900 scrollbar-track-gray-300">
        
        {project.map((projects,i) => (
          <div key={projects._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
        
            <motion.img
              initial = {{
                y:-300,
              }} // It will define the initial position
              transition={{  type: "spring",  damping: 60, mass: 0.7,  stiffness: 300}} //Duration of the transition
              whileInView={{y:0 ,rotate:0}} // Enable transition when someone view it
              //viewport= {{once:true}} // Animate only one time
              src={builder.image(projects.projectimage).url()}
              alt="Picture of the author"
             className="w-[500px]"
            />
            <div><h4 className="text-2xl font-semibold mx-auto max-w-lg">
              0{i+1} <span>{projects.name}</span>
              </h4>
              <p className="max-w-lg">{projects.desc}</p>
              </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;

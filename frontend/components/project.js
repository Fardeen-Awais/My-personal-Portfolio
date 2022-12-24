import React from "react";
import { motion } from "framer-motion"
function Project() {
  const projects = [1, 2, 3,5 ,6, 7]
  const key = '1'
  return (
    <div className="h-screen flex flex-col justify-center items-center relative mx-auto overflow-hidden md:flex-row">
      <h3 className="absolute top-[80px] text-2xl tracking-widest font-serif uppercase text-green-300">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scroll-smooth  scrollbar-thumb-green-900 scrollbar-track-gray-300">
        {projects.map((projects, i) => (
          <div key={key} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          
            <motion.img
              initial = {{
                y:-300,
              }} // It will define the initial position
              transition={{  type: "spring",  damping: 60, mass: 0.7,  stiffness: 300}} //Duration of the transition
              whileInView={{y:0 ,rotate:0}} // Enable transition when someone view it
              //viewport= {{once:true}} // Animate only one time
              src="https://gnnhd.tv/media/38518/netflix.jpeg"
              alt="Picture of the author"
             className="w-[500px]"
            />
            <div><h4 className="text-2xl font-semibold mx-auto max-w-lg">
              Project: {i+1} <span>Nextflix Clone</span>
              </h4>
              <p className="max-w-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum veritatis adipisci optio aliquam ut temporibus iste nulla repellendus blanditiis ad, ipsa provident. Expedita ipsam esse velit!</p>
              </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;

import React from "react";
import Skill from "./Skills";
import { motion } from "framer-motion"
function Skills() {
  return (
  <motion.div className="h-screen flex flex-col justify-evenly items-center relative max-w-3xl mx-auto px-6">
    <h3 className='absolute top-32 text-2xl tracking-widest font-serif uppercase text-green-300 '>Skills</h3>
<p className="absolute top-40 py-2 px-6 text-green-100 font-serif tracking-widest">Here is all the skills that i had learned in 3 year</p>
<div className="absolute flex flex-col items-center gap-5 top-56">

<motion.div 
initial = {{
  x:-300,
  opacity:0
}}
transition={{duration:1}} 
whileInView={{opacity:1,x:0}} 
className=" grid grid-cols-4 gap-2 md:gap-5 ">
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
</motion.div>

</div>
    </motion.div>
);
}

export default Skills;

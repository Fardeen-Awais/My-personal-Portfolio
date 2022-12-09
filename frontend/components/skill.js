import React from "react";
import Skill from "./Skills";
import Fade from 'react-reveal/Fade';
function Skills() {
  return <div className="h-screen flex flex-col justify-evenly items-center relative max-w-3xl mx-auto px-6">
    <h3 className='absolute top-40 text-2xl tracking-widest font-serif uppercase text-green-300 '>Skills</h3>
<p className="absolute top-48 py-2 text-green-100 font-serif tracking-widest">Here is all the skills that i had learned in 3 year</p>
<div className="absolute flex flex-col items-center gap-5 top-60">

<div className=" grid grid-cols-4 gap-5 ">

<Fade left >  

  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>

  </Fade>
</div>
<div className=" grid grid-cols-4 gap-5 ">
<Fade right >  
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  <Skill/>
  </Fade>
</div>
</div>
    </div>;
}

export default Skills;

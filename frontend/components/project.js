import React from "react";
import Zoom from 'react-reveal/Zoom';
function Project() {
  const projects = [1, 2, 3,5 ,6, 7]
  const key = '1'
  return (
    <div className="h-screen flex flex-col justify-evenly items-center relative mx-auto overflow-hidden md:flex-row">
      <h3 className="absolute top-[80px] text-2xl tracking-widest font-serif uppercase text-green-300">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scroll-smooth  scrollbar-thumb-green-900 scrollbar-track-gray-300">
        {projects.map((projects, i) => (
          <div key={key} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <Zoom top>
            <img
              src="https://gnnhd.tv/media/38518/netflix.jpeg"
              alt="Picture of the author"
             className="w-[600px] "
            /></Zoom>
            <div><h4 className="text-2xl font-semibold mx-auto max-w-xl">
              Project: {i+1} <span>Nextflix Clone</span>
              </h4>
              <p className="max-w-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum veritatis adipisci optio aliquam ut temporibus iste nulla repellendus blanditiis ad, ipsa provident. Expedita ipsam esse velit!</p>
              </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;

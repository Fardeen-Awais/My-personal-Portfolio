import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <div className="snap-center ">
      <footer className="bg-[#1b7c0551] ">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start flex-wrap border-t-4 border-green-500">

        <div className=" bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row ">
            <p className="flex flex-col text-xl font-serif tracking-wider ">
              © 2022 My personal Portfolio — <br />My Contact:
              <Link className=" border-b-2  border-green-500 w-20 hover:text-green-300" href={'https://www.linkedin.com/in/fardeen-awais-b464b1200'}> @fardeen</Link>
            </p>
          
          </div>
        </div>
         
        </div>
        
      </footer>
    </div>
  );
}

export default Footer;

import React from "react";
import { SocialIcon } from "react-social-icons";

function Header() {
  return (
    <>
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <div className="flex flex-row items-center">
        <p className=" text-3xl font-serif">My Personal Portfolio</p>
      </div>
      <div className="flex flex-col items-center cursor-pointer ">
      <span><SocialIcon network="email" bgColor="#3d642b" fgColor="#ffffff"/></span>
        <p className="uppercase hidden md:block text-base pt-1">Get in Touch</p>
      </div>
    </header>
    </>
  );
}

export default Header;

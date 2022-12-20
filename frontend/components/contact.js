import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { green } from "@mui/material/colors";

function Contact() {
  return (
    <div className="h-screen flex flex-col justify-evenly items-center relative  mx-auto px-6">
      <div className="space-y-6">
      <h3 className="flex flex-col justify-center text-center items-center text-2xl tracking-widest font-serif uppercase text-green-300 ">
        Contact
      </h3>
      
      
      <div
        className="flex flex-row
    justify-center items-center space-x-5 space-y-2"
      >
        <WhatsAppIcon fontSize="large" sx={{ color: green[400] }} />
        <p>+92 3244028456</p>
      </div>
      
      <div
        className="flex flex-row
    justify-center items-center space-x-5 space-y-2"
      >
        <HomeIcon fontSize="large" sx={{ color: green[400] }} />
        <p>Lahore, Pakistan</p>
      </div>
      <div
        className="flex flex-row
    justify-center items-center space-x-5 space-y-2"
      >
        <EmailIcon fontSize="large" sx={{ color: green[400] }} />
        <p>fardeenjutt99@gmail.com</p>
      </div>
      <div
        className="flex flex-row
    justify-center items-center space-x-5 space-y-2"
      >
        <ConnectWithoutContactIcon fontSize="large" sx={{ color: green[400] }} />
        <p >Message me directly on linkedln or Whatsapp</p>
      </div>
      </div>
      </div>
  );
}

export default Contact;

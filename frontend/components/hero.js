import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Link from 'next/link'
import Image from 'next/image'
function Hero() {
    const [text] = useTypewriter({
        words: ['My name is Fardeen ', 'I am a full stack developer', 'Get your Buisness in the internet',],
        delaySpeed: 2000,

        loop: Infinity,
       
      })
  return (
    <div className='flex justify-center space-y-8 overflow-hidden flex-col items-center text-center h-screen'>
      <div >
      <Image
      className='relative rounded-full mx-auto'
      src="/ProfileImage.jpg"
      alt="Picture of the author"
      width={150}
      height={150}
    /></div>
    <h2 className='text-green-300'>Nextjs | Sanity CMS | SEO </h2>
      <h1 className='text-4xl font-serif'>
        <span>{text}</span>
      <Cursor cursorColor='#6d8f55' />
      </h1>
      <div>
      <Link href={'#about'}><button className='px-6 py-2 border border-green-400 rounded-full tracking-widest mx-1 text-green-200  hover:bg-green-500'>About</button></Link>
      <Link href={'#experience'}><button className='px-6 py-2 border border-green-400 rounded-full tracking-widest mx-1 text-green-200 hover:bg-green-500'>Experience</button></Link>
      <Link href={'#Skills'}><button className='px-6 py-2 border border-green-400 rounded-full tracking-widest mx-1 text-green-200 hover:bg-green-500'>Skills</button></Link>
      <Link href={'#Project'}><button className='px-6 py-2 border border-green-400 rounded-full tracking-widest mx-1 my-2 text-green-200 hover:bg-green-500'>Projects</button></Link>
    </div>
    </div>
    
  )
}

export default Hero
import Head from "next/head";
import About from "../components/about";
import Contact from "../components/contact";
import Experience from "../components/experience";
import { createClient } from "next-sanity";
import Header from "../components/header";
import Project from "../components/project";
import Skills from "../components/skill";
import Hero from "../components/hero";
export default function Home({ProfileInfo}) {
  // console.log(ProfileInfo)
  
  return (
    
    <div className="bg-[#020d02] text-[#ffffff] h-screen snap-y snap-mandatory overflow-auto scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-gray-300">
           <Head>
              <title></title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
      {/* Hero */}
   
      <Header />
      
      <section id="hero" className="snap-center ">
     <Hero ProfileInfo={ProfileInfo}/> 
     {/* Sending ProfileInfo  */}
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About ProfileInfo={ProfileInfo.about}/> 
        {/* I'm passing the props to the component according to their needs */}
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience/>
      </section>

      {/* Skill */}
      <section id="Skills" className="snap-center">
        <Skills/>
      </section>
      {/* Projects */}
      <section id='Project' className="snap-center">
      <Project/>
      </section>
      {/* Contact */}
      <section id="contact" className="snap-center">
        <Contact/>
      </section>
   
     
    </div>
  );
}
const client = createClient({
  projectId: "o6h5kv64",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});
export async function getStaticProps() {
  // *[_type == "ProfileInfo"][0] This is the main problem i get undefine in my results
// Basically we fetch the data in our index.js and after successfull fetch i pass the props into the components
  const ProfileInfo = await client.fetch(`*[_type == "ProfileInfo"][0]`);


  return {
    props: {
      ProfileInfo,
      
    }
  };
}

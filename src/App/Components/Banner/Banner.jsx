
import React from "react";
import Video from "../../../videos/waves-hero.mp4";
import "./Banner.css";
import Typewriter from "typewriter-effect";
//import ParticleImg from "../../Pages/ParticleImage";



const Banner = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center">
      <div className="video-wrap absolute inset-0 overflow-hidden z-0">
        <video id="video-bg" autoPlay muted loop  className="w-full h-full object-cover">
          <source src={Video} type="video/mp4" />
        </video>
        {/* <img src={banner} alt="" className="" /> */}
      </div>
      <div className="content text-center font-Monte ">        
         
        <h1 className="hero-title lg:w-[30%] sm:w-auto">         
          <a href="#" className="">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          HI- <h1>I'm</h1>
        </a> 
        </h1>
        {/* <h1 className="hero-title_2 z-10 navbar-brand mix-blend-difference relative">
          <ParticleImg />
        </h1> */}
        <div className="Ring">
       
          <h1 className="blend_2 max-[575.98px]:text-[1rem] font-bold">
          
            <Typewriter
              options={{
                strings: [
                  "Front End Developer",
                  "Web Designer",
                  "Web Developer",
                  "React Developer",
                  
                ],
                autoStart: true,
                loop: true,
              }}
            />
         
          
 
          </h1>                       
        </div>
      </div>
      
     
    </section>
  );
};

export default Banner;





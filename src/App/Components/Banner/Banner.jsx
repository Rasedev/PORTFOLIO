
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
          <a href="#" className="relative inline-block">
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
       
          <h1 className="blend_2 max-[375px]:text-[1rem] font-bold">
          
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


// import React from "react";
// import Video from "../../../videos/waves-hero.mp4";
// import "./Banner.css";
// import Typewriter from "typewriter-effect";

// const Banner = () => {
//   return (
//     <section className="min-h-screen relative flex flex-col justify-center items-center">
//       <div className="video-wrap absolute inset-0 overflow-hidden z-0">
//         <video
//           id="video-bg"
//           autoPlay
//           muted
//           loop
//           className="w-full h-full object-cover"
//         >
//           <source src={Video} type="video/mp4" />
//         </video>
//       </div>
//       <div className="content relative z-10 text-center text-white p-4 flex flex-col items-center">
//         <h1 className="hero-title text-4xl lg:text-6xl font-bold mb-4 w-full sm:w-auto">
//           <a href="#" className="relative inline-block">
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span>
//             HI- <span className="block">I'm</span>
//           </a>
//         </h1>
//         <div className="Ring mt-4">
//           <h1 className="blend_2 font-bold text-xl lg:text-3xl">
//             <Typewriter
//               options={{
//                 strings: [
//                   "Front End Developer",
//                   "Web Designer",
//                   "Web Developer",
//                   "React Developer",
//                 ],
//                 autoStart: true,
//                 loop: true,
//               }}
//             />
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;




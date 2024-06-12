
// import React, { useEffect } from "react";
// import CountUp from "react-countup";
// //import { BsPatchCheckFill } from "react-icons/bs";
// import { FaHtml5 } from "react-icons/fa6";
// import { IoLogoCss3 } from "react-icons/io";
// import { TbBrandJavascript } from "react-icons/tb";
// import { SiTailwindcss } from "react-icons/si";
// import { FaBootstrap } from "react-icons/fa";
// import { FaReact } from "react-icons/fa6";
// import { FaNodeJs } from "react-icons/fa";
// import { SiExpress } from "react-icons/si";
// import { SiMongodb } from "react-icons/si";
// import { TbBrandNextjs } from "react-icons/tb";
// import { SiNativescript } from "react-icons/si";
// import { SiAxios } from "react-icons/si";
// import "./Experience.css";

// const Expreience = () => {
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//           } else {
//             entry.target.classList.remove("show");
//           }
//         });
//       },
//       { threshold: 0.1 } // Adjust the threshold as needed
//     );

//     const hiddenElements = document.querySelectorAll(".off");
//     hiddenElements.forEach((elem) => observer.observe(elem));

//     return () => {
//       hiddenElements.forEach((elem) => observer.unobserve(elem));
//     };
//   }, []);

//   const counters = [
//     { value: 360, text: "Hours Of Learning" },
//     { value: 1200, text: "Enrolled Learners" },
//     { value: 650, text: "Online Instructors" },
//     { value: 100, text: "Satisfaction rate", suffix: "%" },
//   ];
//   return (
//     <section className="experience ">
     
//       <h2 className="span loader font-lato py-5">
//               <span className="m">M</span>
//               <span className="m">y</span>            
//               <span className="m">&nbsp;</span>
//               <span className="m">E</span>
//               <span className="m">x</span>
//               <span className="m">p</span>
//               <span className="m">e</span>
//               <span className="m">r</span>
//               <span className="m">i</span>
//               <span className="m">e</span>
//               <span className="m">n</span>
//               <span className="m">c</span>
//               <span className="m">e</span>
//               <span className="m">s</span>
//               <span className="color">.</span>
//             </h2>
//       <div className=" experience__container">
//         <div className="experience__frontend">
//           <h3 className="tit_top font-Josefin">Frontend Development</h3>
//           <div className="experience__content font-pops">
//             <article className="experience__details">
//               {/* <BsPatchCheckFill className="experience__details-icon" /> */}
//               <FaHtml5 className="experience__details-icon"/>
//               <div className="">
             
//                 <h4>HTML</h4>
//                 <small className="text-light">Experienced</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               {/* <BsPatchCheckFill className="experience__details-icon" /> */}
//               <IoLogoCss3 className="experience__details-icon "/>
//               <div>
//                 <h4>CSS</h4>
//                 <small className="text-light">Advandced</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               {/* <BsPatchCheckFill className="experience__details-icon" /> */}
//               <TbBrandJavascript className="experience__details-icon"/>
//               <div>
//                 <h4>Javascript</h4>
//                 <small className="text-light">LoveIt</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               {/* <BsPatchCheckFill className="experience__details-icon" /> */}
//               <SiTailwindcss className="experience__details-icon"/>
//               <div>
//                 <h4>Tailwind</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               {/* <BsPatchCheckFill className="experience__details-icon" /> */}
//               <FaBootstrap className="experience__details-icon"/>
//               <div>
//                 <h4>Bootstrap</h4>
//                 <small className="text-light">Begginer</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               {/* <BsPatchCheckFill className="experience__details-icon" /> */}
//               <FaReact className="experience__details-icon"/>
//               <div>
//                 <h4>React</h4>
//                 <small className="text-light">Senior</small>
//               </div>
//             </article>
//           </div>
//         </div>
//         <div className="experience__backend" name="Hover">
//           <h3 className="tit_top font-Josefin">Backend Development</h3>
//           <div className="experience__content font-pops">
//             <article className="experience__details">
//               <FaNodeJs className="experience__details-icon" />
//               <div>
//                 <h4>NodeJs</h4>
//                 <small className="text-light">Experienced</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <SiExpress className="experience__details-icon" />
//               <div>
//                 <h4>Express</h4>
//                 <small className="text-light">Advandced</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <SiMongodb className="experience__details-icon" />
//               <div>
//                 <h4>Mongo</h4>
//                 <small className="text-light">LoveIt</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <TbBrandNextjs className="experience__details-icon" />
//               <div>
//                 <h4>Next.js</h4>
//                 <small className="text-light">Intermediate</small>
//               </div>
//             </article>

//             <article className="experience__details">
//               <SiNativescript className="experience__details-icon" />
//               <div>
//                 <h4>NativeJs</h4>
//                 <small className="text-light">Begginer</small>
//               </div>
//             </article>
//             <article className="experience__details">
//               <SiAxios className="experience__details-icon" />
//               <div>
//                 <h4>Axios</h4>
//                 <small className="text-light">Senior</small>
//               </div>
//             </article>
            
//           </div>
//         </div>
//       </div>
//       <div className="s_count">
//             <div className="flex flex-wrap">
//               {counters.map((counter, index) => (
//                 <div key={index} className="w-full md:w-1/4 p-5">
//                   <div className="c-counter text-center">
//                     <span className="count-2 text-3xl font-bold">
//                       <CountUp
//                         end={counter.value}
//                         duration={2}
//                         suffix={counter.suffix || " +"}
//                       />
//                     </span>
//                     <p className="text-[#fff] font-pops mt-2">{counter.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
    
   
//     </section>
//   );
// };

// export default Expreience;




import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss, SiExpress, SiMongodb, SiNativescript, SiAxios } from "react-icons/si";
import { FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import "./Experience.css";

const Experience = () => {

  return (
    <section className="experience">
      <h2 className="span loader font-lato py-5">
        <span className="m">M</span>
        <span className="m">y</span>
        <span className="m">&nbsp;</span>
        <span className="m">E</span>
        <span className="m">x</span>
        <span className="m">p</span>
        <span className="m">e</span>
        <span className="m">r</span>
        <span className="m">i</span>
        <span className="m">e</span>
        <span className="m">n</span>
        <span className="m">c</span>
        <span className="m">e</span>
        <span className="m">s</span>
        <span className="color">.</span>
      </h2>
      <div className="experience__container">
        <div className="experience__frontend">
          <h3 className="tit_top font-Josefin">Frontend Development</h3>
          <div className="experience__content font-pops">
            <article className="experience__details">
              <FaHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Love It</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Senior</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3 className="tit_top font-Josefin">Backend Development</h3>
          <div className="experience__content font-pops">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiExpress className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Love It</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandNextjs className="experience__details-icon" />
              <div>
                <h4>Next.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiNativescript className="experience__details-icon" />
              <div>
                <h4>NativeScript</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <SiAxios className="experience__details-icon" />
              <div>
                <h4>Axios</h4>
                <small className="text-light">Senior</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Experience;


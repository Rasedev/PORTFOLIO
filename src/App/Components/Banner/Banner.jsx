
import React from "react";
import "./Banner.css";
import Animation from "../Animation/Animation";
import ConsoleText from "../ConsoleText/ConsoleText";


const Banner = () => {
  const words = ["Front End Developer", "Web Designer", "Web Developer", "React Developer"];
  const colors = ["#000", "#000", "#000", "#000"];

  return (
    <section className="banner">
      <div className="hero-title flex flex-col text-justify tracking-[0.2rem] font-Hat">
        {/* <h3 className="banner_title">Sofwater Developer | <br /> Entrepreneur</h3> */}
        <h2 className="text-[#FFFFFF] sm:w-auto">
          <span className="Text font-black">Hi</span>
          <span className="font-karla text-[#242323] font-bold tracking-[0.8rem] text-[3rem]">,</span>I'm 
        </h2>
        <span className="text-[#FFFFFF] pt-3">Russell Khan</span>
      </div>
      
      <div className="blend_2 font-bold">
        <ConsoleText
          words={words}
          id="console-text"
          colors={colors}
          textColor="white"
        />
      </div>
      <Animation />
    </section>
  );
};

export default Banner;


 
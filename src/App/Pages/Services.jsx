 import React, { useEffect } from "react";
import Expreience from "../Components/Experience/Experience";
import "./Services.css";
import CountUp from "react-countup";


const Services = () => {


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    const hiddenElements = document.querySelectorAll(".off");
    hiddenElements.forEach((elem) => observer.observe(elem));

    return () => {
      hiddenElements.forEach((elem) => observer.unobserve(elem));
    };
  }, []);

  const counters = [
    { value: 360, text: "Hours Of Learning" },
    { value: 1200, text: "Enrolled Learners" },
    { value: 650, text: "Online Instructors" },
    { value: 100, text: "Satisfaction rate", suffix: "%" },
  ];


  return (
    <div id="services">
      {/* <div className="container sectio nav" style={{ position: "relative" }}> */}
      <div className="section nav " >
          <h1 className="">WHAT SKILLS I HAVE</h1>
         
          <h3 className="span loader font-Roboto">
            <span className="m">B</span>
            <span className="m">E</span>
            <span className="m">N</span>
            <span className="m">E</span>
            <span className="m">F</span>
            <span className="m">I</span>
            <span className="m">T</span>
            <span className="m">S</span>
            <span className="m">&nbsp;</span>
            <span className="m">o</span>
            <span className="m">f</span>
            <span className="m">&nbsp;</span>
            <span className="m">T</span>
            <span className="m">E</span>
            <span className="m">C</span>
            <span className="m">H</span>
            <span className="m">N</span>
            <span className="m">O</span>
            <span className="m">L</span>
            <span className="m">O</span>
            <span className="m">G</span>
            <span className="m">I</span>
            <span className="m">E</span>
            <span className="m">S</span>
          </h3>
        
          <Expreience />
        
        
         
      </div>
            <div className="s_count flex flex-wrap">
              {counters.map((counter, index) => (
                <div key={index} className="item w-full md:w-1/4 p-5 md:mx-auto">
                  <div className="c-counter text-center">
                    <span className="count-2 text-3xl font-bold">
                      <CountUp
                        end={counter.value}
                        duration={2}
                        suffix={counter.suffix || " +"}
                      />
                    </span>
                    <p className="text-[#fff] font-pops mt-2 ">{counter.text}</p>
                  </div>
                </div>
              ))}
            </div>
      
    </div>
  );
};

export default Services;

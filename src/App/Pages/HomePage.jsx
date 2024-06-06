import React, { useEffect } from "react";
import "./style.css";

const HomePage = () => {
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
      { threshold: 0.3 } // Adjust the threshold as needed
    );

    const hiddenElements = document.querySelectorAll(".off");
    hiddenElements.forEach((elem) => observer.observe(elem));

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      hiddenElements.forEach((elem) => observer.unobserve(elem));
    };
  }, []); // Run effect only once after initial render

  return (
    <section id="about">
      <h1>About</h1>
      <div className="container off">
        <div className="img-container">
          <img
            src="https://media.istockphoto.com/id/1250436971/tr/foto%C4%9Fraf/erkek-%C3%B6%C4%9Frenci.jpg?s=1024x1024&w=is&k=20&c=SdwrvOBF5hluQo9KXlV1DmilQl98t-9HpNuuT2EVMV4="
            alt="Barry Standing"
          />
        </div>
        <div>
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, <span>consectetur</span> adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <div className="skills-container ">
            <h3>Languages</h3>
            <ul className="skillset">
              <li>Javascript</li>
              <li>HTML & CSS</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div>
            <h3>Frameworks & Environments</h3>
            <ul className="skillset">
              <li>React</li>
              <li>Bootstrap</li>
              <li>d3.js</li>
              <li>SCSS</li>
              <li>Git & Github</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

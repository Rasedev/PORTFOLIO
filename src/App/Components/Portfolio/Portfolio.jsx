import React, { useState } from "react";
import "./Portfolio.css";
//import { VscGithubInverted } from "react-icons/vsc";

import img from "../../../assets/Brigate.jpeg";
import travel from "../../../assets/Pi.jpeg";
import img2 from "../../../assets/Reobiz.jpeg";
import img3 from "../../../assets/0_.jpeg";
import img4 from "../../../assets/Megakit.jpeg";
import img5 from "../../../assets/Petriol.jpeg";
import img6 from "../../../assets/netflix.jpeg";
import img7 from "../../../assets/Retro.png";
import img8 from "../../../assets/Happy-new-year.jpeg";
import img9 from "../../../assets/Daraz.jpeg";
import img10 from "../../../assets/Simple portfolio.png";
import img11 from "../../../assets/P-ticket.jpeg";
import img12 from "../../../assets/Bike.jpeg";
import img13 from "../../../assets/Agenc.jpeg";
import img14 from "../../../assets/Zeppto.jpeg";
import img15 from "../../../assets/Finsweet.jpeg";
import img16 from "../../../assets/Innovate.jpeg";
import img17 from "../../../assets/Hockey.jpeg";
import img18 from "../../../assets/Todo.png";
import img19 from "../../../assets/Login.jpeg";

const Portfolio = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const portfolioItems = [
    {
      id: 1,
      title: "Architect & Engineering ",
      image: img,
      animation: "scrollUp",
      github: "https://github.com/Rasedev",
      demo: "https://shiny-truffle-0f4949.netlify.app",
      link: "https://shiny-truffle-0f4949.netlify.app",
    },
    {
      id: 2,
      title: "Travel The World",
      image: travel,
      animation: "scrollDown",
      github: "https://github.com/Rasedev",
      demo: "https://cool-truffle-a00fc4.netlify.app",
    },
    // Add more portfolio items here
    {
      id: 3,
      title: "Consulting & Business",
      image: img2,
      animation: "scrollUp",
      github: "https://github.com/Rasedev",
      demo: "https://cool-truffle-a00fc4.netlify.app",
    },
    {
      id: 4,
      title: " LMS Education",
      image: img3,
      animation: "scrollDown",
      github: "https://github.com/Rasedev",
      demo: "https://cool-truffle-a00fc4.netlify.app",
    },
    {
      id: 5,
      title: "Corporate Website",
      image: img4,
      animation: "scrollUp",
      github: "https://github.com/Rasedev",
      demo: "https://cool-truffle-a00fc4.netlify.app",
    },
    {
      id: 6,
      title: "Petroil Oil & Gas",
      image: img5,
      animation: "scrollDown",
      github: "https://github.com/Rasedev",
      demo: "https://cool-truffle-a00fc4.netlify.app",
    },
    {
      id: 7,
      title: "Netflix & clone",
      image: img6,
      animation: "scrollUp",
      github: "https://github.com/Rasedev",
      demo: "https://cool-truffle-a00fc4.netlify.app",
    },
    {
      id: 8,
      title: "Retro website",
      image: img7,
      animation: "scrollSlide",
      github: "https://github.com/Rasedev",
      demo: "https://cool-truffle-a00fc4.netlify.app",
    },
    {
      id: 9,
      title: "Happy New Year",
      image: img8,
      animation: "scrollUp",
      github: "https://github.com/Rasedev",
      demo: "https://cool-truffle-a00fc4.netlify.app",
    },
    {
      id: 10,
      title: "Daraz & clone",
      image: img9,
      animation: "scrollDown",
      github: "https://github.com/Rasedev",
      demo: "https://cool-truffle-a00fc4.netlify.app",
    },
    {
      id: 11,
      title: "p-ticket website",
      image: img10,
      animation: "scrollUp",
      github: "https://github.com/Rasedev",
      demo: "https://cool-truffle-a00fc4.netlify.app",
    },
    {
      id: 12,
      title: "p-ticket website",
      image: img11,
      animation: "scrollDown",
      github: "https://github.com/Rasedev",
      demo: "https://cool-truffle-a00fc4.netlify.app",
    },
    {
      id: 13,
      title: "Bike Ride On Website",
      image: img12,
      animation: "scrollUp",
      github: "https://github.com/Rasedev",
      demo: "https://cool-truffle-a00fc4.netlify.app",
    },
    {
      id: 14,
      title: "Agenc & Development",
      image: img13,
      animation: "scrollDown",
      github: "https://github.com/Rasedev",
      demo: "https://cool-truffle-a00fc4.netlify.app",
    },
    {
      id: 15,
      title: "Zeppto Quick commerce",
      image: img14,
      animation: "scrollUp",
      github: "https://github.com/Rasedev",
      demo: "https://cool-truffle-a00fc4.netlify.app",
    },
    {
      id: 16,
      title: "Finsweet Website",
      image: img15,
      animation: "scrollDown",
      github: "https://github.com/Rasedev",
      demo: "https://cool-truffle-a00fc4.netlify.app",
    },
    {
      id: 17,
      title: "Innovate Website",
      image: img16,
      animation: "scrollUp",
      github: "https://github.com/Rasedev",
      demo: "https://cool-truffle-a00fc4.netlify.app",
    },
    {
      id: 18,
      title: "Hockey Club Website",
      image: img17,
      animation: "scrollDown",
      github: "https://github.com/Rasedev",
      demo: "https://cool-truffle-a00fc4.netlify.app",
    },
    {
      id: 19,
      title: "Todo App & Clone",
      image: img18,
      animation: "scrollUp",
      github: "https://github.com/Rasedev",
      demo: "https://cool-truffle-a00fc4.netlify.app",
    },
    {
      id: 20,
      title: "Login & registration",
      image: img19,
      animation: "scrollDown",
      github: "https://github.com/Rasedev",
      demo: "https://cool-truffle-a00fc4.netlify.app",
    },
  ];

  return (
    <div id="portfolio">
      <div className="container">
        <h2 className="font-lato text-[30px] font-bold text-[#FFF] text-center pb-[20px]">
          My Recent Work<span className="color">.</span>
        </h2>
        <div className="grid grid-col-span md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 p-5">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-box ">
              <div
                className="p-box"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="layer"
                  style={
                    hoveredItem === item.id
                      ? {
                          animation: `${item.animation} 10s linear backwards`,
                        }
                      : null
                  }
                >
                  {hoveredItem === item.id && (
                    <img src={item.image} alt={item.title} />
                  )}
                </div>
                <div className="inner">
                  <h3 className="">{item.title}</h3>
                  <div className=" flex gap-4 mt-4">
                    <div className="button-container-1">
                      <span
                        href={item.github}
                        className="mas"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </span>
                      <button id="work" type="button" name="Hover"></button>
                    </div>
                    <div className="button-container-1">
                      <span
                        href={item.demo}
                        className="mas"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </span>
                      <button id="work" type="button" name="Hover">
                        {/* Live Demo */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

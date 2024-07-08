import React, { useEffect } from "react";
import "./AboutPage.css";
import Rimg from "../../assets/RT0.png";
import TreeComponent from "../Components/Tree/TreeComponent";
import Button from "../Components/Button/Button";

const AboutPage = () => {
  const resumePath =
    "https://drive.google.com/file/d/13-t54h0NbBriqY899IaJ0txMGsVbgUw0/view";
  const handleResumeClick = () => {
    window.open(resumePath, "_blank");
  };

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
      { threshold: 0.3 }
    );

    const hiddenElements = document.querySelectorAll(".off");
    hiddenElements.forEach((elem) => observer.observe(elem));

    return () => {
      hiddenElements.forEach((elem) => observer.unobserve(elem));
    };
  }, []);

  return (
    <section id="about">
      <div className="flex flex-col items-center max-w-[1200px] w-[100%] max-[575.98px]:pt-0 pt-[60px] pb-[100px] ">
        <h1 className="max-[575.98px]:text-[2rem] text-[2rem] font-bold font-Hat ">
          About Me<span className="color font-lato">.</span>
        </h1>

        <div className="wrapper off">
          <div className="img-container object-cover">
            <img src={Rimg} alt="Russell Standing" className="profile-img" />
            <Button
              title="RESUME"
              onClick={handleResumeClick}
              width="250px"
              height="50px"
              className="about-button-class"
              style={{ backgroundColor: "transparent", borderRadius: "2px" }}
              type="link"
              href={resumePath}
            />
          </div>
          <div className="delay p-0 text-[1.4rem] font-normal capitalize">
            <h2 className="max-[575.98px]:text-center bg-darkgray p-4 mb-3 font-Josefin">
              My Craft
            </h2>

            <p className="text-[1rem] normal font-Josefin leading-6 pb-3">
              Hello, my name is Russell. I am a passionate Full-stack developer
              with a strong inclination towards front-end development. I find
              immense joy in combining colors and code to create visually
              stunning and interactive web applications. I thrive on the
              challenge of learning new skills and staying updated with the
              latest trends in the tech industry.
            </p>

            <div className="about_lan">
              <h3 className="text-[1.2rem] text-left py-2 capitalize text-[#ffffff] tracking-[1px] font-Hat font-black">
                Languages
              </h3>
              <ul className="">
                <li className="list-inside list-[square] font-Josefin text-[0.9rem] leading-[1.5rem]">
                  HTML & CSS
                </li>
                <li className="list-inside list-[square] font-Josefin text-[1rem]">
                  Javascript
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-[1.2rem] text-left py-3 capitalize text-[#ffffff] tracking-[1px] font-Hat font-black">
                Frameworks & Environments
              </h3>
              <div className="flex items-center justify-between">
                <ul className="">
                  <li className="list-inside list-[square] font-Josefin text-[1rem] leading-[1.5rem]">
                    React
                  </li>
                  <li className="list-inside list-[square] font-Josefin text-[1rem] leading-[1.5rem]">
                    Express
                  </li>
                  <li className="list-inside list-[square] font-Josefin text-[1rem] leading-[1.5rem]">
                    Bootstrap
                  </li>
                  <li className="list-inside list-[square] font-Josefin text-[1rem] leading-[1.5rem]">
                    Tailwind
                  </li>
                  <li className="list-inside list-[square] font-Josefin text-[1rem] leading-[1.5rem]">
                    SCSS
                  </li>
                  <li className="list-inside list-[square] font-Josefin text-[1rem] leading-[1.5rem]">
                    DaisyUI
                  </li>
                  <li className="list-inside list-[square] font-Josefin text-[1rem] leading-[1.5rem] tracking-[-1.4px]">
                    Git & Github
                  </li>
                </ul>
                <TreeComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

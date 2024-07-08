
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
      <h2 className="span loader font-Hat py-5">
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
        <span className="color font-lato">.</span>
      </h2>
      <div className="experience__container">
        <div className="experience__frontend">
          <h3 className="tit_top font-Hat">Frontend Development</h3>
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
          <h3 className="tit_top font-Hat">Backend Development</h3>
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


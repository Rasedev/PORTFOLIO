

//import { BsPatchCheckFill } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNativescript } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import "./Experience.css";

const Expreience = () => {
  return (
    <section className="experience">
     
      <h2 className="span loader font-lato">
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
      <div className=" experience__container">
        <div className="experience__frontend">
          <h3 className="tit_top font-Josefin">Frontend Development</h3>
          <div className="experience__content font-pops">
            <article className="experience__details">
              {/* <BsPatchCheckFill className="experience__details-icon" /> */}
              <FaHtml5 className="experience__details-icon"/>
              <div className="">
             
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              {/* <BsPatchCheckFill className="experience__details-icon" /> */}
              <IoLogoCss3 className="experience__details-icon "/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Advandced</small>
              </div>
            </article>
            <article className="experience__details">
              {/* <BsPatchCheckFill className="experience__details-icon" /> */}
              <TbBrandJavascript className="experience__details-icon"/>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">LoveIt</small>
              </div>
            </article>
            <article className="experience__details">
              {/* <BsPatchCheckFill className="experience__details-icon" /> */}
              <SiTailwindcss className="experience__details-icon"/>
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              {/* <BsPatchCheckFill className="experience__details-icon" /> */}
              <FaBootstrap className="experience__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Begginer</small>
              </div>
            </article>
            <article className="experience__details">
              {/* <BsPatchCheckFill className="experience__details-icon" /> */}
              <FaReact className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Senior</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend" name="Hover">
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
                <small className="text-light">Advandced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>Mongo</h4>
                <small className="text-light">LoveIt</small>
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
                <h4>NativeJs</h4>
                <small className="text-light">Begginer</small>
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

export default Expreience;



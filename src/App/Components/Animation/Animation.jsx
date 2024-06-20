import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Animate.css";

const Animation = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="phone">
      <svg
        version="1.1"
        className="iphone"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="200 95 550 600"
        xmlSpace="preserve"
        style={{ width: "100%", height: "80%" }}
      >
        <g>
          <rect
            x="250"
            y="0"
            style={{ fill: "none" }}
            width="100"
            height="100"
          />
          <path
            style={{ fill: "none", stroke: "#F7F7FF", strokeMiterlimit: 10 }}
            d="M421.661,112.813c0,1.402-1.12,2.547-2.547,2.547 c-1.427,0-2.548-1.146-2.548-2.547c0-1.427,1.12-2.58,2.548-2.58C420.541,110.233,421.661,111.385,421.661,112.813L421.661,112.813 z M421.661,112.813"
          />
          <path
            style={{ fill: "none", stroke: "#F7F7FF", strokeMiterlimit: 10 }}
            d="M429.927,115.184h57.931c1.076,0,1.945-1.067,1.945-2.373 c0-1.33-0.869-2.403-1.945-2.403h-57.931c-1.053,0-1.921,1.073-1.921,2.403C428.006,114.117,428.875,115.184,429.927,115.184 L429.927,115.184z M429.927,115.184"
          />
          <path
            className="screen"
            style={{
              fill: "none",
              stroke: "#F7F7FF",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M593.617,660.899H321.977 c-2.378,0-4.323-1.945-4.323-4.323V144.998c0-2.378,1.945-4.323,4.323-4.323h271.639c2.378,0,4.323,1.945,4.323,4.323v511.578 C597.94,658.953,595.994,660.899,593.617,660.899z"
          />
          <path
            className="inner"
            style={{
              fill: "none",
              stroke: "#F7F7FF",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M577.911,727.56h-239.54 c-20.461,0-37.201-16.74-37.201-37.201V113.769c0-20.461,16.741-37.201,37.201-37.201h239.54c20.461,0,37.201,16.741,37.201,37.201 v576.589C615.112,710.819,598.372,727.56,577.911,727.56z"
          />
          <path
            className="outer"
            style={{
              fill: "none",
              stroke: "#F7F7FF",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M579.803,735.029H337.611 c-23.304,0-42.371-19.067-42.371-42.371V111.484c0-23.304,19.067-42.371,42.371-42.371h242.192 c23.304,0,42.371,19.067,42.371,42.371v581.174C622.174,715.962,603.107,735.029,579.803,735.029z"
          />
          <circle
            className="homebutton"
            style={{
              fill: "none",
              stroke: "#F7F7FF",
              strokeWidth: 4,
              strokeMiterlimit: 10,
            }}
            cx="456.932"
            cy="692.014"
            r="17.593"
          />
          <line
            className="lock"
            style={{
              fill: "none",
              stroke: "#F7F7FF",
              strokeWidth: 3,
              strokeMiterlimit: 10,
            }}
            x1="293.913"
            y1="168.162"
            x2="293.913"
            y2="181.671"
          />
          <line
            className="vol1"
            style={{
              fill: "none",
              stroke: "#F7F7FF",
              strokeWidth: 3,
              strokeMiterlimit: 10,
            }}
            x1="293.913"
            y1="206.15"
            x2="293.913"
            y2="240.64"
          />
          <line
            className="vol2"
            style={{
              fill: "none",
              stroke: "#F7F7FF",
              strokeWidth: 3,
              strokeMiterlimit: 10,
            }}
            x1="623.067"
            y1="199.311"
            x2="623.067"
            y2="233.813"
          />
          <line
            className="vol3"
            style={{
              fill: "none",
              stroke: "#F7F7FF",
              strokeWidth: 3,
              strokeMiterlimit: 10,
            }}
            x1="293.913"
            y1="247.288"
            x2="293.913"
            y2="281.778"
          />

          <text
            x="83%"
            y="65%"
            dy=".35em"
            fill="#333"
            // fontSize="48"
            className="font-play"
            textAnchor="middle"
            // dominantBaseline="middle"
            // data-aos="fade-right"
            // data-aos-anchor-placement="center-center"
          >
            Hello
          </text>
        </g>
      </svg>

     
    </div>
  );
};

export default Animation;

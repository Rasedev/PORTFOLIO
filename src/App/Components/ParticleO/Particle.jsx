import "../ParticleO/ParticleO.css";
import React, { useState, useEffect, useMemo } from "react";
import { useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  // const words = useMemo(
  //   () => ["Greetings,", "Daniel", "Liflander,", "I", "am", "AI"],
  //   []
  // );

  // const [visibleWords, setVisibleWords] = useState(
  //   Array(words.length).fill(false)
  // );
  // useEffect(() => {
  //   words.forEach((_, index) => {
  //     const timer = setTimeout(() => {
  //       setVisibleWords((prevState) => {
  //         const newState = [...prevState];
  //         newState[index] = true;
  //         return newState;
  //       });
  //     }, 350 * (index + 1));

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   });
  // }, [words]);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <main className="site-wrapper ">
     
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "#000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#13E8E9",
            },
            links: {
              color: "#13E8E9",
              distance: 200,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1.25,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="site_circles_container">
        {/* Test */}
        <div className="site_dotted_circles">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="none"
            className="svgDottedCircles"
          >
            <circle
              vectorEffect="non-scaling-stroke"
              cx="50"
              cy="50"
              r="50"
              strokeDasharray="0 22.43994752564138"
              strokeLinecap="round"
              strokeWidth="2"
            ></circle>
          </svg>
        </div>
        <div className="site_dotted_circles">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="none"
            className="svgDottedCircles"
          >
            <circle
              vectorEffect="non-scaling-stroke"
              cx="50"
              cy="50"
              r="50"
              strokeDasharray="0 22.43994752564138"
              strokeLinecap="round"
              strokeWidth="2"
            ></circle>
          </svg>
        </div>
        <div className="site_dotted_circles">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="none"
            className="svgDottedCircles"
          >
            <circle
              vectorEffect="non-scaling-stroke"
              cx="50"
              cy="50"
              r="50"
              strokeDasharray="0 22.43994752564138"
              strokeLinecap="round"
              strokeWidth="2"
            ></circle>
          </svg>
        </div>
      </div>

      
    </main>
  );
};
export default Particle;



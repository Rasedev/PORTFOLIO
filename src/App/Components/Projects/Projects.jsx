// import React, { useEffect, useRef } from 'react';
// import { createNoise3D } from 'simplex-noise';
// import "./projects.css";

// const Projects = () => {
//   const canvasRef = useRef(null);
//   const noise3D = createNoise3D();
//   const randomness = useRef([]);
//   const parameters = useRef({
//     factor: 0.010,
//     variation: 0.0003,
//     amplitude: 300,
//     lines: 50,
//     waveColor: { r: 255, g: 255, b: 255, a: 1 },
//     shadowColor: { r: 13, g: 14, b: 76, a: 1 },
//     shadowBlur: 1,
//     lineStroke: 1,
//     speed: 0.001
//   });

//   // Setup canvas and initial dimensions
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     let width = window.innerWidth;
//     let height = window.innerHeight;
//     const pixelRatio = Math.min(window.devicePixelRatio, 1.5);

//     canvas.width = width * pixelRatio;
//     canvas.height = height * pixelRatio;
//     context.scale(pixelRatio, pixelRatio);

//     // Setup randomness
//     for (let i = 0, rand = 0; i < parameters.current.lines; i++, rand += parameters.current.factor) {
//       randomness.current[i] = rand;
//     }

//     // Resize handler
//     const resizeHandler = () => {
//       width = window.innerWidth;
//       height = window.innerHeight;
//       canvas.width = width * pixelRatio;
//       canvas.height = height * pixelRatio;
//       context.scale(pixelRatio, pixelRatio);
//     };

//     window.addEventListener('resize', resizeHandler);

//     // Cleanup resize event listener
//     return () => {
//       window.removeEventListener('resize', resizeHandler);
//     };
//   }, []);

//   // Animation loop
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     let animationFrameId;

//     const drawPaths = () => {
//       context.clearRect(0, 0, canvas.width, canvas.height);

//       context.shadowColor = `rgba(${parameters.current.shadowColor.r}, ${parameters.current.shadowColor.g}, ${parameters.current.shadowColor.b}, ${parameters.current.shadowColor.a})`;
//       context.shadowBlur = parameters.current.shadowBlur;
//       context.lineWidth = parameters.current.lineStroke;

//       for (let i = 0; i < parameters.current.lines; i++) {
//         context.beginPath();
//         context.moveTo(0, canvas.height / 2);

//         let randomY = 0;
//         for (let x = 0; x <= canvas.width; x++) {
//           randomY = noise3D(x * parameters.current.variation + randomness.current[i], x * parameters.current.variation, 1);
//           context.lineTo(x, canvas.height / 2 + (parameters.current.amplitude + Math.random() * 0.005) * randomY);
//         }

//         const alpha = Math.min(Math.abs(randomY) + 0.001, 0.3);
//         context.strokeStyle = `rgba(${parameters.current.waveColor.r}, ${parameters.current.waveColor.g}, ${parameters.current.waveColor.b}, ${alpha * 2})`;
//         context.stroke();
//         context.closePath();
//         randomness.current[i] += parameters.current.speed;
//       }

//       animationFrameId = requestAnimationFrame(drawPaths);
//     };

//     animationFrameId = requestAnimationFrame(drawPaths);

//     // Cleanup animation frame
//     return () => {
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return <canvas ref={canvasRef} id="webgl" />;
// };

// export default Projects;

//////////////////////// 2 //////////////////////////////////

// import React, { useEffect, useRef } from 'react';
// import { createNoise3D } from 'simplex-noise';
// import "./projects.css";

// const Projects = () => {
//   const canvasRef = useRef(null);
//   const noise3D = createNoise3D();
//   const randomness = useRef([]);
//   const parameters = useRef({
//     factor: 0.010,
//     variation: 0.0003,
//     amplitude: 300,
//     lines: 50,
//     waveColor: { r: 40, g: 239, b: 250, a: 1 },
//     shadowColor: { r: 13, g: 14, b: 76, a: 1 },
//     shadowBlur: 1,
//     lineStroke: 1,
//     speed: 0.001
//   });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     let width = window.innerWidth;
//     let height = window.innerHeight;
//     const pixelRatio = Math.min(window.devicePixelRatio, 1.5);

//     const setCanvasSize = () => {
//       width = window.innerWidth;
//       height = window.innerHeight;
//       canvas.width = width * pixelRatio;
//       canvas.height = height * pixelRatio;
//       context.scale(pixelRatio, pixelRatio);
//     };

//     setCanvasSize();

//     for (let i = 0, rand = 0; i < parameters.current.lines; i++, rand += parameters.current.factor) {
//       randomness.current[i] = rand;
//     }

//     const resizeHandler = () => {
//       setCanvasSize();
//     };

//     window.addEventListener('resize', resizeHandler);

//     return () => {
//       window.removeEventListener('resize', resizeHandler);
//     };
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     let animationFrameId;

//     const drawPaths = () => {
//       context.clearRect(0, 0, canvas.width, canvas.height);

//       context.shadowColor = `rgba(${parameters.current.shadowColor.r}, ${parameters.current.shadowColor.g}, ${parameters.current.shadowColor.b}, ${parameters.current.shadowColor.a})`;
//       context.shadowBlur = parameters.current.shadowBlur;
//       context.lineWidth = parameters.current.lineStroke;

//       for (let i = 0; i < parameters.current.lines; i++) {
//         context.beginPath();
//         context.moveTo(0, canvas.height / 2);

//         let randomY = 0;
//         for (let x = 0; x <= canvas.width; x++) {
//           randomY = noise3D(x * parameters.current.variation + randomness.current[i], x * parameters.current.variation, 1);
//           context.lineTo(x, canvas.height / 2 + (parameters.current.amplitude + Math.random() * 0.005) * randomY);
//         }

//         const alpha = Math.min(Math.abs(randomY) + 0.001, 0.3);
//         context.strokeStyle = `rgba(${parameters.current.waveColor.r}, ${parameters.current.waveColor.g}, ${parameters.current.waveColor.b}, ${alpha * 2})`;
//         context.stroke();
//         context.closePath();
//         randomness.current[i] += parameters.current.speed;
//       }

//       animationFrameId = requestAnimationFrame(drawPaths);
//     };

//     animationFrameId = requestAnimationFrame(drawPaths);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return <canvas ref={canvasRef} id="webgl" />;
// };

// export default Projects;

//////////////////////// 3 //////////////////////////////////

// import React, { useEffect, useRef, useCallback } from 'react';
// import { createNoise3D } from 'simplex-noise';
// import './projects.css';

// const Projects = () => {
//   const canvasRef = useRef(null);
//   const noise3D = createNoise3D();
//   const randomness = useRef([]);
//   const parameters = useRef({
//     factor: 0.010,
//     variation: 0.0003,
//     amplitude: 300,
//     lines: 50,
//     waveColor: { r: 40, g: 239, b: 250, a: 1 },
//     shadowColor: { r: 13, g: 14, b: 76, a: 1 },
//     shadowBlur: 1,
//     lineStroke: 1,
//     speed: 0.001
//   });

//   const drawPaths = useCallback((context, canvas) => {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     context.shadowColor = `rgba(${parameters.current.shadowColor.r}, ${parameters.current.shadowColor.g}, ${parameters.current.shadowColor.b}, ${parameters.current.shadowColor.a})`;
//     context.shadowBlur = parameters.current.shadowBlur;
//     context.lineWidth = parameters.current.lineStroke;

//     for (let i = 0; i < parameters.current.lines; i++) {
//       context.beginPath();
//       context.moveTo(0, canvas.height / 2);

//       let randomY = 0;
//       for (let x = 0; x <= canvas.width; x++) {
//         randomY = noise3D(x * parameters.current.variation + randomness.current[i], x * parameters.current.variation, 1);
//         context.lineTo(x, canvas.height / 2 + (parameters.current.amplitude + Math.random() * 0.005) * randomY);
//       }

//       const alpha = Math.min(Math.abs(randomY) + 0.001, 0.3);
//       context.strokeStyle = `rgba(${parameters.current.waveColor.r}, ${parameters.current.waveColor.g}, ${parameters.current.waveColor.b}, ${alpha * 2})`;
//       context.stroke();
//       context.closePath();
//       randomness.current[i] += parameters.current.speed;
//     }
//   }, [noise3D]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     let width = window.innerWidth;
//     let height = window.innerHeight;
//     const pixelRatio = Math.min(window.devicePixelRatio, 1.5);

//     const setCanvasSize = () => {
//       width = window.innerWidth;
//       height = window.innerHeight;
//       canvas.width = width * pixelRatio;
//       canvas.height = height * pixelRatio;
//       context.scale(pixelRatio, pixelRatio);
//     };

//     setCanvasSize();

//     for (let i = 0, rand = 0; i < parameters.current.lines; i++, rand += parameters.current.factor) {
//       randomness.current[i] = rand;
//     }

//     const resizeHandler = () => {
//       setCanvasSize();
//     };

//     window.addEventListener('resize', resizeHandler);

//     return () => {
//       window.removeEventListener('resize', resizeHandler);
//     };
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     let animationFrameId;

//     const animate = () => {
//       drawPaths(context, canvas);
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     // Start the animation only when the canvas is in the viewport
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           animationFrameId = requestAnimationFrame(animate);
//         } else {
//           cancelAnimationFrame(animationFrameId);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     observer.observe(canvas);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       observer.disconnect();
//     };
//   }, [drawPaths]);

//   return <canvas ref={canvasRef} id="webgl" />;
// };

// export default Projects;

//////////////////////// 4 //////////////////////////////////

import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import "./projects.css";

const Projects = () => {
  const canvasRef = useRef(null);
  const noise3D = createNoise3D();
  const randomness = useRef([]);
  const parameters = useRef({
    // factor: 0.01,
    // variation: 0.3,
    factor: 0.010,
    variation: 0.0003,
    amplitude: 300,
    lines: 50,
    waveColor: { r: 255, g: 255, b: 255, a: 1 },
    shadowColor: { r: 13, g: 14, b: 76, a: 1 },
    shadowBlur: 1,
    lineStroke: 1,
    speed: 0.001,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const container = canvas.parentElement;
    let width = container.clientWidth;
    let height = container.clientHeight;
    const pixelRatio = Math.min(window.devicePixelRatio, 1.5);

    const setCanvasSize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      context.scale(pixelRatio, pixelRatio);
    };

    setCanvasSize();

    for (
      let i = 0, rand = 0;
      i < parameters.current.lines;
      i++, rand += parameters.current.factor
    ) {
      randomness.current[i] = rand;
    }

    const resizeHandler = () => {
      setCanvasSize();
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let animationFrameId;

    const drawPaths = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      context.shadowColor = `rgba(${parameters.current.shadowColor.r}, ${parameters.current.shadowColor.g}, ${parameters.current.shadowColor.b}, ${parameters.current.shadowColor.a})`;
      context.shadowBlur = parameters.current.shadowBlur;
      context.lineWidth = parameters.current.lineStroke;

      for (let i = 0; i < parameters.current.lines; i++) {
        context.beginPath();
        context.moveTo(0, canvas.height / 2);

        let randomY = 0;
        for (let x = 0; x <= canvas.width; x++) {
          randomY = noise3D(
            x * parameters.current.variation + randomness.current[i],
            x * parameters.current.variation,
            1
          );
          context.lineTo(
            x,
            canvas.height / 2 +
              (parameters.current.amplitude + Math.random() * 0.005) * randomY
          );
        }

        const alpha = Math.min(Math.abs(randomY) + 0.001, 0.3);
        context.strokeStyle = `rgba(${parameters.current.waveColor.r}, ${
          parameters.current.waveColor.g
        }, ${parameters.current.waveColor.b}, ${alpha * 2})`;
        context.stroke();
        context.closePath();
        randomness.current[i] += parameters.current.speed;
      }

      animationFrameId = requestAnimationFrame(drawPaths);
    };

    animationFrameId = requestAnimationFrame(drawPaths);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} id="webgl" />;
};

export default Projects;





// import React, { useEffect, useRef, useState } from "react";
// import { createNoise3D } from "simplex-noise";
// import "./projects.css";

// const Projects = () => {
//   const canvasRef = useRef(null);
//   const noise3D = createNoise3D();
//   const randomness = useRef([]);
//   const [parameters, setParameters] = useState({
//     factor: 0.009,
//     variation: 0.0001,
//     amplitude: 300,
//     lines: 32,
//     waveColor: { r: 255, g: 255, b: 255, a: 1 },
//     shadowColor: { r: 13, g: 14, b: 76, a: 1 },
//     shadowBlur: 1,
//     lineStroke: 1.5,
//     speed: 0.001,
//   });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");
//     const container = canvas.parentElement;
//     let width = container.clientWidth;
//     let height = container.clientHeight;
//     const pixelRatio = Math.min(window.devicePixelRatio, 1.5);

//     const setCanvasSize = () => {
//       width = container.clientWidth;
//       height = container.clientHeight;
//       canvas.width = width * pixelRatio;
//       canvas.height = height * pixelRatio;
//       context.scale(pixelRatio, pixelRatio);
//     };

//     setCanvasSize();

//     for (let i = 0, rand = 0; i < parameters.lines; i++, rand += parameters.factor) {
//       randomness.current[i] = rand;
//     }

//     const resizeHandler = () => {
//       setCanvasSize();
//     };

//     window.addEventListener("resize", resizeHandler);

//     return () => {
//       window.removeEventListener("resize", resizeHandler);
//     };
//   }, [parameters]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");
//     let animationFrameId;

//     const drawPaths = () => {
//       context.clearRect(0, 0, canvas.width, canvas.height);

//       context.shadowColor = `rgba(${parameters.shadowColor.r}, ${parameters.shadowColor.g}, ${parameters.shadowColor.b}, ${parameters.shadowColor.a})`;
//       context.shadowBlur = parameters.shadowBlur;
//       context.lineWidth = parameters.lineStroke;

//       for (let i = 0; i < parameters.lines; i++) {
//         context.beginPath();
//         context.moveTo(0, canvas.height / 2);

//         let randomY = 0;
//         for (let x = 0; x <= canvas.width; x++) {
//           randomY = noise3D(
//             x * parameters.variation + randomness.current[i],
//             x * parameters.variation,
//             1
//           );
//           context.lineTo(
//             x,
//             canvas.height / 2 +
//               (parameters.amplitude + Math.random() * 0.005) * randomY
//           );
//         }

//         const alpha = Math.min(Math.abs(randomY) + 0.001, 0.3);
//         context.strokeStyle = `rgba(${parameters.waveColor.r}, ${parameters.waveColor.g}, ${parameters.waveColor.b}, ${alpha * 2})`;
//         context.stroke();
//         context.closePath();
//         randomness.current[i] += parameters.speed;
//       }

//       animationFrameId = requestAnimationFrame(drawPaths);
//     };

//     animationFrameId = requestAnimationFrame(drawPaths);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [parameters]);

//   const handleParameterChange = (e) => {
//     const { name, value, type } = e.target;
//     if (type === "number") {
//       setParameters({ ...parameters, [name]: parseFloat(value) });
//     } else if (type === "color") {
//       const rgb = hexToRgb(value);
//       setParameters({
//         ...parameters,
//         [name]: { ...parameters[name], ...rgb },
//       });
//     }
//   };

//   const hexToRgb = (hex) => {
//     const bigint = parseInt(hex.slice(1), 16);
//     return {
//       r: (bigint >> 16) & 255,
//       g: (bigint >> 8) & 255,
//       b: bigint & 255,
//       a: 1,
//     };
//   };

//   return (
//     <div>
//       <canvas ref={canvasRef} id="webgl" />
//       {/* <div className="controls">
//         <label>
//           Factor:
//           <input
//             type="number"
//             name="factor"
//             value={parameters.factor}
//             step="0.001"
//             onChange={handleParameterChange}
//           />
//         </label>
//         <label>
//           Variation:
//           <input
//             type="number"
//             name="variation"
//             value={parameters.variation}
//             step="0.0001"
//             onChange={handleParameterChange}
//           />
//         </label>
//         <label>
//           Amplitude:
//           <input
//             type="number"
//             name="amplitude"
//             value={parameters.amplitude}
//             step="10"
//             onChange={handleParameterChange}
//           />
//         </label>
//         <label>
//           Lines:
//           <input
//             type="number"
//             name="lines"
//             value={parameters.lines}
//             step="1"
//             onChange={handleParameterChange}
//           />
//         </label>
//         <label>
//           Wave Color:
//           <input
//             type="color"
//             name="waveColor"
//             value={`#${((1 << 24) + (parameters.waveColor.r << 16) + (parameters.waveColor.g << 8) + parameters.waveColor.b).toString(16).slice(1)}`}
//             onChange={handleParameterChange}
//           />
//         </label>
//         <label>
//           Shadow Color:
//           <input
//             type="color"
//             name="shadowColor"
//             value={`#${((1 << 24) + (parameters.shadowColor.r << 16) + (parameters.shadowColor.g << 8) + parameters.shadowColor.b).toString(16).slice(1)}`}
//             onChange={handleParameterChange}
//           />
//         </label>
//         <label>
//           Shadow Blur:
//           <input
//             type="number"
//             name="shadowBlur"
//             value={parameters.shadowBlur}
//             step="1"
//             onChange={handleParameterChange}
//           />
//         </label>
//         <label>
//           Line Stroke:
//           <input
//             type="number"
//             name="lineStroke"
//             value={parameters.lineStroke}
//             step="0.1"
//             onChange={handleParameterChange}
//           />
//         </label>
//         <label>
//           Speed:
//           <input
//             type="number"
//             name="speed"
//             value={parameters.speed}
//             step="0.0001"
//             onChange={handleParameterChange}
//           />
//         </label>
//       </div> */}
//     </div>
//   );
// };

// export default Projects;

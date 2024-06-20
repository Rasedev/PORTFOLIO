
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


import React, { useEffect, useRef, useCallback } from 'react';
import { createNoise3D } from 'simplex-noise';
import './projects.css';

const Projects = () => {
  const canvasRef = useRef(null);
  const noise3D = createNoise3D();
  const randomness = useRef([]);
  const parameters = useRef({
    factor: 0.010,
    variation: 0.0003,
    amplitude: 300,
    lines: 50,
    waveColor: { r: 40, g: 239, b: 250, a: 1 },
    shadowColor: { r: 13, g: 14, b: 76, a: 1 },
    shadowBlur: 1,
    lineStroke: 1,
    speed: 0.001
  });

  const drawPaths = useCallback((context, canvas) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.shadowColor = `rgba(${parameters.current.shadowColor.r}, ${parameters.current.shadowColor.g}, ${parameters.current.shadowColor.b}, ${parameters.current.shadowColor.a})`;
    context.shadowBlur = parameters.current.shadowBlur;
    context.lineWidth = parameters.current.lineStroke;

    for (let i = 0; i < parameters.current.lines; i++) {
      context.beginPath();
      context.moveTo(0, canvas.height / 2);

      let randomY = 0;
      for (let x = 0; x <= canvas.width; x++) {
        randomY = noise3D(x * parameters.current.variation + randomness.current[i], x * parameters.current.variation, 1);
        context.lineTo(x, canvas.height / 2 + (parameters.current.amplitude + Math.random() * 0.005) * randomY);
      }

      const alpha = Math.min(Math.abs(randomY) + 0.001, 0.3);
      context.strokeStyle = `rgba(${parameters.current.waveColor.r}, ${parameters.current.waveColor.g}, ${parameters.current.waveColor.b}, ${alpha * 2})`;
      context.stroke();
      context.closePath();
      randomness.current[i] += parameters.current.speed;
    }
  }, [noise3D]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    const pixelRatio = Math.min(window.devicePixelRatio, 1.5);

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      context.scale(pixelRatio, pixelRatio);
    };

    setCanvasSize();

    for (let i = 0, rand = 0; i < parameters.current.lines; i++, rand += parameters.current.factor) {
      randomness.current[i] = rand;
    }

    const resizeHandler = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;

    const animate = () => {
      drawPaths(context, canvas);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation only when the canvas is in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [drawPaths]);

  return <canvas ref={canvasRef} id="webgl" />;
};

export default Projects;




// import './Wave.css';
// import React, { useEffect } from 'react';
// import * as THREE from 'three';

// const Wave = () => {
//   useEffect(() => {
//     const SEPARATION = 30, AMOUNTX = 430, AMOUNTY = 55;
//     const SPEED = 0.1; // Speed factor for animation
//     const AMPLITUDE_X = 0.1; // Amplitude factor for x direction
//     const AMPLITUDE_Y = 0.1; // Amplitude factor for y direction

//     let container;
//     let camera, scene, renderer;
//     let particle, count = 0;
//     let windowHalfX = window.innerWidth / 2;
//     let windowHalfY = window.innerHeight / 2;

//     init();
//     animate();

//     function init() {
//       container = document.createElement('div');
//       document.body.appendChild(container);
//       if (container) {
//         container.className += container.className ? ' waves' : 'waves';
//       }

//       camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);
//       camera.position.y = 350;
//       camera.position.z = 200;
//       camera.rotation.x = 0.15;

//       scene = new THREE.Scene();

//       const geometry = new THREE.BufferGeometry();
//       const positions = [];
//       const colors = [];

//       // Fixed color for all particles
//       const fixedColor = new THREE.Color('#ffffff'); // Set color of each particle to #03dac6

//       for (let ix = 0; ix < AMOUNTX; ix++) {
//         for (let iy = 0; iy < AMOUNTY; iy++) {
//           positions.push(
//             ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2),
//             0,
//             iy * SEPARATION - ((AMOUNTY * SEPARATION) - 10)
//           );

//           colors.push(fixedColor.r, fixedColor.g, fixedColor.b);
//         }
//       }

//       geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
//       geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

//       const material = new THREE.PointsMaterial({ size: 3, vertexColors: true });

//       particle = new THREE.Points(geometry, material);
//       scene.add(particle);

//       renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); // Added antialias: true
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       renderer.setClearColor(0x000000, 1); // Adjust background color if needed
//       container.appendChild(renderer.domElement);

//       window.addEventListener('resize', onWindowResize, false);
//     }

//     function onWindowResize() {
//       windowHalfX = window.innerWidth / 2;
//       windowHalfY = window.innerHeight / 2;

//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();

//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }

//     function animate() {
//       requestAnimationFrame(animate);
//       render();
//     }

//     function render() {
//       const positions = particle.geometry.attributes.position.array;

//       let i = 0;
//       for (let ix = 0; ix < AMOUNTX; ix++) {
//         for (let iy = 0; iy < AMOUNTY; iy++) {
//           // Adjust the animation formula to control speed and amplitude
//           positions[i + 1] = (Math.sin((ix + count) * AMPLITUDE_X) * 50) + (Math.sin((iy + count) * AMPLITUDE_Y) * 20);
//           i += 3;
//         }
//       }

//       particle.geometry.attributes.position.needsUpdate = true;

//       renderer.render(scene, camera);

//       count += SPEED; // Adjust speed by changing this increment
//     }

//     return () => {
//       window.removeEventListener('resize', onWindowResize);
//       document.body.removeChild(container);
//     };
//   }, []);

//   return (
//     <div className=''>
//       <canvas id="canvas"></canvas>
//     </div>
//   );
// };

// export default Wave;



import './Wave.css';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import Animation from "../Animation/Animation";

const Wave = () => {
  useEffect(() => {
    const SEPARATION = 30, AMOUNTX = 430, AMOUNTY = 55;
    const SPEED = 0.1; // Speed factor for animation
    const AMPLITUDE_X = 0.1; // Amplitude factor for x direction
    const AMPLITUDE_Y = 0.1; // Amplitude factor for y direction

    let container;
    let camera, scene, renderer;
    let particle, count = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {
      container = document.createElement('div');
      document.body.appendChild(container);
      if (container) {
        container.className += container.className ? ' waves' : 'waves';
      }

      camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.y = 350;
      camera.position.z = 200;
      camera.rotation.x = 0.15;

      scene = new THREE.Scene();

      const geometry = new THREE.BufferGeometry();
      const positions = [];
      const colors = [];

      // Fixed color for all particles (black)
      const fixedColor = new THREE.Color('#808080');

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions.push(
            ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2),
            0,
            iy * SEPARATION - ((AMOUNTY * SEPARATION) - 10)
          );

          colors.push(fixedColor.r, fixedColor.g, fixedColor.b);
        }
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({ size: 3, vertexColors: true });

      particle = new THREE.Points(geometry, material);
      scene.add(particle);

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      //renderer.setClearColor(0x000000, 1); // Set background color to white
      container.appendChild(renderer.domElement);

      window.addEventListener('resize', onWindowResize, false);
    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      const positions = particle.geometry.attributes.position.array;

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          // Adjust the animation formula to control speed and amplitude
          positions[i + 1] = (Math.sin((ix + count) * AMPLITUDE_X) * 50) + (Math.sin((iy + count) * AMPLITUDE_Y) * 20);
          i += 3;
        }
      }

      particle.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);

      count += SPEED; // Adjust speed by changing this increment
    }

    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.body.removeChild(container);
    };
  }, []);

  return (
    <div className='wave-container'>
      
      <Animation/>
      <canvas id="canvas"></canvas>
    </div>
    
  );
};

export default Wave;

import React from "react";
import logo from '../../assets/1.png'
import ParticleImage, { Vector, forces } from "react-particle-image";
 import "../Components/Banner/Banner.css"


const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#efefef",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 50,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 10);
};

function ParticleImg() {
  return (
   <>
  
   <ParticleImage
    className= "banner_particle "
      src={logo}
      scale={1.20}
      entropy={30}
      maxParticles={2000}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="transparent"
      title="RUSSELL"
     
      
    />
   
   
   </>
  );
}
export default ParticleImg ;
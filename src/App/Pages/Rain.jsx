import React, { useEffect, useRef } from "react";
import RImage from ".././../assets/R.png"; 
import "../Pages/Rain.css"


function Rain() {
  const canvasRef = useRef(null);
  const particlesArrayRef = useRef([]);
  const numberOfParticles = 12000;
  const detail = 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const loadImageAndStartAnimation = async () => {
      const image = new Image();
      //   image.src =  "./assets/R.png";
      image.src = RImage; 

      await new Promise((resolve) => {

        image.onload = () => {

          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          let grid = [];
          for (let y = 0; y < canvas.height; y += detail) {
            let row = [];
            for (let x = 0; x < canvas.width; x += detail) {
              const red = pixels.data[y * 4 * pixels.width + x * 4];
              const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
              const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
              const brightness = calculateBrightness(red, green, blue) / 90;

              row.push(brightness);
            }
            grid.push(row);
          }

          function Particle() {
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 0.7;
            this.size = Math.random() * 2 + 0.1;
          }

          Particle.prototype.update = function () {
            this.speed =
              grid[Math.floor(this.y / detail)][Math.floor(this.x / detail)];
            let movement = 2.5 - this.speed + this.velocity;
            this.y += movement;
            if (this.y >= canvas.height) {
              this.y = 0;
              this.x = Math.random() * canvas.width;
            }
          };

          Particle.prototype.draw = function () {
            ctx.beginPath();
            ctx.fillStyle = "#03dac6";   //////////
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            ctx.fill();
          };

          function init() {
            for (let i = 0; i < numberOfParticles; i++) {
              particlesArrayRef.current.push(new Particle());
            }
          }
          init();

          function animate() {
            ctx.globalAlpha = 0.05;
            ctx.fillStyle = "rgb(0, 0,0)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 0.2;
            particlesArrayRef.current.forEach((particle) => {
              particle.update();
              ctx.globalAlpha = particle.speed * 0.3;
              particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
          }
          animate();

          resolve();
        };
      });
    };

    loadImageAndStartAnimation();

    return () => {
      cancelAnimationFrame(animationFrameId);
      particlesArrayRef.current = []; 
    };
  }, []);

  function calculateBrightness(red, green, blue) {
    return Math.sqrt(
      red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114
    );
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "90%",
          transform: "translate(-105%, -45%)",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

export default Rain;

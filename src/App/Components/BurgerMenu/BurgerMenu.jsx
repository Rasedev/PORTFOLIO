

import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const BurgerMenu = ({ toggle, clicked, initialColor = 'white', toggledColor = ' #4db5ff', zIndex = 10 }) => {
  const divOneStyles = useSpring({
    top: toggle ? '12px' : '2px',
    transform: toggle ? 'rotate(405deg)' : 'rotate(0deg)',
    backgroundColor: toggle ? toggledColor : initialColor,
    config: { tension: 500, friction: 20 }, // Adjust tension for smoother animation
  });

  const divTwoStyles = useSpring({
    opacity: toggle ? 0 : 1,
    backgroundColor: toggle ? toggledColor : initialColor,
    config: { tension: 500, friction: 20 }, // Adjust tension for smoother animation
  });

  const divThreeStyles = useSpring({
    top: toggle ? '12px' : '22px',
    transform: toggle ? 'rotate(315deg)' : 'rotate(0deg)',
    backgroundColor: toggle ? toggledColor : initialColor,
    config: { tension: 500, friction: 20 }, // Adjust tension for smoother animation
  });

  return (
    <div onClick={clicked} className="relative w-8 h-8 flex flex-col justify-center items-center cursor-pointer" style={{ zIndex }}>
      <animated.div style={divOneStyles} className="absolute h-[0.15rem] w-full"></animated.div>
      <animated.div style={divTwoStyles} className="absolute h-[0.15rem] w-full top-[12px]"></animated.div>
      <animated.div style={divThreeStyles} className="absolute h-[0.15rem] w-full"></animated.div>
    </div>
  );
};

export default BurgerMenu;


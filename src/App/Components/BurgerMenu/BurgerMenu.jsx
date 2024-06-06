import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const BurgerMenu = ({ toggle, clicked }) => {
  const divOneStyles = useSpring({
    top: toggle ? '12px' : '0px',
    transform: toggle ? 'rotate(405deg)' : 'rotate(0deg)',
    config: { tension: 500, friction: 20 }, // Adjust tension for smoother animation
  });

  const divTwoStyles = useSpring({
    opacity: toggle ? 0 : 1,
    config: { tension: 500, friction: 20 }, // Adjust tension for smoother animation
  });

  const divThreeStyles = useSpring({
    top: toggle ? '12px' : '24px',
    transform: toggle ? 'rotate(315deg)' : 'rotate(0deg)',
    config: { tension: 500, friction: 20 }, // Adjust tension for smoother animation
  });

  return (
    <div onClick={clicked} className="relative w-8 h-8 flex flex-col justify-center items-center cursor-pointer">
      <animated.div style={divOneStyles} className="absolute bg-white h-1 w-full rounded"></animated.div>
      <animated.div style={divTwoStyles} className="absolute bg-white h-1 w-full rounded top-3"></animated.div>
      <animated.div style={divThreeStyles} className="absolute bg-white h-1 w-full rounded"></animated.div>
    </div>
  );
};

export default BurgerMenu;

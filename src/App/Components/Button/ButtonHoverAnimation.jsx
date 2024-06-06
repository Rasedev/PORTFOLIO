import React from 'react';
import './button.css';

const ButtonHoverAnimation = () => {
  return (
    <div>
     

      <div className="button-container-1">
        <span className="mas">MASK1</span>
        <button id='work' type="button" name="Hover">MASK1</button>
      </div>

      <div className="button-container-2">
        <span className="mas">MASK2</span>
        <button type="button" name="Hover">MASK2</button>
      </div>

      <div className="button-container-3">
        <span className="mas">MASK3</span>
        <button type="button" name="Hover">MASK3</button>
      </div>

    </div>
  );
};

export default ButtonHoverAnimation;

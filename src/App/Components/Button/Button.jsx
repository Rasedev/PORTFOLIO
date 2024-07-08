

import React from 'react';
import styles from './Button.module.css';

const Button = ({ title, onClick, className, style, width, height, type, href, ...btnProps }) => {
  return (
    <div 
      className={`${styles.button_F} ${className}`} 
      style={{ ...style, width, height }}>
      <span className={`${styles.contact_mas} font-Hat`}>{title}</span>
      {type === 'link' ? (
        <a href={href} target="_blank" rel="noopener noreferrer" download={href ? "resume.pdf" : undefined}>
          <button 
            type="button" name="Hover" {...btnProps}
            style={{ width: '100%', height: '100%' }}>
          </button>
        </a>
      ) : (
        <button 
          type="button" name="Hover" onClick={onClick} {...btnProps}
          style={{ width: '100%', height: '100%' }}>
        </button>
      )}
    </div>
  );
};

export default Button;





import React, { useEffect } from "react";
import './Console.css'; 


const ConsoleText = ({ words, id, colors, textColor, fontSize }) => {
  useEffect(() => {
    let colorArray = colors.length ? colors : ['#000'];
    let visible = true;
    let con = document.getElementById('console');
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    const target = document.getElementById(id);
    target.style.color = textColor || colorArray[0];
    target.style.fontSize = fontSize || 'inherit';

    const interval1 = setInterval(() => {
      if (letterCount === 0 && !waiting) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        setTimeout(() => {
          const usedColor = colorArray.shift();
          colorArray.push(usedColor);
          const usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.style.color = textColor || colorArray[0];
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && !waiting) {
        waiting = true;
        setTimeout(() => {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (!waiting) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);

    const interval2 = setInterval(() => {
      if (visible) {
        con.classList.add('hidden');
        visible = false;
      } else {
        con.classList.remove('hidden');
        visible = true;
      }
    }, 400);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [words, id, colors, textColor, fontSize]);

  return (
    <div className="console-container">
      <span id={id} className="live_u"></span>
      <div className="console-underscore" id="console">&#95;</div>
    </div>
  );
};

export default ConsoleText;

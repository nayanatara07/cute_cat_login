// components/Avatar.js
import React, { useEffect } from "react";
import { gsap, Expo } from "gsap";

const Avatar = ({ isTyping }) => {
  useEffect(() => {
    if (isTyping) {
      gsap.to(".pawL", { y: -70, x: 20, duration: 0.5, ease: Expo.easeOut });
      gsap.to(".pawR", { y: -70, x: -20, duration: 0.5, ease: Expo.easeOut });
    } else {
      gsap.to(".pawL", { y: 0, x: 0, duration: 0.5, ease: Expo.easeOut });
      gsap.to(".pawR", { y: 0, x: 0, duration: 0.5, ease: Expo.easeOut });
    }
  }, [isTyping]);

  return (
    <div className="svgContainer">
      <svg
        className="avatarSVG"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="100" fill="#a9ddf3" />
        <ellipse cx="100" cy="160" rx="50" ry="70" fill="#f5b882" />
        <circle cx="100" cy="90" r="50" fill="#ffe5b4" />
        <g className="ears">
          <path d="M65 40 L85 70 L75 75 Z" fill="#f5b882" />
          <path d="M135 40 L115 70 L125 75 Z" fill="#f5b882" />
          <path d="M70 45 L80 70 L75 75 Z" fill="#ffccb8" />
          <path d="M130 45 L120 70 L125 75 Z" fill="#ffccb8" />
        </g>
        <g className="eyes">
          <circle cx="80" cy="85" r="7" fill="#3A5E77" />
          <circle cx="120" cy="85" r="7" fill="#3A5E77" />
          <circle cx="78" cy="83" r="2" fill="#fff" />
          <circle cx="118" cy="83" r="2" fill="#fff" />
        </g>
        <path d="M95 100 Q100 110 105 100" fill="#ff8a80" />
        <path
          d="M95 105 Q100 115 105 105"
          fill="none"
          stroke="#3A5E77"
          strokeWidth="2"
        />
        <line x1="55" y1="90" x2="75" y2="90" stroke="#3A5E77" strokeWidth="2" />
        <line x1="55" y1="95" x2="75" y2="95" stroke="#3A5E77" strokeWidth="2" />
        <line x1="55" y1="100" x2="75" y2="100" stroke="#3A5E77" strokeWidth="2" />
        <line
          x1="125"
          y1="90"
          x2="145"
          y2="90"
          stroke="#3A5E77"
          strokeWidth="2"
        />
        <line
          x1="125"
          y1="95"
          x2="145"
          y2="95"
          stroke="#3A5E77"
          strokeWidth="2"
        />
        <line
          x1="125"
          y1="100"
          x2="145"
          y2="100"
          stroke="#3A5E77"
          strokeWidth="2"
        />
        <g className="paws">
          <circle className="pawL" cx="60" cy="150" r="25" fill="#f5b882" />
          <circle className="pawR" cx="140" cy="150" r="25" fill="#f5b882" />
        </g>
      </svg>
    </div>
  );
};

export default Avatar;

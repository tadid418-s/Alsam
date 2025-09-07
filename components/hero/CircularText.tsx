'use client';
import React from 'react';

interface CircularTextProps {
  text: string;
  radius: number;
  fontSize: string;
}

const CircularText: React.FC<CircularTextProps> = ({ text, radius, fontSize }) => {
  const characters = text.split('');
  const angle = 360 / characters.length;

  return (
    <div className="circular-text-wrapper">
      {characters.map((char, i) => (
        <span
          key={i}
          style={{
            height: `${radius}px`,
            transform: `translate(-50%, -100%) rotate(${angle * i}deg)`,
            fontSize: fontSize,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default CircularText;

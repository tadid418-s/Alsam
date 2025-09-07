'use client';
import React from 'react';

interface CircularTextProps {
  text: string;
  radius: number;
}

const CircularText: React.FC<CircularTextProps> = ({ text, radius }) => {
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
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default CircularText;

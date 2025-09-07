'use client';
import React from 'react';
import CircularText from './CircularText';
import './Badge.css';

const Badge = () => {
  return (
    <div className="badge-wrapper">
      <div className="badge-inner">
        <CircularText
          text="ALSAM · CELEBRATING 28 YEARS OF PRACTICE · "
          radius={100}
        />
        <div className="badge-center">
          <div className="badge-logo">A</div>
        </div>
      </div>
    </div>
  );
};

export default Badge;

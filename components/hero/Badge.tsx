'use client';
import React from 'react';
import { useBreakpointValue } from '@chakra-ui/react';
import CircularText from './CircularText';
import './Badge.css';

const Badge = () => {
  const badgeSize = useBreakpointValue({ base: 120, md: 150, lg: 180 });
  const logoFontSize = useBreakpointValue({ base: '40px', md: '60px', lg: '70px' });
  const textRadius = useBreakpointValue({ base: 50, md: 65, lg: 80 });
  const textFontSize = useBreakpointValue({ base: '10px', md: '11px', lg: '12px' });

  return (
    <div className="badge-wrapper">
      <div
        className="badge-inner"
        style={{
          width: `${badgeSize}px`,
          height: `${badgeSize}px`,
        }}
      >
        <CircularText
          text="ALSAM · CELEBRATING 28 YEARS OF PRACTICE · "
          radius={textRadius || 80}
          fontSize={textFontSize || '12px'}
        />
        <div className="badge-center">
          <div className="badge-logo" style={{ fontSize: logoFontSize }}>
            A
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badge;

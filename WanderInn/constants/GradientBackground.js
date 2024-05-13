import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const GradientBackground = ({ colors, start, end, locations, style, children, angle }) => {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={colors}
      style={style}
      locations={locations}
      start={start}
      end={end}
      angle={angle}
    >
      {children}
    </LinearGradient>

  );
};

export default GradientBackground;
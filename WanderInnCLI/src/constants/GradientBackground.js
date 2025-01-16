import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {platform} from './constants';

const GradientBackground = ({
  colors,
  start,
  end,
  locations,
  style,
  children,
  angle,
}) => {
  return (
    <LinearGradient
      colors={colors}
      style={style}
      locations={platform == 'android' ? locations : undefined}
      start={start}
      end={end}
      angle={angle}>
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;

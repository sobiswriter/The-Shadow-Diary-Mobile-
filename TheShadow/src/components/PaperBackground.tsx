import React from 'react';
import { Canvas, Rect, Turbulence, Group } from '@shopify/react-native-skia';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const PaperBackground = () => {
  return (
    <Canvas style={{ flex: 1, position: 'absolute', width, height }}>
      {/* Background Color */}
      <Rect x={0} y={0} width={width} height={height} color="#F5F5DC" />
      
      {/* The Noise Texture - Wrapped in a Group to control Opacity */}
      <Group opacity={0.1}>
        <Turbulence freqX={0.9} freqY={0.9} octaves={4} seed={2} />
      </Group>
    </Canvas>
  );
};
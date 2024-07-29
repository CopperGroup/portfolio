import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import * as THREE from 'three';

const CameraRig = ({ children }: { children: React.ReactNode }) => {
  const group = React.useRef<THREE.Group>(null!); 

  const calculateCoefficient = (screenHeight: number): number => {
    const referenceHeight = 935;
    if (screenHeight >= referenceHeight) return 0;
    return (referenceHeight - screenHeight) * 0.0015; // Adjust this multiplier to control the movement
  };

  useFrame((state, delta) => {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    const coefficient = calculateCoefficient(screenHeight)

    console.log(screenHeight, coefficient);

    const targetPosition: [number, number, number] = [screenWidth <= 1328 ? 0 : -1 - coefficient, screenWidth > 1328 ? 0 : 0.5,  screenWidth > 1328 
      ? 17 
      : screenWidth < 630 
      ? screenWidth < 460 
        ? screenWidth < 390 
          ? 45 
          : 40 
        : 35
      : 25];


    easing.damp3(state.camera.position, targetPosition, 0.25, delta);
    easing.dampE(group.current.rotation, [0.8, -1, 1], 1, delta);
    
    easing.dampE(
       group.current.rotation,
      [state.pointer.y / 8, state.pointer.x / 2, 0],
      1,
      delta
    );
  });

  return (
    <group ref={group}>{children}</group>
  );
}

export default CameraRig;
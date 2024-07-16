import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import * as THREE from 'three';

const CameraRig2 = ({ children }: { children: React.ReactNode }) => {
  const group = React.useRef<THREE.Group>(null!); 
  
  useFrame((state, delta) => {
  
    const targetPosition: [number, number, number] = [-0.2, 0.5, 17];
  
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

export default CameraRig2;
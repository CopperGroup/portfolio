"use client";

import React, {useRef} from 'react'
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, AccumulativeShadowsProps, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();


  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scae={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0.2, 10, -0.24]}
    >
      <RandomizedLight 
        amount={4}
        radius={9}
        intensity={1}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight 
        amount={4}
        radius={5}
        intensity={0.5}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop
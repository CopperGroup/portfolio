"use client";

import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

useGLTF.preload("/3D/Copper-ingot-polished.glb");

const CopperIngotPolished = () => {
    const modelRef = useRef<THREE.Group>(null);

    const { nodes } = useGLTF("/3D/Copper-ingot-polished.glb");

    console.log(nodes);
  
    return (
      <group ref={modelRef} rotation={[0.2, 0, 0]}>
        <mesh {...nodes.pCube1_lambert1_0}  position={[0, -0.5, 0]}></mesh>
      </group>
    );
}

export default CopperIngotPolished;

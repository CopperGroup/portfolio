"use client";

import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';


const CopperIngot = () => {
  const modelRef = useRef<THREE.Group>(null);
  
  const { nodes } = useGLTF("/3D/Copper-ingot.glb");
  
  return (
    <group ref={modelRef}>
        <mesh {...nodes.mesh_0}></mesh>
      </group>
    );
  }
  
export default CopperIngot;

useGLTF.preload("/3D/Copper-ingot.glb");
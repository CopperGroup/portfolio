"use client";

import { Center, Environment, Preload, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CameraRig from "@/components/3D/CameraRig";
import Backdrop from "@/components/3D/Backdrop";
import CopperIngot from "@/components/3D/CopperIngot";
import CopperIngotPolished from "../3D/CopperIngotPolished";
import { Suspense } from "react";

const Scene1 = () => {

  return (
    <Canvas
     shadows
     camera={{position: [0, 0, 0], fov: 10}}
     gl={{preserveDrawingBuffer: true}}
     className='w-full max-w-full h-svh transition-all ease-in z-20'
    >
      <ambientLight intensity={0.5}/>
      <Environment preset='city'/>
      <CameraRig>
          <Backdrop/>
          <Center>
            <Suspense fallback={<Text>Loading</Text>}>
              <CopperIngot/>
            </Suspense>
          </Center>
      </CameraRig>
      <Preload all/>
    </Canvas>
  )
}

export default Scene1;
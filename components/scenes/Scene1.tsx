"use client";

import { Center, Environment, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CameraRig from "@/components/3D/CameraRig";
import Backdrop from "@/components/3D/Backdrop";
import CopperIngot from "@/components/3D/CopperIngot";
import CopperIngotPolished from "../3D/CopperIngotPolished";

const Scene1 = () => {
  return (
    <Canvas
     shadows
     camera={{position: [0, 0, 0], fov: 10}}
     gl={{preserveDrawingBuffer: true}}
     className='absolute w-full max-w-full h-svh transition-all ease-in z-20 border border-red-500'
    >
        <ambientLight intensity={0.5}/>
        <Environment preset='city'/>
        <CameraRig>
            <Backdrop/>
            <Center>
                <CopperIngot/>
            </Center>
        </CameraRig>
        <Preload all/>
    </Canvas>
  )
}

export default Scene1;
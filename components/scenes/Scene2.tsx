"use client";

import { Center, Environment, OrbitControls, Preload, Sky, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CameraRig from "@/components/3D/CameraRig";
import Backdrop from "@/components/3D/Backdrop";
import CopperIngot from "@/components/3D/CopperIngot";
import CopperIngotPolished from "../3D/CopperIngotPolished";
import CameraRig2 from "../3D/CameraRig2";

const Scene1 = () => {
  return (
    <Canvas
     shadows
     camera={{position: [0, 0, 1], fov: 100}}
     gl={{preserveDrawingBuffer: true}}
     className='absolute w-full max-w-full h-full transition-all ease-in z-20 border border-red-500'
    >
        <ambientLight intensity={0.5}/>
        <Environment preset='city'/>
        {/* <OrbitControls/> */}
        <CameraRig2>
          <Center>
              <CopperIngotPolished/>
              <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          </Center>
        </CameraRig2>
        <Preload all/>
    </Canvas>
  )
}

export default Scene1;
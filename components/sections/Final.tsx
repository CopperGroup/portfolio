import { Center, Environment, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactLenis } from 'lenis/react';
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import CameraRig from "@/components/3D/CameraRig";
import Backdrop from "@/components/3D/Backdrop";
import CopperIngot from "@/components/3D/CopperIngot";
import { useRef, useState } from "react";
import CopperIngotPolished from "@/components/3D/CopperIngotPolished";
import dynamic from "next/dynamic";

const Scene2 = dynamic(() => import("@/components/scenes/Scene2"), { ssr: false })

const Final = () => {
  return (
    <section className="w-full h-screen flex flex-1 justify-center items-center text-white">
        <motion.div 
         style={{
           //   y: y2
          }}
          className="w-full h-full flex items-center justify-around inset-0 z-20"
          >
            <Scene2/>
        </motion.div>
        <motion.div
           style={{
           }} 
           className="absolute flex justify-center size-[32rem] rounded-full gradient opacity-100 mt-16 mr-1 p-9"
          >
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
          <path id="circlePath" fill="none" stroke-width="1" d="
            M 25, 25
            m -20, 0
            a 20,20 0 1,1 40,0
            a 20,20 0 1,1 -40,0
          " />
          <text id="text" fontSize="11">
            <textPath id="textPath" href="#circlePath" fill="#ffffff">Let&apos;s make it PERFECT!</textPath>
          </text>
        </svg>
        </motion.div>
    </section>
  )
}

export default Final;
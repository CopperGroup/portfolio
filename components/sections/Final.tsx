import { Center, Environment, Preload, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactLenis } from 'lenis/react';
import {
  motion,
  useInView,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import CameraRig from "@/components/3D/CameraRig";
import Backdrop from "@/components/3D/Backdrop";
import CopperIngot from "@/components/3D/CopperIngot";
import { useRef, useState } from "react";
import CopperIngotPolished from "@/components/3D/CopperIngotPolished";
import dynamic from "next/dynamic";
import Image from "next/image";
import Counter from "../animated/Counter";
import Link from "next/link";

const Scene2 = dynamic(() => import("@/components/scenes/Scene2"), { ssr: false })

const Final = () => {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, { once: true, margin: "-100px" });

  const backgroundImage = useMotionTemplate`radial-gradient(160% 160% at 50% 0%, #000000 50%, #D47800)`;

  return (
    <motion.section
     style={{
      backgroundImage
     }} 
     className="w-full h-screen flex flex-1 flex-col justify-center items-center text-white"
    >
      <Canvas className="absolute z-20 pointer-events-none">
        <CameraRig>
          <Stars radius={50} count={2500} factor={4} fade speed={2}/>
        </CameraRig>
      </Canvas>
      <div className="absolute w-full flex flex-col justify-center items-center">
        <Counter from={0} to={94} duration={3}/>
        <motion.div
        ref={ref}
        initial="initial"
        whileHover="hovered"
        className="block overflow-hidden whitespace-nowrap" 
      >
          <motion.p
           animate={{
             y: inView ? 0 : 100
           }}
           transition={{
             delay: 2.3
           }}
           className="text-white/90"
          >
            Of customers decide to trust a business based on its <span className="italic">appearance</span>. That&apos;s where great <span className="italic">design</span> and <span className="italic">brand</span> come in hand!
          </motion.p>
        </motion.div>
        <motion.div
         animate={{
          opacity: inView ? 1 : 0,
          display: inView ? "flex" : "none"
         }} 
         transition={{
          delay: 2.3
         }}
         className="mt-10"
        >
          <Link href="/contact-us" className="relative z-30 text-body-medium gradient px-16 py-4 rounded-[2rem]">Contact us</Link>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Final;
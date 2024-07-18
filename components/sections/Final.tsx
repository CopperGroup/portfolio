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
import Image from "next/image";

const Scene2 = dynamic(() => import("@/components/scenes/Scene2"), { ssr: false })

const Final = () => {
  return (
    <section className="w-full h-screen flex flex-1 flex-col justify-center items-center text-white">
    </section>
  )
}

export default Final;
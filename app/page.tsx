"use client";

import { ReactLenis } from 'lenis/react';
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Archivo_Black } from "next/font/google";
import Projects from "@/components/sections/Projects";
import Final from "@/components/sections/Final";
import dynamic from 'next/dynamic';

const Scene1 = dynamic(() => import("@/components/scenes/Scene1"), { ssr: false })

const archivo = Archivo_Black({ 
  weight: "400", 
  subsets: ["latin"] 
});

export default function Home() {

  const { scrollYProgress, scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -150]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.2])

  return (
    <ReactLenis root>
      <motion.section
      //  style={{
      //    backgroundImage,
      //  }} 
       className="w-full px-12 h-screen">
        <motion.div
         style={{
           y: y1
          }}
          className={`${archivo.className} w-full h-full relative z-10`}
          >
          <h1 className="w-fit text-[172px] gradient-text leading-none pt-52">COPPER</h1>
          <h1 className="w-fit text-[172px] gradient-text leading-none">GROUP</h1>
        </motion.div>
        <motion.div 
         style={{
          y: y2
         }}
         className="absolute flex items-center justify-around inset-0 z-20"
        >
          <Scene1/>
          <motion.div
           style={{
            scale: scale
           }} 
           className="absolute z-10 w-96 h-96 rounded-full blury-gradient opacity-70 ml-[38rem] mt-10"
          >
          </motion.div>

        </motion.div>
      </motion.section>
      <Projects/>
      <Final/>
    </ReactLenis>
  );
}

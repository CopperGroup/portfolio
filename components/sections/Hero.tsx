"use client";

import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import dynamic from "next/dynamic";
import { Archivo_Black } from "next/font/google";

const Scene1 = dynamic(() => import("@/components/scenes/Scene1"), { ssr: false })

const archivo = Archivo_Black({ 
  weight: "400", 
  subsets: ["latin"] 
});

const Hero = () => {
    const { scrollYProgress, scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 300], [0, -150]);
    const y2 = useTransform(scrollY, [0, 300], [0, 50]);
    const scale = useTransform(scrollY, [0, 300], [1, 1.2]);
    
    return (
        <motion.section
        //  style={{
        //    backgroundImage,
        //  }} 
         className="w-full px-12 h-screen max-[1328px]:h-[125vh] flex flex-col border border-red-500">
          <motion.div
           style={{
             y: y1
            }}
            className={`${archivo.className} w-full h-full relative z-10`}
            >
            <h1 className="w-fit text-[11rem] gradient-text leading-none pt-52 max-[1328px]:w-full max-[1328px]:text-center max-[900px]:text-[8rem] border">COPPER</h1>
            <h1 className="w-fit text-[172px] gradient-text leading-none max-[1328px]:w-full max-[1328px]:text-center max-[900px]:text-[8rem] border">GROUP</h1>
          </motion.div>
          <motion.div 
           style={{
            y: y2
           }}
           className="absolute flex items-center justify-around inset-0 z-20 max-[1440px]:ml-32 border"
          >
            <Scene1/>
            <motion.div
             style={{
              scale: scale
             }} 
             className="absolute z-10 w-96 h-96 rounded-full blury-gradient opacity-70 ml-[38rem] mt-10 max-[1328px]:ml-0 max-[1328px]:mt-[52rem]"
            >
            </motion.div>
  
          </motion.div>
        </motion.section>
    )
}

export default Hero;
"use client";

import { SiNextdotjs, SiReact, SiMongodb, SiThreedotjs, SiJavascript, SiTailwindcss, SiCodemagic } from "react-icons/si";
import { FaStarOfLife } from "react-icons/fa6";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const Skils = () => {
  const [ position, setPosition ] = useState({ x: 0, y: 0 });
  const cardsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // const handleMouseMove = (e: any) => {
  //   const { clientX, clientY } = e;
  //   const { width, height, left, top } = cardsRef.current.getBoundingClientRect();
  //   const xOffset = clientX - (left + width / 2);
  //   const yOffset = clientY - (top + height / 2);

  //   setPosition({ x: xOffset, y: yOffset })
  // }

  // const handleMouseLeave = () => {
  //   setPosition({ x: 0, y: 0 });
  // }

  const headerInView = useInView(headerRef, { margin: "100px 0px -100px 0px" });

  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start end", "center center"]
  });

  const leftOffset = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rightOffset = useTransform(scrollYProgress, [0, 1], [500, 0]);


  return (
    <section className="w-full h-[130vh] bg-white flex flex-1 flex-col justify-center items-center px-24 py-[5.7rem] max-[1600px]:h-[145vh] max-[1440px]:h-fit max-[990px]:px-20 max-[820px]:px-16 max-[750px]:px-10 max-[670px]:px-7">
      <motion.div 
       ref={headerRef}
       className="w-full h-fit flex gap-2 justify-center items-center mb-20"
       animate={{
        opacity: headerInView ? 1 : 0,
        y: headerInView ? 0 : 50
       }}
      >
        <FaStarOfLife className="size-20 gradient text-white rounded-full p-3 max-[920px]:size-16 max-[645px]:size-10 max-[645px]:p-2 max-[485px]:hidden"/>
        <h2 className="relative text-[6rem] font-bold text-center max-[1040px]:text-[5rem] max-[925px]:text-[4rem] max-[645px]:text-[3rem] max-[390px]:text-[2.5rem] max-[335px]:text-[2.35rem]">
          Our techstack
        </h2>
        <FaStarOfLife className="size-20 gradient text-white rounded-full p-3 max-[920px]:size-16 max-[645px]:size-10 max-[645px]:p-2 max-[485px]:hidden"/>
      </motion.div>
      <div className="w-full h-full flex flex-col gap-7">
        <div className="w-full h-3/4 flex flex-1 gap-7 max-[780px]:flex-col">
          <motion.div
           ref={cardsRef}
           className="w-7/12 h-full px-5 border rounded-2xl shadow-xl max-[1440px]:pt-[7%] max-[1440px]:pb-[3%] max-[780px]:w-full"
          //  onMouseMove={(e) => handleMouseMove(e)}
          //  onMouseLeave={() => handleMouseLeave()}
           style={{
            x: leftOffset
           }}
           whileHover={{
            scale: 1.01,
           }}
           transition={{
            duration: 0.5
           }}
          >
            <motion.div 
             className="relative w-full h-5/6 flex justify-center items-center max-[1440px]:mb-[5%]" 
            >
              <SiNextdotjs className="size-56 rounded-full border shadow-xl"/> 
            </motion.div>
            <div className="w-full h-1/6 text-black border">
              <h4 className="text-heading4-medium">Next.js</h4>
              <p className="text-base-regular text-gray-500/90 max-[400px]:hidden">One of the best frameworks for creating cutting-edge web-applications.</p>
              <p className="text-base-regular text-gray-500/90 min-[400px]:hidden">Framework for cutting-edge web-applications.</p>
            </div>
          </motion.div>
          <motion.div 
           className="w-5/12 h-full px-5 border rounded-2xl shadow-xl max-[1440px]:pt-[7%] max-[1440px]:pb-[3%] max-[780px]:w-full"
           whileHover={{
            scale: 1.01
           }}
           style={{
            x: rightOffset
           }}
           transition={{
            type: "spring",
            duration: 0.5
           }}
          >
            <div className="w-full h-5/6 flex justify-center items-center max-[1440px]:mb-[5%] max-[1213px]:mb-[12%] max-[1069px]:mb-[5%]">
              <SiReact className="size-52 rounded-full border text-black shadow-xl p-5"/> 
            </div>
            <div className="w-full h-1/6 text-black">
              <h4 className="text-heading4-medium">React</h4>
              <p className="text-base-regular text-gray-500/90 max-[400px]:hidden">The essential building block for achieving speed and quality on your website.</p>
              <p className="text-base-regular text-gray-500/90 min-[400px]:hidden">The speed, quality, reliability for your website.</p>
            </div>
          </motion.div>
        </div>
        <div className="w-full h-1/4 flex gap-7 max-[1440px]:flex-col">
          <motion.div 
           className="w-1/2 h-full flex gap-7 max-[1440px]:w-full max-[520px]:flex-col"
           style={{
            x: leftOffset
           }}
          >
            <motion.div 
             className="w-1/2 h-full px-5 border rounded-2xl shadow-xl max-[1440px]:pt-[3%] max-[1440px]:pb-[1%] max-[520px]:w-full max-[520px]:pb-[3%]"
             whileHover={{
              scale: 1.01
             }}
             transition={{
              type: "spring",
              duration: 0.5
             }}
            >
                <div className="w-full h-2/3 flex justify-center items-center max-[1440px]:mb-[5%]">
                  <SiMongodb className="size-28 rounded-full border text-black shadow-xl p-5"/> 
                </div>
                <div className="w-full h-1/3 text-black">
                  <h4 className="text-body-medium">MongoDB</h4>
                  <p className="text-small-regular text-gray-500/90">The advanced high-performance database.</p>
                </div>
            </motion.div>
            <motion.div 
             className="w-1/2 h-full px-5 border rounded-2xl shadow-xl max-[1440px]:pt-[3%] max-[1440px]:pb-[1%] max-[520px]:w-full max-[520px]:pb-[3%]"
             whileHover={{
              scale: 1.01
             }}
             transition={{
              type: "spring",
              duration: 0.5
             }}
            >
              <div className="w-full h-2/3 flex justify-center items-center max-[1440px]:mb-[5%]">
                <SiThreedotjs className="size-28 rounded-full border text-black shadow-xl p-5 pl-8 pt-6 overflow-visible"/> 
              </div>
              <div className="w-full h-1/3 text-black">
                <h4 className="text-body-medium">Three.js</h4>
                <p className="text-small-regular text-gray-500/90">Enchance your website with beautiful 3D.</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
           style={{
            x: rightOffset
           }} 
           className="w-1/2 h-full flex gap-7 max-[1440px]:w-full max-[520px]:flex-col"
          >
            <motion.div 
             className="w-1/3 h-full px-5 border rounded-2xl shadow-xl max-[1440px]:pt-[3%] max-[1440px]:pb-[1%] max-[520px]:w-full max-[520px]:pb-[3%]"
             whileHover={{
              scale: 1.01
             }}
             transition={{
              type: "spring",
              duration: 0.5
             }}
            >
              <div className="w-full h-2/3 flex justify-center items-center max-[1440px]:mb-[5%]">
                <div className="w-fit h-fit rounded-full shadow-xl p-5">
                  <SiJavascript className="size-12 border text-black"/> 
                </div>
              </div>
              <div className="w-full h-1/3 text-black">
                <h4 className="text-body-medium">Javascript</h4>
                <p className="text-small-regular text-gray-500/90 max-[780px]:hidden">Programming language.</p>
                <p className="text-small-regular text-gray-500/90 min-[520px]:hidden">Our programming language.</p>
              </div>
            </motion.div>
            <motion.div 
             className="w-1/3 h-full px-5 border rounded-2xl shadow-xl max-[1440px]:pt-[3%] max-[1440px]:pb-[1%] max-[520px]:w-full max-[520px]:pb-[3%]"
             whileHover={{
              scale: 1.01
             }}
             transition={{
              type: "spring",
              duration: 0.5
             }}
            >
              <div className="w-full h-2/3 flex justify-center items-center max-[1440px]:mb-[5%]">
                <SiTailwindcss className="size-[5.5rem] rounded-full border text-black shadow-xl p-5"/> 
              </div>
              <div className="w-full h-1/3 text-black">
                <h4 className="text-body-medium">Tailwindcss</h4>
                <p className="text-small-regular text-gray-500/90 max-[780px]:hidden">Style.</p>
                <p className="text-small-regular text-gray-500/90 min-[520px]:hidden">Style efficiently and faster.</p>
              </div>
            </motion.div>
            <motion.div 
             className="w-1/3 h-full px-5 border rounded-2xl shadow-xl max-[1440px]:pt-[3%] max-[1440px]:pb-[1%] max-[520px]:w-full max-[520px]:pb-[3%]"
             whileHover={{
              scale: 1.01
             }}
             transition={{
              type: "spring",
              duration: 0.5
             }}
            >
              <div className="w-full h-2/3 flex justify-center items-center max-[1440px]:mb-[5%]">
                <SiCodemagic className="size-[5.5rem] rounded-full border text-black shadow-xl p-5"/> 
              </div>
              <div className="w-full h-1/3 text-black">
                <h4 className="text-body-medium">UI/UX</h4>
                <p className="text-small-regular text-gray-500/90 max-[780px]:hidden">Yours modern design.</p>
                <p className="text-small-regular text-gray-500/90 min-[520px]:hidden">Best modern desing practices</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skils;
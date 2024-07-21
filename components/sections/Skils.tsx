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
    <section className="w-full h-[130vh] bg-white flex flex-1 flex-col justify-center items-center px-24 py-[5.7rem]">
      <motion.div 
       ref={headerRef}
       className="w-full h-fit flex gap-2 justify-center items-center mb-20"
       animate={{
        opacity: headerInView ? 1 : 0,
        y: headerInView ? 0 : 50
       }}
      >
        <FaStarOfLife className="size-20 gradient text-white rounded-full p-3"/>
        <h2 className="relative text-[96px] font-bold text-center">
          Our techstack
        </h2>
        <FaStarOfLife className="size-20 gradient text-white rounded-full p-3"/>
      </motion.div>
      <div className="w-full h-full flex flex-col gap-7">
        <div className="w-full h-3/4 flex flex-1 gap-7">
          <motion.div
           ref={cardsRef}
           className="w-7/12 h-full px-5 border rounded-2xl shadow-xl"
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
             className="relative w-full h-5/6 flex justify-center items-center" 
            >
              <SiNextdotjs className="size-56 rounded-full border shadow-xl"/> 
            </motion.div>
            <div className="w-full h-1/6 text-black">
              <h4 className="text-heading4-medium">Next.js</h4>
              <p className="text-base-regular text-gray-500/90">One of the best frameworks for creating cutting-edge web-aplications.</p>
            </div>
          </motion.div>
          <motion.div 
           className="w-5/12 h-full px-5 border rounded-2xl shadow-xl"
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
            <div className="w-full h-5/6 flex justify-center items-center">
              <SiReact className="size-52 rounded-full border text-black shadow-xl p-5"/> 
            </div>
            <div className="w-full h-1/6 text-black">
              <h4 className="text-heading4-medium">React</h4>
              <p className="text-base-regular text-gray-500/90">The essential building block for achieving speed and quality on your website.</p>
            </div>
          </motion.div>
        </div>
        <div className="w-full h-1/4 flex gap-7">
          <motion.div 
           className="w-1/2 h-full flex gap-7"
           style={{
            x: leftOffset
           }}
          >
            <motion.div 
             className="w-1/2 h-full px-5 border rounded-2xl shadow-xl"
             whileHover={{
              scale: 1.01
             }}
             transition={{
              type: "spring",
              duration: 0.5
             }}
            >
                <div className="w-full h-2/3 flex justify-center items-center">
                  <SiMongodb className="size-28 rounded-full border text-black shadow-xl p-5"/> 
                </div>
                <div className="w-full h-1/3 text-black">
                  <h4 className="text-body-medium">MongoDB</h4>
                  <p className="text-small-regular text-gray-500/90">The advanced high-performance database.</p>
                </div>
            </motion.div>
            <motion.div 
             className="w-1/2 h-full px-5 border rounded-2xl shadow-xl"
             whileHover={{
              scale: 1.01
             }}
             transition={{
              type: "spring",
              duration: 0.5
             }}
            >
              <div className="w-full h-2/3 flex justify-center items-center">
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
           className="w-1/2 h-full flex gap-7"
          >
            <motion.div 
             className="w-1/3 h-full px-5 border rounded-2xl shadow-xl"
             whileHover={{
              scale: 1.01
             }}
             transition={{
              type: "spring",
              duration: 0.5
             }}
            >
              <div className="w-full h-2/3 flex justify-center items-center">
                <div className="w-fit h-fit rounded-full shadow-xl p-5">
                  <SiJavascript className="size-12 border text-black"/> 
                </div>
              </div>
              <div className="w-full h-1/3 text-black">
                <h4 className="text-body-medium">Javascript</h4>
                <p className="text-small-regular text-gray-500/90">Our pragramming language.</p>
              </div>
            </motion.div>
            <motion.div 
             className="w-1/3 h-full px-5 border rounded-2xl shadow-xl"
             whileHover={{
              scale: 1.01
             }}
             transition={{
              type: "spring",
              duration: 0.5
             }}
            >
              <div className="w-full h-2/3 flex justify-center items-center">
                <SiTailwindcss className="size-[5.5rem] rounded-full border text-black shadow-xl p-5"/> 
              </div>
              <div className="w-full h-1/3 text-black">
                <h4 className="text-body-medium">Tailwindcss</h4>
                <p className="text-small-regular text-gray-500/90">Style faster and efficientely.</p>
              </div>
            </motion.div>
            <motion.div 
             className="w-1/3 h-full px-5 border rounded-2xl shadow-xl"
             whileHover={{
              scale: 1.01
             }}
             transition={{
              type: "spring",
              duration: 0.5
             }}
            >
              <div className="w-full h-2/3 flex justify-center items-center">
                <SiCodemagic className="size-[5.5rem] rounded-full border text-black shadow-xl p-5"/> 
              </div>
              <div className="w-full h-1/3 text-black">
                <h4 className="text-body-medium">UI/UX</h4>
                <p className="text-small-regular text-gray-500/90">Get yours modern design.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skils;
"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Specialization = () => {
    const sliderContainer = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sliderContainer,
        offset: ['start end', "end start"]
    })

    return (
        <section className="w-full h-screen flex flex-1 flex-col justify-center items-center text-white">
            <div ref={sliderContainer}>
                <Slider left="0%" progress={scrollYProgress} direction="left"/>
                <Slider left="-15%" progress={scrollYProgress} direction="right"/>
                <Slider left="-5%" progress={scrollYProgress} direction="left"/>   
            </div>
        </section>
    )
}

export default Specialization;

function Slider({ left, progress, direction }: { left: string, progress: MotionValue, direction: string }) {

  const movementDirection = direction === "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-250 * movementDirection, 250 * movementDirection]);
  return (
    <motion.div
      style={{
        left,
        x
      }} 
      className="relative flex whitespace-nowrap"
    >
      <Phrase/>
      <Phrase/>
      <Phrase/>
    </motion.div>
  )
  }
  
  function Phrase() {
    return (
      <div className={'px-5 flex gap-5 items-center'}>
          <p className='text-[7.5vw]'>Full-stack Developers</p>
          <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden gradient">
          
          </span>
      </div>
    )
  }
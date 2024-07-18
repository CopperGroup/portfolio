"use client";

import { animate, motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ from, to, duration }: { from: number, to: number, duration: number }) => {
    const ref = useRef<HTMLHeadingElement>(null);
    const motionValue = useMotionValue(from);
    const springValue = useSpring(motionValue, { damping: 100, stiffness: 100 })
    
    const inView = useInView(ref, { once: true, margin: "-100px" });
    
    useEffect(() => {
        if(inView) {
            motionValue.set(to);
        }
    }, [inView, from, to, duration, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-Us").format(latest.toFixed(0))
            }
        })
    }, [springValue])

    return (
        <div className="flex gap-2">
            <motion.h2
             ref={ref} 
             className="relative text-[96px] font-bold text-center text-white"
            >
            </motion.h2>
            <h2 className="relative text-[96px] font-bold text-center text-white">%</h2>
        </div>
    )
}

export default Counter;
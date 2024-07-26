"use client";

import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";

interface Card {
    name: string,
    image: string,
    description: string
}

const Slider = ({ cards }: { cards: Card[] }) => {
    const [ imageIndex, setImageIndex ] = useState(0);
    const [ dragging, setDragging ] = useState(false); 

    const dragX = useMotionValue(0);

    const onDragStart = () => {
        setDragging(true);
    }

    const onDragEnd = () => {
        setDragging(false);

        const x = dragX.get();

        if(x <= -50 && imageIndex < cards.length - 1) {
            setImageIndex(prev => prev + 1)
        } else if(x >= 50 && imageIndex >= 0) {
            setImageIndex(prev => prev - 1)
        }
    }
    return (
        <div className="relative overflow-hidden py-8">
            <motion.div
                style={{
                    x: dragX
                }} 
                drag="x"
                dragConstraints={{
                    left: 0,
                    right: 0
                }}
                animate={{
                    translateX: `-${imageIndex * 100}%`
                }}
                transition={{
                    type: "spring",
                    damping: 15
                }}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                className="flex items-center cursor-grab active:cursor-grabbing"
            >
                {cards.map((card, index) => {
                    return(
                        <article key={index} className="w-screen aspect-video shrink-0 pl-[7%]">
                            <div
                             style={{
                              backgroundImage: `url(${card.image})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center"
                             }}
                             className="aspect-video w-11/12 shrink-0 rounded-xl bg-neutral-800 object-cover shadow-xl"
                            ></div>
                            <p className="text-body-semibold text-center mt-2 pr-[7%]">{card.name}</p>
                        </article>
                        ) 
                })}
            </motion.div>
        </div>
    )
}

export default Slider;
"use client";

import {
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";

import { projects } from "@/constants";
import ProjectCard from "../cards/ProjectCard";
import { useEffect, useRef } from "react";

interface Project {
  name: string;
  image: string;
  description: string
}
const Projects = () => {
  const headerRef = useRef(null);
  const rowsRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true });

  const { scrollYProgress, scrollY } = useScroll({ target: rowsRef, offset: ["center end", "start start"]});

  const x1 = useTransform(scrollYProgress, [0, 1], [-300, 0])
  const x2 = useTransform(scrollYProgress, [0, 1], [300, 0])
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  })

  return (
    <motion.section
       className="w-full px-12 h-fit bg-white">
      <div className="w-full h-full flex flex-col gap-20 items-center py-20">
        <motion.h2 
         ref={headerRef}
         style={{
          opacity: headerInView ? 1 : 0,
          y: headerInView ? 0 : 50,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
         }}
         className="text-[96px] font-bold text-center"
        >What we&apos;ve created
        </motion.h2>
        <motion.div
         style={{
         }} 
         className="w-[96rem] flex flex-col gap-7 justify-center items-center" 
         ref={rowsRef}
        >
          <motion.div
           style={{
            x: x1,
           }} 
           className="w-11/12 h-fit flex gap-10 border mr-52 px-8 py-5">
            {projects[0].map((project: Project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                image={project.image}
                description={project.description}
              />
            ))}
          </motion.div>
           
          <motion.div
           style={{
            x: x2,
           }} 
           className="w-11/12 h-fit flex gap-10 border ml-52 px-8 py-5">
            {projects[1].map((project: Project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                image={project.image}
                description={project.description}
              />
            ))}
          </motion.div>
           
          <motion.div
           style={{
            x: x1
           }} 
           className="w-11/12 h-fit flex gap-10 border mr-52 px-8 py-5">
            {projects[0].map((project: Project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                image={project.image}
                description={project.description}
              />
            ))}
          </motion.div>
           
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Projects;
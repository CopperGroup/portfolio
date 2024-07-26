"use client";

import {
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";

import { cards, projects } from "@/constants";
import ProjectCard from "../cards/ProjectCard";
import { useEffect, useRef } from "react";
import Slider from "../shared/Slider";

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
       className="w-full px-12 h-fit bg-white max-[900px]:px-0">
      <div className="w-full h-full flex flex-col gap-20 items-center py-20 max-[900px]:gap-0">
        <motion.h2 
         ref={headerRef}
         style={{
          opacity: headerInView ? 1 : 0,
          y: headerInView ? 0 : 50,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
         }}
         className="h-fit text-[6rem] font-bold text-center max-[1030px]:text-[5rem] max-[900px]:w-full max-[900px]:px-12 max-[875px]:text-[4rem] max-[460px]:px-5 max-[405px]:text-[3.5rem] max-[360px]:text-[3rem]"
        >What we&apos;ve created
        </motion.h2>
        <motion.div
         style={{
         }} 
         className="w-[96rem] flex flex-col gap-7 justify-center items-center max-[900px]:hidden" 
         ref={rowsRef}
        >
          <motion.div
           style={{
            x: x1,
           }} 
           className="w-11/12 h-fit flex gap-10 border mr-52 px-8 py-5 max-[1600px]:w-3/4 max-[1440px]:mr-44 max-[1350px]:w-[70%] max-[1350px]:mr-32 max-[1200px]:mr-0 max-[1030px]:w-3/5">
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
           className="w-11/12 h-fit flex gap-10 border ml-52 px-8 py-5 max-[1600px]:w-3/4 max-[1440px]:ml-44 max-[1350px]:w-[70%] max-[1350px]:ml-32 max-[1200px]:ml-0 max-[1030px]:w-3/5">
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
           className="w-11/12 h-fit flex gap-10 border mr-52 px-8 py-5 max-[1600px]:w-3/4 max-[1440px]:mr-44 max-[1350px]:w-[70%] max-[1350px]:mr-32 max-[1200px]:mr-0 max-[1030px]:w-3/5">
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
      <div>
        <Slider cards={cards}/>
      </div>
    </motion.section>
  )
}

export default Projects;
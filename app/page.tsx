"use client";

import { ReactLenis } from 'lenis/react';
import { Archivo_Black } from "next/font/google";
import Projects from "@/components/sections/Projects";
import Final from "@/components/sections/Final";
import dynamic from 'next/dynamic';
import Specialization from '@/components/sections/Specialization';
import Skils from '@/components/sections/Skils';
import Hero from '@/components/sections/Hero';

export default function Home() {

  return (
    <ReactLenis root>
      <Hero/>
      <Projects/>
      <Specialization/>
      <Skils/>
      <Final/>

    </ReactLenis>
  );
}

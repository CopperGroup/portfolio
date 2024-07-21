"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { Archivo_Black } from "next/font/google";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod";
import { contactValidation } from "@/lib/validations/contact";
import { useRouter } from "next/navigation";

const archivo = Archivo_Black({ 
    weight: "400", 
    subsets: ["latin"] 
  });

const ContactForm = () => {
    const [ page, setPage ] = useState(0);
    const [ background, setBackground ] = useState({ startBackground: "", endBackground: "" });

    const router = useRouter();

    const startPercentage = 15;
    const endPercentage = 32;

    useEffect(() => {
        const fromColor = page === 0 ? "rgba(184,107,119,0.8519782913165266)" : page === 1 ? "rgba(168,169,173,0.8519782913165266)" : page === 2 && "rgba(102,46,0,0.8519782913165266)";
        const toColor = page === 0 ? "rgba(207,152,159,0.8855917366946778)" : page === 1 ? "rgba(203,204,205,0.8855917366946778)" : page === 2 && "rgba(212,120,0,0.896796218487395)";

        setBackground({
            startBackground: `radial-gradient(circle, rgba(0,0,0,1) 0%, ${fromColor} 13%, ${toColor} ${startPercentage}%, rgba(0,0,0,1) 100%)`,
            endBackground: `radial-gradient(circle, rgba(0,0,0,1) 0%, ${fromColor} 13%, ${toColor} ${endPercentage}%, rgba(0,0,0,1) 100%)`
        })
    }, [page])

    const form = useForm<z.infer<typeof contactValidation>>({
        resolver: zodResolver(contactValidation)
    })

    const onSubmit = (data: z.infer<typeof contactValidation>) => {
        setPage(3);

        setTimeout(() => router.push("/"), 2000)
    }

    return (
        <motion.div
         key={page}
         animate={{
            background: [background.startBackground, background.endBackground]
         }} 
         transition={{
            type: "spring",
            duration: 0.7
         }}
         className="w-full h-full flex flex-1 rounded-3xl"
        >
            <div className="w-7/12 h-full border-green-500">
                <div className="w-full h-1/2 flex justify-end flex-col gap-7 border-blue px-10 py-9 overflow-hidden">
                    <FormProvider {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}className="w-full h-2/5 overflow-hidden px-3">
                            <motion.div
                            layout
                            animate={{
                                transform: `translateY(${(page >= 0 && page <= 3) && page * -100}%)`,
                                opacity: page === 0 ? 1 : 0
                            }}
                            >
                                <div className="w-fit h-fit overflow-hidden">
                                    <motion.h2 
                                    initial={{
                                        y: 100,
                                        opacity: 0
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    transition={{
                                        duration: 0.4,
                                    }}
                                    className={`${archivo.className} text-[56px]`}
                                    >
                                        Provide your email
                                    </motion.h2>
                                </div>
                                <motion.input
                                initial={{
                                    y: 100,
                                    opacity: 0
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    type: "spring",
                                    duration: 0.7,
                                    delay: 0.24
                                }}
                                type="email"
                                className="w-full h-10 text-white/80 rounded-3xl ml-2 bg-dark-2 border px-5" 
                                {...form.register("email")}
                                placeholder="Email"
                                />
                            </motion.div>
                            <motion.div
                            layout
                            animate={{
                                transform: `translateY(${(page >= 0 && page <= 3) && page * -100}%)`,
                                opacity: page === 1 ? 1 : 0
                            }}
                            >
                                <div className="w-fit h-fit overflow-hidden">
                                    <motion.h2 
                                    initial={{
                                        y: 100,
                                        opacity: 0
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    transition={{
                                        duration: 0.4,
                                    }}
                                    className={`${archivo.className} text-[56px]`}
                                    >
                                        Your name
                                    </motion.h2>
                                </div>
                                <motion.input
                                initial={{
                                    y: 100,
                                    opacity: 0
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    type: "spring",
                                    duration: 0.7,
                                    delay: 0.24
                                }}
                                type="text"
                                className="w-full h-10 text-white/80 rounded-3xl ml-2 bg-dark-2 border px-5" 
                                {...form.register("name")}
                                placeholder="Name"
                                />
                            </motion.div>
                            <motion.div
                            layout
                            animate={{
                                transform: `translateY(${(page >= 0 && page <= 3) && page * -100}%)`,
                                opacity: page === 2 ? 1 : 0
                            }} 
                            >
                                <div className="w-fit h-fit overflow-hidden">
                                    <motion.h2 
                                    initial={{
                                        y: 100,
                                        opacity: 0
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    transition={{
                                        duration: 0.4,
                                    }}
                                    className={`${archivo.className} text-[56px]`}
                                    >
                                        Phone number
                                    </motion.h2>
                                </div>
                                <div className="w-full flex gap-2">
                                    <motion.input
                                    initial={{
                                        y: 100,
                                        opacity: 0
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    transition={{
                                        type: "spring",
                                        duration: 0.7,
                                        delay: 0.24
                                    }}
                                    type="text"
                                    className="w-2/3 h-10 text-white/80 rounded-3xl ml-2 bg-dark-2 border px-5" 
                                    {...form.register("phoneNumber")}
                                    placeholder="Phone number"
                                    />
                                    <button type="submit" className="w-1/3 h-10 rounded-3xl border hover:w-2/3 transition-all">Get my website</button>
                                </div>
                            </motion.div>
                            <motion.div
                            layout
                            animate={{
                                transform: `translateY(${(page >= 0 && page <= 3) && page * -100}%)`,
                                opacity: page === 3 ? 1 : 0
                            }} 
                            >
                                <div className="w-fit h-fit overflow-hidden">
                                    <motion.h2 
                                    initial={{
                                        y: 100,
                                        opacity: 0
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    transition={{
                                        duration: 0.4,
                                    }}
                                    className={`${archivo.className} text-[56px]`}
                                    >
                                        Success
                                    </motion.h2>
                                    <motion.p
                                     initial={{
                                        y: 100,
                                        opacity: 0
                                     }}
                                     animate={{
                                        y: 0,
                                        opacity: 1
                                     }}
                                     transition={{
                                        type: "spring",
                                        duration: 0.7,
                                        delay: 0.24
                                     }}
                                     className="w-full h-10 px-1"
                                    >
                                        We will reach you out in 24 hours!
                                    </motion.p>
                                </div>
                            </motion.div>
                        </form>
                    </FormProvider>
                </div>
                <div className="w-full h-1/2 overflow-hidden">
                    <motion.div
                    key={page}
                    initial={{
                        x: -100,
                        y: 100, 
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        type: "spring",
                        duration: 0.7,
                        delay: 0.2
                    }}
                    className="w-fit h-fit"
                    >
                        <Image
                        src="/assets/3d-copper-lines.png"
                        width={500}
                        height={400}
                        alt={`<a href="https://www.freepik.com/free-vector/modern-colorful-flow-poster-wave-liquid-shape-black-color-background-art-design-your-design-project-vector-illustration_34430794.htm#fromView=search&page=4&position=14&uuid=aa303a90-3207-4240-83fb-853eb219bc75">Image by flatart on Freepik</a>`}
                        className="rotate-90 border-violet-500 -ml-10 mt-9 rounded-3xl"
                        unselectable="on"
                        />
                    </motion.div>
                </div>
            </div>
            <div className="relative w-5/12 h-full flex flex-col border-green-500">
                <div className="w-full h-1/2 flex flex-col items-end border-blue rounded-3xl overflow-hidden">
                    <motion.div
                    key={page}
                    initial={{
                        x: 100,
                        y: -100, 
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        type: "spring",
                        duration: 0.7,
                        delay: 0.22
                    }}
                    className="w-fit h-fit"
                    >
                        <Image
                        src="/assets/3d-copper-roses.png"
                        width={500}
                        height={700}
                        alt={`href="https://www.freepik.com/free-ai-image/abstract-creative-3d-sphere_72449328.htm#fromView=search&page=1&position=1&uuid=d0991209-8ca5-431b-91f0-402100a787ef">`}
                        className="relative bottom-10 rotate-180"
                        unselectable="on"
                        />
                    </motion.div>
                </div>
                <div className="absolute w-full flex justify-end border-green-500 top-1/2 px-7">
                    {page > 0 && page < 3 && (
                        <motion.div 
                        layout
                        className="w-fit h-fit"
                        whileHover={{
                            x: -10,
                        }}
                        transition={{
                            type: "spring",
                            duration: 0.5
                        }}
                        onClick={() => setPage(currentPage => currentPage - 1)}
                        >
                            <HiArrowLongLeft className="size-16 cursor-pointer"/>
                        </motion.div>
                    )}
                    {page < 2 && (
                        <motion.div 
                        layout
                        className="w-fit h-fit"
                        whileHover={{
                            x: 10,
                        }}
                        transition={{
                            type: "spring",
                            duration: 0.5
                        }}
                        onClick={() => page !== 2 && (setPage(currentPage => currentPage + 1))}
                        >
                            <HiArrowLongRight className="size-16 cursor-pointer"/>
                        </motion.div>
                    )}
                </div>
                <div className="w-full h-1/2 flex justify-end items-end border-blue">
                    <motion.div
                    key={page}
                    initial={{
                        x: 100,
                        y: 100, 
                        opacity: 0,
                        rotate: "90deg"
                    }}
                    animate={{
                        x: 0,
                        y: "30%",
                        opacity: 1,
                        rotate: "0deg"
                    }}
                    transition={{
                        type: "spring",
                        duration: 0.7,
                        delay: 0.2
                    }}
                    whileTap="tapped"
                    className="w-fit h-fit -mr-12 mb-2"
                    >
                        <Image
                        src="/assets/3d-sphere.png"
                        width={270}
                        height={270}
                        alt={`href="https://www.freepik.com/free-ai-image/abstract-creative-3d-sphere_72449328.htm#fromView=search&page=1&position=1&uuid=d0991209-8ca5-431b-91f0-402100a787ef">`}
                        className="relative rounded-full border-violet-500"
                        unselectable="on"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default ContactForm;
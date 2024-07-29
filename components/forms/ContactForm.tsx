"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { Archivo_Black } from "next/font/google";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod";
import { contactValidation } from "@/lib/validations/contact";
import { useRouter } from "next/navigation";

const archivo = Archivo_Black({ 
    weight: "400", 
    subsets: ["latin"] 
  });

const ContactForm = () => {
    const [ pageIndex, setPageIndex ] = useState(0);
    const [ background, setBackground ] = useState({ startBackground: "", endBackground: "" });
    const [ backgroundPercentageX, setBackgroundPercentageX ] = useState<number>();
    const [ backgroundPercentageY, setBackgroundPercentageY ] = useState<number>();
    const [ direction, setDirection ] = useState<string>("Forward")

    const ref = useRef(null);

    const router = useRouter();

    const startPercentage = 15;
    const endPercentage = 32;

    useEffect(() => {
        const fromColor = pageIndex === 0 ? "rgba(184,107,119,0.8519782913165266)" : pageIndex === 1 ? "rgba(168,169,173,0.8519782913165266)" : pageIndex === 2 && "rgba(102,46,0,0.8519782913165266)";
        const toColor = pageIndex === 0 ? "rgba(207,152,159,0.8855917366946778)" : pageIndex === 1 ? "rgba(203,204,205,0.8855917366946778)" : pageIndex === 2 && "rgba(212,120,0,0.896796218487395)";

        setTimeout(() => {
            setBackground({
                startBackground: `radial-gradient(circle, rgba(0,0,0,1) 0%, ${fromColor} 13%, ${toColor} ${startPercentage}%, rgba(0,0,0,1) 100%)`,
                endBackground: `radial-gradient(circle, rgba(0,0,0,1) 0%, ${fromColor} 13%, ${toColor} ${endPercentage}%, rgba(0,0,0,1) 100%)`
            })
        }, 150)
    }, [pageIndex])

    const form = useForm<z.infer<typeof contactValidation>>({
        resolver: zodResolver(contactValidation)
    })

    const onSubmit = (data: z.infer<typeof contactValidation>) => {
        setPageIndex(3);

        console.log(data);

        setTimeout(() => router.push("/"), 2000)
    }

    const onMouseEnter = (e: any) => {
        const rect = ref.current.getBoundingClientRect();
        // console.log(e.clientX, e.clientY);
        // console.log(`Button width ${rect.width}`, `Button height ${rect.height}`)
        // console.log(`Left: ${rect.left}`, `Right: ${rect.top}`);
        // console.log(`Pointer position X within the button ${e.clientX - rect.left}`, `Pointer position Y within the button ${e.clientY - rect.top}`);

        const backgroundPercentageX = ((e.clientX - rect.left) / rect.width) * 100;

        const backgroundPercentageY = ((e.clientY - rect.top) / rect.height) * 100;

        setBackgroundPercentageX(backgroundPercentageX);
        setBackgroundPercentageY(backgroundPercentageY);

        // setTimeout(() => {
        //     setGradientSize(100);
        // }, 100)
    }

    const previousPage = () => {
        if(pageIndex !== 0) {
            setDirection("Backwards");
            setPageIndex(currentPageIndex => currentPageIndex - 1);
        }
    }

    const nextPage = () => {
        if(pageIndex < 2) {
            setDirection("Forward");
            setPageIndex(currentPageIndex => currentPageIndex + 1);
        }
    }

    useEffect(() => console.log(direction), [direction]);

    const pages = [
        {
            title: "Provide your email",
            type: "email",
            name: "email",
            placeholder: "Email",
        },
        {
            title: "Your full name",
            type: "text",
            name: "name",
            placeholder: "Name",
        },
        {
            title: "Your phone number",
            type: "text",
            name: "phoneNumber",
            placeholder: "Phone number"
        }
    ]

    return (
        <div className="relative h-full py-8">
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <motion.div  
                     animate={{
                        translateX: `-${pageIndex * 100}%`
                     }}
                     transition={{
                        type: "spring",
                        duration: 1
                     }}
                     className="flex items-center -mb-3"
                    >
                        {pages.map((page, index) => {
                            return (
                                <article key={index} className="w-screen h-[90vh] aspect-video flex justify-center items-center shrink-0 border-red-500 py-5"> 
                                    <motion.div
                                     animate={{
                                        background: [background.startBackground, background.endBackground]
                                     }}  
                                     transition={{
                                        delay: 0.2,
                                        duration: 1
                                     }}
                                     className="w-11/12 h-full rounded-3xl border-green-500"
                                    >
                                        <div className="w-full h-2/5 flex border-blue">
                                            <div className="w-1/2 h-full border-violet-500">
                                                <motion.div
                                                    // key={direction === "Forward" ? direction : null}
                                                    initial={{
                                                        x: -50,
                                                        y: -100,
                                                        opacity: 0,
                                                        rotate: "-180deg"
                                                    }}
                                                    animate={{
                                                        x: 0,
                                                        y: 0,
                                                        opacity: 1,
                                                        rotate: "0deg"
                                                    }}
                                                    transition={{
                                                        type: "spring",
                                                        duration: 1,
                                                        delay: 0.1
                                                    }}
                                                    className="w-fit border-purple-500 -mt-7 -ml-7 max-[600px]:-mt-5 max-[600px]:-ml-5 max-[400px]:-mt-3 max-[400px]:-ml-3"
                                                >
                                                    <Image
                                                        src="/assets/3d-sphere.png"
                                                        width={270}
                                                        height={270}
                                                        alt={`href="https://www.freepik.com/free-ai-image/abstract-creative-3d-sphere_72449328.htm#fromView=search&page=1&position=1&uuid=d0991209-8ca5-431b-91f0-402100a787ef">`}
                                                        className="relative rounded-full border-yellow-500 max-[800px]:size-[14rem] max-[600px]:size-[12rem] max-[450px]:size-[10rem] max-[380px]:size-[8rem]"
                                                        unselectable="on"
                                                    />
                                                </motion.div>
                                            </div>
                                            <div className="w-1/2 h-full flex justify-end border-violet-500 overflow-hidden">
                                                <motion.div
                                                    // key={pageIndex}
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
                                                >
                                                    <Image
                                                        src="/assets/3d-copper-roses.png"
                                                        width={350}
                                                        height={500}
                                                        alt={`href="https://www.freepik.com/free-ai-image/abstract-creative-3d-sphere_72449328.htm#fromView=search&page=1&position=1&uuid=d0991209-8ca5-431b-91f0-402100a787ef">`}
                                                        className="relative rotate-180 max-[800px]:w-[450px] max-[800px]:h-[300px] max-[600px]:w-[400px] max-[600px]:h-[250px] max-[500px]:w-[350px] max-[500px]:h-[200px] max-[420px]:w-[300px] max-[420px]:h-[150px]"
                                                        unselectable="on"
                                                    />
                                                </motion.div>
                                            </div>
                                        </div>
                                        <div className="w-full h-1/5 border-blue">
                                            <div className="w-full h-24 flex justify-center items-center border-violet-500">
                                                <motion.h2
                                                    // key={pageIndex} 
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
                                                    className={`${archivo.className} text-center text-[3.5rem] px-1 max-[670px]:text-[3rem] max-[580px]:text-[2.5rem] max-[485px]:text-[2rem]`}
                                                >
                                                    {page.title}
                                                </motion.h2>
                                            </div>
                                            <div className="w-full h-2/5 flex justify-center items-center border-violet-500">
                                                <motion.input
                                                    // key={pageIndex}
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
                                                        duration: 1,
                                                        delay: 0.3
                                                    }}
                                                    type={page.type}
                                                    className="w-2/5 h-10 text-white/80 rounded-3xl ml-2 bg-dark-4 px-5 max-[900px]:w-1/2 max-[600px]:w-7/12 max-[450px]:w-2/3" 
                                                    {...form.register(page.name === "email" ? "email" : page.name === "name" ? "name" : page.name="phoneNumber" && "phoneNumber")}
                                                    placeholder={page.placeholder}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full h-2/5 flex border-blue">
                                            <motion.div
                                                // key={pageIndex}
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
                                                    duration: 1,
                                                    delay: 0.3
                                                }} 
                                             className="w-1/2 h-full flex justify-start items-end border-violet-500 overflow-hidden"
                                            >
                                                <Image
                                                    src="/assets/3d-copper-lines.png"
                                                    width={400}
                                                    height={400}
                                                    alt={`<a href="https://www.freepik.com/free-vector/modern-colorful-flow-poster-wave-liquid-shape-black-color-background-art-design-your-design-project-vector-illustration_34430794.htm#fromView=search&page=4&position=14&uuid=aa303a90-3207-4240-83fb-853eb219bc75">Image by flatart on Freepik</a>`}
                                                    className="border-violet-500 rounded-3xl rotate-90 -ml-[7%]"
                                                    unselectable="on"
                                                />
                                            </motion.div>
                                            <div className="w-1/2 h-full flex justify-end items-end border-violet-500 pb-5 pr-5">
                                                <div className="w-fit h-11 flex items-center rounded-3xl justify-center px-2">
                                                    <motion.div 
                                                        layout
                                                        className="w-fit h-fit max-[550px]:hidden"
                                                        whileHover={{
                                                            x: pageIndex !== 0 ? -10 : 0,
                                                        }}
                                                        transition={{
                                                            type: "spring",
                                                            duration: 0.5
                                                        }}
                                                        onClick={() => previousPage()}
                                                    >
                                                        <HiArrowLongLeft className={`size-16 cursor-pointer ${ pageIndex !== 0 ? "text-white" : "text-neutral-400"}`}/>
                                                    </motion.div>
                                                </div>
                                                {pageIndex < 2 ? (
                                                    <div className="w-fit h-11 flex items-center rounded-3xl justify-center px-2">
                                                        <motion.div 
                                                            layout
                                                            className="w-fit h-fit max-[550px]:hidden"
                                                            whileHover={{
                                                                x: 10,
                                                            }}
                                                            transition={{
                                                                type: "spring",
                                                                duration: 0.5
                                                            }}
                                                            onClick={() => nextPage()}
                                                        >
                                                            <HiArrowLongRight className={`size-16 cursor-pointer`}/>
                                                        </motion.div>
                                                    </div>
                                                ): (
                                                    <motion.button
                                                     ref={ref}
                                                     style={{
                                                        background: `radial-gradient(circle at ${backgroundPercentageX}% ${backgroundPercentageY}%, #662E00 0%, #00000000 0%)`,
                                                     }} 
                                                     initial={{
                                                        opacity: 0
                                                     }}
                                                     animate={{
                                                        opacity: 1
                                                     }}
                                                     whileHover={{
                                                        background: `radial-gradient(circle at ${backgroundPercentageX}% ${backgroundPercentageY}%, #662E00 30%, #D47800 100%)`
                                                     }}
                                                     transition={{
                                                        type: "tween",
                                                        opacity: {
                                                            delay: 0.25
                                                        }
                                                     }}
                                                     type="submit" 
                                                     className="w-56 h-10 rounded-3xl border max-[420px]:text-small-regular max-[360px]:text-subtle-medium px-2 max-[380px]:w-72"
                                                     onMouseEnter={(e) => onMouseEnter(e)}
                                                     onClick={(e) => e.preventDefault}
                                                    >
                                                        Get My Website
                                                    </motion.button>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                </article>
                            )
                        })}
                    </motion.div>
                    <div className="w-full h-fit flex justify-center border-red-500 pb-10">
                        <div className="w-fit h-11 flex items-center rounded-3xl justify-center px-2">
                            <motion.div 
                                layout
                                className="w-fit h-fit min-[550px]:hidden"
                                whileHover={{
                                    x: pageIndex !== 0 ? -10 : 0,
                                }}
                                transition={{
                                    type: "spring",
                                    duration: 0.5
                                }}
                                onClick={() => previousPage()}
                            >
                                <HiArrowLongLeft className={`size-12 cursor-pointer ${pageIndex !== 0 ? "text-white" : "text-neutral-400"}`}/>
                            </motion.div>
                        </div>
                        <div className="w-fit h-11 flex items-center rounded-3xl justify-center px-2">
                            <motion.div 
                                layout
                                className="w-fit h-fit min-[550px]:hidden"
                                whileHover={{
                                    x: 10,
                                }}
                                transition={{
                                    type: "spring",
                                    duration: 0.5
                                }}
                                onClick={() => nextPage()}
                            >
                                <HiArrowLongRight className={`size-12 cursor-pointer ${pageIndex === 2 ? "text-neutral-500" : "text-white"}`}/>
                            </motion.div>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </div>
        // <motion.div
        //  key={page}
        //  animate={{
        //     background: [background.startBackground, background.endBackground]
        //  }} 
        //  transition={{
        //     type: "spring",
        //     duration: 0.7
        //  }}
        //  className="w-full h-full flex flex-1 rounded-3xl"
        // >
        //     <div className="w-7/12 h-full border border-green-500">
        //         <div className="w-full h-1/2 flex justify-end flex-col gap-7 border border-blue px-10 py-9 overflow-hidden">
        //             <FormProvider {...form}>
        //                 <form onSubmit={form.handleSubmit(onSubmit)}className="w-full h-2/5 overflow-hidden px-3">
        //                     <motion.div
        //                     layout
        //                     animate={{
        //                         transform: `translateY(${(page >= 0 && page <= 3) && page * -100}%)`,
        //                         opacity: page === 0 ? 1 : 0
        //                     }}
        //                     >
        //                         <div className="w-fit h-fit overflow-hidden">
        //                             <motion.h2 
        //                             initial={{
        //                                 y: 100,
        //                                 opacity: 0
        //                             }}
        //                             animate={{
        //                                 y: 0,
        //                                 opacity: 1
        //                             }}
        //                             transition={{
        //                                 duration: 0.4,
        //                             }}
        //                             className={`${archivo.className} text-[56px]`}
        //                             >
        //                                 Provide your email
        //                             </motion.h2>
        //                         </div>
        //                         <motion.input
        //                         initial={{
        //                             y: 100,
        //                             opacity: 0
        //                         }}
        //                         animate={{
        //                             y: 0,
        //                             opacity: 1
        //                         }}
        //                         transition={{
        //                             type: "spring",
        //                             duration: 0.7,
        //                             delay: 0.24
        //                         }}
        //                         type="email"
        //                         className="w-full h-10 text-white/80 rounded-3xl ml-2 bg-dark-2 border px-5" 
        //                         {...form.register("email")}
        //                         placeholder="Email"
        //                         />
        //                     </motion.div>
        //                     <motion.div
        //                     layout
        //                     animate={{
        //                         transform: `translateY(${(page >= 0 && page <= 3) && page * -100}%)`,
        //                         opacity: page === 1 ? 1 : 0
        //                     }}
        //                     >
        //                         <div className="w-fit h-fit overflow-hidden">
        //                             <motion.h2 
        //                             initial={{
        //                                 y: 100,
        //                                 opacity: 0
        //                             }}
        //                             animate={{
        //                                 y: 0,
        //                                 opacity: 1
        //                             }}
        //                             transition={{
        //                                 duration: 0.4,
        //                             }}
        //                             className={`${archivo.className} text-[56px]`}
        //                             >
        //                                 Your name
        //                             </motion.h2>
        //                         </div>
        //                         <motion.input
        //                         initial={{
        //                             y: 100,
        //                             opacity: 0
        //                         }}
        //                         animate={{
        //                             y: 0,
        //                             opacity: 1
        //                         }}
        //                         transition={{
        //                             type: "spring",
        //                             duration: 0.7,
        //                             delay: 0.24
        //                         }}
        //                         type="text"
        //                         className="w-full h-10 text-white/80 rounded-3xl ml-2 bg-dark-2 border px-5" 
        //                         {...form.register("name")}
        //                         placeholder="Name"
        //                         />
        //                     </motion.div>
        //                     <motion.div
        //                     layout
        //                     animate={{
        //                         transform: `translateY(${(page >= 0 && page <= 3) && page * -100}%)`,
        //                         opacity: page === 2 ? 1 : 0
        //                     }} 
        //                     >
        //                         <div className="w-fit h-fit overflow-hidden">
        //                             <motion.h2 
        //                             initial={{
        //                                 y: 100,
        //                                 opacity: 0
        //                             }}
        //                             animate={{
        //                                 y: 0,
        //                                 opacity: 1
        //                             }}
        //                             transition={{
        //                                 duration: 0.4,
        //                             }}
        //                             className={`${archivo.className} text-[56px]`}
        //                             >
        //                                 Phone number
        //                             </motion.h2>
        //                         </div>
        //                         <div className="w-full flex gap-2">
        //                             <motion.input
        //                             initial={{
        //                                 y: 100,
        //                                 opacity: 0
        //                             }}
        //                             animate={{
        //                                 y: 0,
        //                                 opacity: 1
        //                             }}
        //                             transition={{
        //                                 type: "spring",
        //                                 duration: 0.7,
        //                                 delay: 0.24
        //                             }}
        //                             type="text"
        //                             className="w-2/3 h-10 text-white/80 rounded-3xl ml-2 bg-dark-2 border px-5" 
        //                             {...form.register("phoneNumber")}
        //                             placeholder="Phone number"
        //                             />
        //                             <button type="submit" className="w-1/3 h-10 rounded-3xl border hover:w-2/3 transition-all">Get my website</button>
        //                         </div>
        //                     </motion.div>
        //                     <motion.div
        //                     layout
        //                     animate={{
        //                         transform: `translateY(${(page >= 0 && page <= 3) && page * -100}%)`,
        //                         opacity: page === 3 ? 1 : 0
        //                     }} 
        //                     >
        //                         <div className="w-fit h-fit overflow-hidden">
        //                             <motion.h2 
        //                             initial={{
        //                                 y: 100,
        //                                 opacity: 0
        //                             }}
        //                             animate={{
        //                                 y: 0,
        //                                 opacity: 1
        //                             }}
        //                             transition={{
        //                                 duration: 0.4,
        //                             }}
        //                             className={`${archivo.className} text-[56px]`}
        //                             >
        //                                 Success
        //                             </motion.h2>
        //                             <motion.p
        //                              initial={{
        //                                 y: 100,
        //                                 opacity: 0
        //                              }}
        //                              animate={{
        //                                 y: 0,
        //                                 opacity: 1
        //                              }}
        //                              transition={{
        //                                 type: "spring",
        //                                 duration: 0.7,
        //                                 delay: 0.24
        //                              }}
        //                              className="w-full h-10 px-1"
        //                             >
        //                                 We will reach you out in 24 hours!
        //                             </motion.p>
        //                         </div>
        //                     </motion.div>
        //                 </form>
        //             </FormProvider>
        //         </div>
        //         <div className="w-full h-1/2 overflow-hidden">
        //             <motion.div
        //             key={page}
        //             initial={{
        //                 x: -100,
        //                 y: 100, 
        //                 opacity: 0
        //             }}
        //             animate={{
        //                 x: 0,
        //                 y: 0,
        //                 opacity: 1
        //             }}
        //             transition={{
        //                 type: "spring",
        //                 duration: 0.7,
        //                 delay: 0.2
        //             }}
        //             className="w-fit h-fit"
        //             >
        //                 <Image
        //                 src="/assets/3d-copper-lines.png"
        //                 width={500}
        //                 height={400}
        //                 alt={`<a href="https://www.freepik.com/free-vector/modern-colorful-flow-poster-wave-liquid-shape-black-color-background-art-design-your-design-project-vector-illustration_34430794.htm#fromView=search&page=4&position=14&uuid=aa303a90-3207-4240-83fb-853eb219bc75">Image by flatart on Freepik</a>`}
        //                 className="rotate-90 border border-violet-500 -ml-10 mt-9 rounded-3xl"
        //                 unselectable="on"
        //                 />
        //             </motion.div>
        //         </div>
        //     </div>
        //     <div className="relative w-5/12 h-full flex flex-col border border-green-500">
        //         <div className="w-full h-1/2 flex flex-col items-end border border-blue rounded-3xl overflow-hidden">
        //             <motion.div
        //             key={page}
        //             initial={{
        //                 x: 100,
        //                 y: -100, 
        //                 opacity: 0
        //             }}
        //             animate={{
        //                 x: 0,
        //                 y: 0,
        //                 opacity: 1
        //             }}
        //             transition={{
        //                 type: "spring",
        //                 duration: 0.7,
        //                 delay: 0.22
        //             }}
        //             className="w-fit h-fit"
        //             >
        //                 <Image
        //                 src="/assets/3d-copper-roses.png"
        //                 width={500}
        //                 height={700}
        //                 alt={`href="https://www.freepik.com/free-ai-image/abstract-creative-3d-sphere_72449328.htm#fromView=search&page=1&position=1&uuid=d0991209-8ca5-431b-91f0-402100a787ef">`}
        //                 className="relative bottom-10 rotate-180"
        //                 unselectable="on"
        //                 />
        //             </motion.div>
        //         </div>
        //         <div className="absolute w-full flex justify-end border border-green-500 top-1/2 px-7">
        //             {page > 0 && page < 3 && (
        //                 <motion.div 
        //                 layout
        //                 className="w-fit h-fit"
        //                 whileHover={{
        //                     x: -10,
        //                 }}
        //                 transition={{
        //                     type: "spring",
        //                     duration: 0.5
        //                 }}
        //                 onClick={() => setPage(currentPage => currentPage - 1)}
        //                 >
        //                     <HiArrowLongLeft className="size-16 cursor-pointer"/>
        //                 </motion.div>
        //             )}
        //             {page < 2 && (
        //                 <motion.div 
        //                 layout
        //                 className="w-fit h-fit"
        //                 whileHover={{
        //                     x: 10,
        //                 }}
        //                 transition={{
        //                     type: "spring",
        //                     duration: 0.5
        //                 }}
        //                 onClick={() => page !== 2 && (setPage(currentPage => currentPage + 1))}
        //                 >
        //                     <HiArrowLongRight className="size-16 cursor-pointer"/>
        //                 </motion.div>
        //             )}
        //         </div>
        //         <div className="w-full h-1/2 flex justify-end items-end border border-blue">
        //             <motion.div
        //             key={page}
        //             initial={{
        //                 x: 100,
        //                 y: 100, 
        //                 opacity: 0,
        //                 rotate: "90deg"
        //             }}
        //             animate={{
        //                 x: 0,
        //                 y: "30%",
        //                 opacity: 1,
        //                 rotate: "0deg"
        //             }}
        //             transition={{
        //                 type: "spring",
        //                 duration: 0.7,
        //                 delay: 0.2
        //             }}
        //             whileTap="tapped"
        //             className="w-fit h-fit -mr-12 mb-2"
        //             >
        //                 <Image
        //                 src="/assets/3d-sphere.png"
        //                 width={270}
        //                 height={270}
        //                 alt={`href="https://www.freepik.com/free-ai-image/abstract-creative-3d-sphere_72449328.htm#fromView=search&page=1&position=1&uuid=d0991209-8ca5-431b-91f0-402100a787ef">`}
        //                 className="relative rounded-full border border-violet-500"
        //                 unselectable="on"
        //                 />
        //             </motion.div>
        //         </div>
        //     </div>
        // </motion.div>
    )
}

export default ContactForm;
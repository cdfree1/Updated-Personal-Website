'use client';

import Navbar from "../components/Navbar";
import { AnimatePresence, motion, useInView } from "framer-motion";
import * as React from 'react';

export default function Projects() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="grid grid-rows-[auto_1fr_20px] min-h-screen p-4 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)] overflow-hidden">
            <Navbar />
            <main className="flex flex-col items-center justify-items-center gap-8 row-start-2 items-center sm:items-start">
                <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center">
                    <AnimatePresence>
                        <motion.h1
                            ref={ref}
                            key="heading"
                            initial={{ opacity: 0, x: -100 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            exit="hidden"
                            transition={{ duration: 0.5 }}
                            className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] text-black dark:text-white"
                        >
                            BooklyAI
                        </motion.h1>
                        <motion.p
                            ref={ref}
                            key="description"
                            initial={{ opacity: 0, x: 105 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            exit="hidden"
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-base text-center sm:text-lg md:text-xl md:leading-6 mt-4 text-black dark:text-white"
                        >
                            An AI tool which allows the user to identify and generate a description of a book by taking a photo of it. <span className="text-yellow-500">Click the logo and try it out!</span>
                        </motion.p>
                    </AnimatePresence>
                </div>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: -105 }}
                    animate={isInView ? { opacity: 1, y: 10 } : {}}
                    exit="hidden"
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full max-w-md mt-4 mx-auto"
                >
                    <a href="https://bookly-ai.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full -z-10">
                        <img
                            key="BooklyAI Logo"
                            src="Bookly-AI.png"
                            className="w-full"
                        />
                    </a>
                </motion.div>
            </main>
        </div>
    );
}
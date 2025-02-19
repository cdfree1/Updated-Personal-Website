'use client';

import Navbar from "../components/Navbar";
import { AnimatePresence, motion, useInView } from "framer-motion";
import * as React from 'react';

export default function Resume () {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="grid grid-rows-[auto_1fr_20px] min-h-screen p-4 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)]">
            <Navbar />
            <main className="flex flex-col items-center justify-items-center gap-8 row-start-2 items-center sm:items-start">
                <div className="flex space-x-1 justify-center">
                    <AnimatePresence>
                        {"Download My Resume".split('').map((char, i) => (
                            <motion.span
                            ref={ref}
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            exit="hidden"
                            transition={{ duration: 0.5, delay: i * 0.01 }}
                            className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] inline-block"
                          >
                            {char === ' ' ? <span>&nbsp;</span> : char}
                          </motion.span>  
                        ))}
                    </AnimatePresence>
                </div>
                <a href="Caleb Free Resume.pdf" download>
                    <button className="mt-4 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75">
                        Click Here
                    </button>
                </a>
            </main>
        </div>
    );
}
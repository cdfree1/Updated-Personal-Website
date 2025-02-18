'use client';
import Navbar from "./components/Navbar"
import {AnimatePresence, motion, useInView} from "framer-motion"
import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {faLinkedin, faInstagram, faGithub} from "@fortawesome/free-brands-svg-icons";


export default function Home() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true});
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center justify-items-center gap-8 row-start-2 items-center sm:items-start">
      <div className="flex space-x-1 justify-center">
        <AnimatePresence>
        {"Hey there".split('').map((char, i) => (
          <motion.p
          ref={ref}
          key={i}
          initial={{ opacity: 0, x: -18 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          exit="hidden"
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
          >
          {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.p>  
        ))}
        </AnimatePresence>
      </div>
      <div className="flex space-x-1 jsutify-center">
        <AnimatePresence>
        <motion.p
          ref={ref}
          initial={{ y: 25, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-center sm:text-2xl font-bold tracking-tighter md:text-4xl md:leading-[3rem]"
        >
          Scroll Down <span className="text-yellow-500">↓</span>
        </motion.p>
        </AnimatePresence>
      </div>
      <div className="pt-[100vh]">
      </div>
      <Navbar />
      <div className="pt-[100vh]"></div>
      <div className="p-12 pt-28 text-center sm:pt-60">
      <header className="mb-8">
        <img src="headshot.jpg" alt="Caleb Free" className="w-72 h-72 rounded-full object-cover border-2 border-white mx-auto"/>
      </header>
      <div>
        <p className="text-white text-2xl mb-8">
        Hi I'm <span className="text-yellow-500">Caleb</span>, a computer science student at the University of North Carolina Chapel Hill. On this page, 
        you can check out the work I've done, feel free to reach out to me through the sources below.
        </p>
      </div>
      <div id="contact" className="py-24 px-5 text-white">
        <h2 className="text-2xl mb-4 text-center">Contact Me</h2>
        <div className="flex justify-center gap-5 mt-5">
        <a href="mailto:cdfree@unc.edu" aria-label="Email" className="text-2xl text-white hover:text-yellow-500"><FontAwesomeIcon icon={faEnvelope} /></a>
        <a href="https://www.linkedin.com/in/caleb-free-7aa842249/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-2xl text-white hover:text-yellow-500"><FontAwesomeIcon icon={faLinkedin}/></a>
        <a href="https://www.instagram.com/caleb_free3.0/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-2xl text-white hover:text-yellow-500"><FontAwesomeIcon icon={faInstagram}/></a>
        <a href="https://github.com/cdfree1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-2xl text-white hover:text-yellow-500"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
      </div>
      </main>
    </div>
  );
}

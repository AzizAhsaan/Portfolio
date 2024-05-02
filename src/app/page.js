
'use client'
import Image from "next/image";
import ParticlesBackground from "./(Components)/ParticlesBackground";
import { motion } from "framer-motion";
import ProjectsSection from "./(Components)/ProjectsSection";
import { useEffect, useRef } from "react";
export default function Home() {
  const refScrolling = useRef()
  useEffect(() => {
    console.log(refScrolling.current)
  },[])
  const ScrollView = () => {
    refScrolling.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    });
  }
  return (
    <>

    <main
    className="h-full custom-gradient z-50  "
    initial={{ y: "-200vh" }}
    animate={{ y: "100%" }}
    transition={{ duration: 0.1 }}
  >
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-7 gap-y-24 ">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative  flex items-center justify-center ">
        <motion.div initial={{ x: "-200vh" }} animate={{ x: "0%" }} transition={{ duration: 0.7,delay:0.4 }} className="lg:w-full lg:h-full h-[50%] w-[50%] relative  flex items-center justify-center">
        <Image src="/AbdulAzizAhsaanPicture.jpg" alt="" height={400} width={400} className="object-contain rounded-full" />

        </motion.div>
        
      </div>
      {/* TEXT CONTAINER */}
      <motion.div initial={{ x: "200vh" }} animate={{ x: "0%" }} transition={{ duration: 0.7,delay:0.4 }} className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="lg:text-4xl text-xl text-white md:text-6xl font-bold">
          Crafting Digital Experiences, Designing Tomorrow.
        </h1>
        {/* DESC */}
        <p className="md:text-xl text-sm text-white">
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code, my
          portfolio showcases a diverse collection of projects that reflect my
          commitment to excellence.
        </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <button onClick={() => ScrollView()} className="lg:p-4 p-3 rounded-lg ring-1 ring-white bg-white text-black">
            View My Work
          </button>

        </div>
      </motion.div>
    </div>
  </main>
  <ProjectsSection refScrolling={refScrolling} />
  </>
  );
}

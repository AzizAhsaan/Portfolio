"use client";
import Navbar from "./Header";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import { useEffect } from "react";
const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  useEffect(() => {
    console.log(pathName,'hey')

  },[pathName])
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-full h-screen   "
      >
        <motion.div
          className="h-full w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName === "/" || pathName === "http://localhost:3000/" ? "Home" : pathName.substring(1)}
          
        </motion.div>
        <motion.div
          className="h-full w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24  ">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;

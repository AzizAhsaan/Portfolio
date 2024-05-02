"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
];


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      y: "100vw",
    },
    opened: {
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const listItemVariants = {
    closed: {
       y: "-200vw",
      opacity: 0,
    },
    opened: {
      y:0,
      opacity: 1,

    },
  };
  const listVariantsLogo = {
    closed: {
      y: 30,
    },
    opened: {
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const listItemVariantsLogo = {
    closed: {
       y: 30,
      opacity: 0,
    },
    opened: {
      y:0,
      opacity: 1,

    },
  };
  const listVariantsLinks = {
    closed: {
      x: 30,
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const listItemVariantsLinks = {
    closed: {
      x: 30,
      opacity: 0,
    },
    opened: {
      x:0,
      opacity: 1,

    },
  };
  const LogoLinks = [
    { url: "/", image: "/github.png" },
    { url: "/", image: "/instagram.png" },
    { url: "/", image: "/facebook.png" },
    { url: "/", image: "/linkedin.png" },
  ];

  

  return (
    <div className="h-full custom-gradient2 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}

      <motion.ul
            variants={listVariantsLinks}
            initial="closed"
            animate="opened"
            className="hidden md:flex gap-4 w-1/3"
          >
            {links.map((link) => (
              <motion.li
                variants={listItemVariantsLinks}
                className=""
                key={link.title}
              >
                       <NavLink link={link} key={link.title} />
              </motion.li>
            ))}
          </motion.ul>
     
      {/* SOCIAL */}
      <motion.ul
            variants={listVariantsLogo}
            initial="closed"
            animate="opened"
            className="flex flex-row items-center gap-6"
          >
            {LogoLinks.map((link) => (
              <motion.li
                variants={listItemVariantsLogo}
                className=""
                key={link.title}
              >
                      <Link href={link.url}>
        <Image src={link.image} alt="" className="lg:w-9 lg:h-9 w-8 h-8" width={100} height={100} />
      </Link>
              </motion.li>
            ))}
          </motion.ul>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

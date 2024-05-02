"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import ParticlesBackground from "./ParticlesBackground";

const items = [
  {
    id: 1,
    title: "Hub200 Activity Events",
    desc: "This website was created as a graduation project from the Web50x course, where Django Framework was utilized for its development. The site comprises more than 12 pages and is connected to the backend. Among these pages are the Landing Page, Calendar page, a page for user login and account creation, pages displaying events, and pages for event registration. This website represents the events organized by Hub200, showcasing summaries of the events they host as well as displaying all events.",
    img: "https://images.pexels.com/photos/23228628/pexels-photo-23228628/free-photo-of-hub200activityevents.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://azizahsaan.pythonanywhere.com/",
  },
  {
    id: 2,
    title: "Clean Iraq Campaign",
    desc: "The Clean Iraq Campaign website was a graduation project from the Meta Front-End Developer certificate course. This website focuses on the ambassadors of cleanliness in Iraq, showcasing their achievements and articles to attract and educate people about the importance of cleanliness in their regions and country. It aims to make them realize the value of such actions to motivate them to clean their own areas. The project consists of more than 10 pages and was built using Next.js and TypeScript to ensure compatibility with search engine optimization (SEO) practices. Among these pages are the homepage, a page displaying information about the campaign and its founders, a registration page for campaigns, and others.",
    img: "https://mostaql.hsoubcdn.com/uploads/thumbnails/2153859/6526da43669c5/CleanIraqCampaign1.jpg",
    link: "",
  },
  {
    id: 3,
    title: "Little Lemon",
    desc: "The Little Lemon website was created as my second graduation project for the Meta Front-End Developer Certificate course. This website serves as a platform for displaying menus, making restaurant reservations, and tracking ordered food items along with the total bill. Additionally, it includes integration with an API for currency conversion. Built using React.js, the project comprises more than 5 pages. Despite its simplicity, you'll find that this project encompasses most of the features commonly found in e-commerce platforms. The UI/UX design of the project was personally crafted by me and served as one of my initial design projects, contributing to the enhancement of my skills in this domain.",
    img: "https://mostaql.hsoubcdn.com/uploads/portfolios/2153859/6526e21c73283/LittleLemon4.jpg",
    link: "https://lama.dev",
  },
];

const ProjectsSection = ({refScrolling}) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <>
    <section ref={refScrolling} className="relative h-[600vh] w-full custom-gradient3">
    <ParticlesBackground />

    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" relative h-full  " ref={ref}>

      <h1 className="text-white  xl:text-7xl lg:text-5xl md:text-4xl text-3xl text-center">
          My Works
        </h1>

        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className=" lg:w-screen  w-[350px] h-screen flex items-center justify-center gap-5 bg-transparent" />
            {items.map((item) => (
              <div
                className={` lg:w-screen w-full h-screen flex items-center justify-center bg-transparent `}
                key={item.id}
              >
                <div className="h-screen  flex flex-col gap-8 text-white">
                  <h1 className="text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80  md:w-96 lg:w-[400px]  xl:w-[800px] h-screen   flex flex-col items-center justify-between " >
                  <div className="relative h-[60%] bg-red-300 w-full rounded-2xl">
                  <Image src={item.img} alt="" fill className="object-cover rounded-2xl" />

                  </div>
<div className="h-[40%] w-full flex flex-col">
                      <p className="md:text-sm  text-xs w-full text-pretty">
                        {item.desc}
                      </p>
                      <Link href={item.link} className="flex justify-end ">
                        <button className="p-1 text-sm md:p-2 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-2 rounded">See Demo</button>
                      </Link>
</div>
                  </div>



                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
    </section>
 
    </>
  );
};

export default ProjectsSection;

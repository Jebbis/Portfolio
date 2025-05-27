"use client";
import { motion } from "framer-motion";
/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    category: "fullstack",
    title: "Smart Home -dashboard",
    description:
      "The aim of this project is to create Smart Home -dashboard to show daily relevant data from bus timetables to energy price",
    image:
      "https://raw.githubusercontent.com/Jebbis/home-dashboard/refs/heads/main/img/SmartHomeDashboard.jpg",
    link: "",
    github: "https://github.com/Jebbis/home-dashboard",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Fastify",
      "TypeScript",
      "GraphQL",
      "REST",
    ],
  },
  {
    id: 2,
    category: "fullstack",
    title: "Notion clone",
    description:
      "Built a clone of Notion, allowing users to create notes with many different features such as: Notion-style editor, Light and Dark mode, Infinite children documents, Trash can, Authentication, Full mobile responsiviness and many more.",
    image:
      "https://raw.githubusercontent.com/Jebbis/Notion/refs/heads/master/img/DocumentsPage.png",
    link: "https://noteapp-jebbis.vercel.app",
    github: "https://github.com/Jebbis/Notion",
    tech: [
      "Typescript",
      "Next.js",
      "Tailwind CSS",
      "Clerk",
      "Convex",
      "Edge Store",
    ],
  },
  {
    id: 3,
    category: "frontend",
    title: "Tuusmet Oy website",
    description:
      "At my previous company, there was a significant demand for modern, up-to-date websites. I took the initiative to design and develop these websites independently and updated the visual branding on the website",
    image: "/assets/work/Tuusmet.jpg",
    link: "https://www.tuusmet.fi/",
    github: "",
    tech: ["Webflow", "CMS"],
  },
  {
    id: 4,
    category: "frontend",
    title: "Portfolio website",
    description:
      "I built this modern, fully responsive portfolio website to showcase my skills.",
    image: "/assets/work/Portfolio.jpg",
    link: "",
    github: "https://github.com/Jebbis/Portfolio",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 5,
    category: "backend",
    title: "Gamestore API",
    description:
      "This project is a API for a Gamestore thats purpose is to manage and retrieve information about games in the stores catalog The API uses CRUD operations for managing the records and using the Entity Framework for database interactions.",
    image: "/assets/work/Gamestore.jpg",
    link: "",
    github: "https://github.com/Jebbis/gamestore-api",
    tech: ["C#", ".NET Core", "SQLite", "Entity Framework Core"],
  },
  {
    id: 6,
    category: "Game dev",
    title: "TBD game",
    description:
      "I built this game project just to learn game development with Godot. The game is in very early stages. It has some feateures as inventory and combat ",
    image: "/assets/work/Animation.gif",
    link: "",
    github: "https://github.com/Jebbis/rpg-game",
    tech: ["Godot"],
  },
  {
    id: 7,
    category: "Discord Bot",
    title: "WoW guild discord bot",
    description:
      "I built a Discord bot for my WoW guild that fetches death stats from applicants' raid logs and shares AI-generated, Twitter-style updates on other guilds' raid progress.",
    image: "/assets/work/Discordbot.jpg",
    link: "",
    github: "https://github.com/Jebbis/DiscordBotWow",
    tech: [
      "Node.js",
      "discord.js",
      "Claude AI",
      "Express",
      "Cron",
      "Typescript",
    ],
  },
];

const categories = [
  "fullstack",
  "frontend",
  "backend",
  "Game dev",
  "Discord Bot",
];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex mt-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        {/* heading */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My latest <span className="text-accent">Work</span>
        </h2>
        {/* tabs */}
        <Tabs
          defaultValue="fullstack"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          {/* headers */}
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent h-[48px] px-6 rounded-full cursor-pointer"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* content */}
          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    slidesPerView="auto"
                    spaceBetween={10}
                    keyboard={true}
                    grabCursor={true}
                    modules={[Pagination, Keyboard]}
                    pagination={{ clickable: true }}
                    className="h-max "
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide
                            key={project.id}
                            className="h-full !w-[93%]"
                          >
                            <div className="flex flex-col xl:flex-row gap-4 xl:gap-2">
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                <h3 className="h3">{project.title}</h3>
                                <div className="xl:mb-4 max-w-[340px] min-h-[130px]">
                                  <p className="mb-8">{project.description}</p>
                                  <p className="mb-4">Technologies used:</p>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full"
                                        >
                                          {item}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 items-start pb-8">
                                  {project.link && (
                                    <Link href={project.link}>
                                      <button className="btn btn-sm btn-accent flex gap-2">
                                        <MdArrowOutward className="text-xl" />
                                        <span>Live Project</span>
                                      </button>
                                    </Link>
                                  )}
                                  {project.github && (
                                    <Link href={project.github}>
                                      <button className="btn btn-sm btn-white flex gap-2">
                                        <FaGithub className="text-xl" />
                                        <span>Github Repo</span>
                                      </button>
                                    </Link>
                                  )}
                                </div>
                              </div>
                              <div className="w-full h-[200px] md:h-[300pxl: xl:h-[400px] relative  order-1 xl:order-none rounded-lg overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={project.image}
                                  objectPosition="left"
                                  fill
                                  unoptimized={true}
                                  className="object-cover pr-4"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Work;

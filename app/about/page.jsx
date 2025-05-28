"use client";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

// components
import Stats from "@/components/Stats";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Blob from "@/components/Blob";
import Socials from "@/components/Socials";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center "
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          {/* image & socials */}
          <div className="hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative ">
            <Image
              src="/assets/profilepic.png"
              alt="profilepic"
              width={320}
              height={496}
              unoptimized={true}
              className="z-20 relative "
            />
            {/* overlay */}
            <div className="w-full h-[60px] absolute left-0 top-[425px] right-0 bg-gradient-to-t from-primary via-primary/90 z-30"></div>
            {/* blob */}
            <div className="absolute top-[80px] -left-[80px] z-10">
              <Blob containerStyles="w-[420px] h-[420px]" />
            </div>
            <Socials
              containerStyles="flex gap-4 z-40 w-full transform -translate-x-[30px] justify-center"
              iconStyles="w-[64px] h-[64px] text-[32px] text-accent hover:text-accent-hover transition-all flex items-center justify-center rounded-full cursor-pointer"
            />
          </div>
          {/* scroll area */}
          <ScrollArea className="w-full h-full">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>About me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Lasse</span> Hämäläinen
              </h2>
              <p className="max-w-[540px] mb-8">
                Power Platform/Integration Developer based in Finland,
                passionate about continuous learning and hands-on development. I
                specialize in developing modern business applications with
                Microsoft Power Platform and building integrations using
                open-source Apache Camel, and I enjoy working closely with
                clients throughout the entire development process. <br />
                <br />
                Outside of work, I spend my time exploring a wide range of
                technologies through personal projects – such as building a
                Smart Home Dashboard, developing a Discord bot, and
                experimenting with web technologies like TypeScript, C#, and
                Next.js. I’m always looking for new ways to grow as a developer
                and build solutions that create real value. Below you’ll find an
                overview of my skills and experience.
              </p>
              <div className="flex flex-col items-start gap-8">
                <Skills />
                <Journey />
                <Stats />
                <Info />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

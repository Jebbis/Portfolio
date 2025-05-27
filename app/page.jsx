"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

// components
import Blob from "@/components/Blob";
import Image from "next/image";

import Socials from "@/components/Socials";
import Pattern from "@/components/Pattern";
import Link from "next/link";

const page = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center "
    >
      {/* pattern */}
      <Pattern />
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        {/* text */}
        <div className="w-full xl:w-[650px] flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="h1 flex-1 mb-[28px]">
            Hi! I'm Lasse, <br />
            <TypeAnimation
              sequence={[
                "Web Developer",
                1500,
                "Integration Developer",
                1500,
                "Power Platform Developer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              className="text-accent"
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="max-w-[500px] mb-[44px]">
            I build visually captivating, user-friendly websites and web apps
            that transform your ideas into seamless, engaging digital
            experiences.
          </p>
          <Link href="/contact" className="btn btn-lg btn-accent mb-16">
            <div className="flex items-center gap-3">
              <span>Let's talk.</span>
              <MdArrowOutward className="text-xl" />
            </div>
          </Link>
          {/* contact info */}
          <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0">
            {/* phone */}
            {/*             <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlinePhone className="text-xl" />
              </span>
              <span>+444 444 444 44</span>
            </div> */}
            {/* mail */}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlineMail className="text-xl" />
              </span>
              <span>lassejesperihamalainen(at)gmail.com</span>
            </div>
          </div>
          {/* links */}
          <Socials
            containerStyles="flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2"
            iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full cursor-pointer"
          />
        </div>
        {/* blob & image  */}
        <div className="hidden xl:block flex-1 relative z-20">
          {/* blob image */}
          <Blob containerStyles="w-[480px] h-[480px]" />
          {/* profile picture */}
          <Image
            src="/assets/profilepic.png"
            alt="profile"
            width={400}
            height={400}
            unoptimized={true}
            className="absolute -top-12 left-[60px]"
          />
          {/* overlay gradient */}
          <div
            className="w-full h-[164px]  absolute -bottom-15 left-0 right-0
          bg-gradient-to-t from-primary via-primary/90 "
          ></div>
        </div>
      </div>
    </motion.section>
  );
};

export default page;

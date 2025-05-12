"use client";
import { motion } from "framer-motion";
// components
import Blob from "@/components/Blob";
import Image from "next/image";
import avatarImg from "@/public/assets/profile-pic.png";

const page = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center "
    >
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        <div className="w-full xl:w-[550px]">text</div>
        <div className="hidden xl:block flex-1 relative z-20">
          {/* blob image */}
          <Blob containerStyles="w-[480px] h-[480px]" />
          {/* profile picture */}
          <Image
            src={avatarImg}
            alt="profile"
            width={400}
            height={400}
            quality={100}
            className="absolute -top-12 left-[60px]"
          />
          {/* overlay gradient */}
          <div className="w-full h-[164px] bg-pink-50/10 absolute bottom-0 left-0 right-0"></div>
          {/*  */}
          {/* 1:02:17 */}
          {/*  */}
        </div>
      </div>
    </motion.section>
  );
};

export default page;

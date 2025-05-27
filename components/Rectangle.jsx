"use client";
import { motion } from "framer-motion";

//variants-
const rectangleVariants = {
  initial: {
    y: "-100%",
    height: "100%",
  },
  animate: {
    y: "0%",
    height: "0%",
  },
  exit: {
    y: ["0%", "-100%"],
    height: ["0%", "100%"],
  },
};

const Rectangle = () => {
  return (
    <>
      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0, duration: 0.35, ease: [0.63, 0, 0.17, 1] }}
        className="fixed top-full w-screen h-screen z-30 bg-[#0f172a]"
      />

      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.05, duration: 0.35, ease: [0.63, 0, 0.17, 1] }}
        className="fixed top-full w-screen h-screen z-20 bg-[#0f172a]"
      />

      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.15, duration: 0.45, ease: [0.63, 0, 0.17, 1] }}
        className="fixed top-full w-screen h-screen z-10 bg-[#152042]"
      />

      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.25, duration: 0.45, ease: [0.63, 0, 0.17, 1] }}
        className="fixed top-full w-screen h-screen z-10 bg-[#1f2d5c]"
      />
    </>
  );
};

export default Rectangle;

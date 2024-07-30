"use client";

import { motion } from "framer-motion";

import feedBack from "@/assets/images/FeedBack.jpg";
import Image from "next/image";

const FeedBack = () => {
  const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });

  const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  });

  const zoomIn = (delay, duration) => ({
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: "easeOut",
      },
    },
  });

  return (
    <section
      className={`mx-auto mt-28 mb-20 lg:w-[1000px] flex items-center justify-center lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto w-[90%] sm:w-[80%] lg:w-full flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative shadow-[#5d3a3e] shadow-lg"
        >
          <div className="feedback-gradient" />
          <div className="mt-8">
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              The Art of Tiny Trees
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Bonsai Enthusiast
            </p>
          </div>
          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
            “Bonsai is an art that teaches patience, care, and appreciation for
            nature's beauty. Each tree, no matter how small, holds a universe of
            wonder and tranquility.”
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <Image
            src={feedBack}
            alt="FeedBack Image"
            className="w-full lg:h-[610px] h-auto min-h-[210px] shadow-[#5d3a3e] shadow-lg object-cover rounded-[40px]"
          />

          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%]"
          >
            <div className="w-[155px] h-[155px] rounded-full bg-gradient-to-br from-[#5d3a3e] to-[#360C14] opacity-25 shadow-lg object-contain" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeedBack;

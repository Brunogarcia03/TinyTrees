"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import PineBonsai from "@/assets/images/PineBonsai.jpg";
import Serissa from "@/assets/images/Serissa2.jpg";
import wollensak from "@/assets/images/wollensak.jpg";

const GetStarted = () => {
  const [position, setPosition] = useState("pos1");

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

  const planetVariants = (direction) => ({
    hidden: {
      x: direction === "left" ? "-100%" : "100%",
      rotate: 120,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        duration: 1.8,
        delay: 0.5,
      },
    },
  });

  const startingFeatures = [
    "Discover a bonsai that captivates your heart and soul",
    "Care for your bonsai with dedication and patience",
    "Witness the art of nature unfold before your eyes",
  ];

  return (
    <AnimatePresence mode="popLayout">
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        className="mx-auto my-36 lg:w-[1024px] flex items-center justify-center lg:flex-row flex-col gap-8"
      >
        <motion.div
          layout
          variants={planetVariants("left")}
          transition={{
            duration: 2,
            ease: "easeIn",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
          className="flex items-center justify-center rounded-full relative h-[400px] w-[500px]"
        >
          <motion.div
            layoutId="pos3"
            className={`absolute ${
              position === "pos3"
                ? "bottom-2 left-[33%] z-[40]"
                : "right-5 top-5 z-[0]"
            } w-60 h-60 rounded-xl shadow-[#5d3a3e] shadow-lg object-cover cursor-pointer`}
            onClick={() => setPosition("pos3")}
          >
            <Image
              className="absolute object-cover rounded-xl w-full h-full"
              src={Serissa}
              alt="Image tiny tree one"
            />
          </motion.div>
          <motion.div
            layoutId="pos2"
            className={`absolute ${
              position === "pos2"
                ? "bottom-2 left-[33%] z-[50]"
                : "top-16 left-5 z-[20]"
            } w-60 h-60 rounded-xl shadow-[#5d3a3e] shadow-lg object-cover cursor-pointer`}
            onClick={() => setPosition("pos2")}
          >
            <Image
              className="absolute object-cover rounded-xl w-full h-full"
              src={PineBonsai}
              alt="Image tiny tree two"
            />
          </motion.div>
          <motion.div
            layoutId="pos1"
            className={`absolute ${
              position === "pos1"
                ? "bottom-2 left-[33%] z-[50]"
                : position === "pos2"
                ? "top-16 left-5 z-[20]"
                : "right-5 top-5 z-0"
            } w-60 h-60 rounded-xl shadow-[#5d3a3e] shadow-lg object-cover cursor-pointer`}
            onClick={() => setPosition("pos1")}
          >
            <Image
              className="absolute object-cover rounded-xl w-full h-full"
              src={wollensak}
              alt="Image tiny tree three"
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="w-[90%] lg:flex-[0.75] flex justify-center flex-col"
        >
          <motion.p className="font-thin">| How Metaversus Works</motion.p>
          <motion.h2 className="font-bold text-5xl">
            Get started with just a few clicks
          </motion.h2>
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <div
                className="flex items-center justify-center flex-row"
                key={index}
              >
                <div className="flex items-center justify-center w-[70px] h-[70px] rounded-3xl bg-[#114040]">
                  <p className="font-bold text-3xl text-white text-center">
                    {index}
                  </p>
                </div>
                <p className="flex-1 ml-[20px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default GetStarted;

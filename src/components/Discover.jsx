"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Img1 from "@/assets/images/2f1ps76cqzugT1iPT4tjnx-bdl2YX2HCeHkprGzWSZk.jpg";
import Img2 from "@/assets/images/Serissa2.jpg";
import Img3 from "@/assets/images/bAxau46eAXcEaEqNYdE6gUt970zEGGlR1EmzGQ1OEtA.jpg";

export const Discover = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-[86vh] 2xl:max-w-[1280px] w-full mx-auto">
      <motion.div
        initial={{ translateX: -100, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="relative text-center"
      >
        <h1 className="text-3xl italic my-4">The art of tiny trees</h1>
        <h5 className="w-[400px] text-2xl z-[2]">
          Discover the delicate beauty and intricate craftsmanship behind
          miniature trees. From bonsais to tiny terrariums, explore how these
          small wonders bring a touch of nature into any space.
        </h5>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="absolute -bottom-6 w-[200px] h-[150px] bg-[#5d3a3e] blur-3xl rounded-full -z-0"
        />
      </motion.div>

      <motion.div
        initial={{ translateX: 100, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="relative h-[400px] w-[500px]"
      >
        <motion.div
          animate={{
            translateY: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeIn",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
          }}
          className="absolute right-5 top-5 w-60 h-60 rounded-xl shadow-[#5d3a3e] shadow-lg object-cover z-0"
        >
          <Image
            className="absolute object-cover rounded-xl w-full h-full"
            src={Img1}
            alt="Image tiny tree one"
          />
        </motion.div>
        <motion.div
          animate={{
            translateY: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeIn",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
          }}
          className="absolute top-16 left-5 w-60 h-60 rounded-xl shadow-[#5d3a3e] shadow-lg object-cover z-0"
        >
          <Image
            className="absolute object-cover rounded-xl w-full h-full"
            src={Img3}
            alt="Image tiny tree two"
          />
        </motion.div>
        <motion.div
          animate={{
            translateY: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeIn",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
          }}
          className="absolute bottom-2 left-[33%] w-60 h-60 rounded-xl shadow-[#5d3a3e] shadow-lg object-cover z-0"
        >
          <Image
            className="absolute object-cover rounded-xl w-full h-full"
            src={Img2}
            alt="Image tiny tree three"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Image from "next/image";

import JuniperBonsai from "@/assets/images/JuniperBonsai.jpg";
import BoxwoodBonsai from "@/assets/images/BoxwoodBonsai.jpg";
import HawthornBonsai from "@/assets/images/HawthornBonsai.jpg";

const Insight = () => {
  const insightItems = [
    {
      img: JuniperBonsai,
      title: "The Art of Tiny Trees",
      subtitle:
        "The delicate art of cultivating tiny trees transforms spaces into serene landscapes. Discover how these miniature wonders bring tranquility and beauty to your environment. Each bonsai tells a story of patience, care, and artistic expression.",
    },
    {
      img: BoxwoodBonsai,
      title: "7 Tips to Master Bonsai Gardening",
      subtitle:
        "Simple steps to easily master the art of Bonsai gardening. Learn how to shape and nurture your bonsai with these easy-to-follow tips, ensuring healthy and vibrant growth. From watering techniques to pruning strategies, become a bonsai expert in no time.",
    },
    {
      img: HawthornBonsai,
      title: "Explore the World of Bonsai",
      subtitle:
        "With one platform, you can explore the serene and diverse world of Bonsai trees. Embark on a journey through various bonsai species and styles. Experience the beauty and tranquility of bonsai gardens from around the world, right at your fingertips.",
    },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2,
      },
    },
  };

  const fadeIn = (
    direction = "up",
    type = "spring",
    delay = 0,
    duration = 1
  ) => ({
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

  const Magnetic = () => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const x = (clientX - left - width / 2) * 0.2;
      const y = (clientY - top - height / 2) * 0.2;
      setPosition({ x, y });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    };

    return (
      <motion.div
        id="Magnetic"
        ref={ref}
        style={{ x: position.x, y: position.y }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full border-[1px] ${
          isHovered
            ? "bg-white text-[#114040]"
            : "bg-transparent border-white text-white"
        }`}
      >
        <FaArrowRightFromBracket className="w-[40%] h-[40%] object-contain" />
      </motion.div>
    );
  };

  return (
    <motion.section className="mt-36 mb-8 lg:mt-0">
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="text-3xl text-center"
      >
        Insight about Tiny Trees
      </motion.h1>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        className="mx-auto my-5 lg:w-[1024px] flex items-center justify-center lg:flex-row flex-col gap-8"
      >
        <div className="flex flex-col gap-[30px]">
          {insightItems.map((item, index) => (
            <motion.article
              key={index}
              variants={fadeIn("up", "spring", index * 0.5, 1)}
              className="mx-auto w-[90%] lg:w-[1024px] flex lg:flex-row flex-col justify-between items-center text-center"
            >
              <Image
                src={item.img}
                alt="bonsai"
                className="w-[270px] md:w-[320px] h-[250px] rounded-xl shadow-[#5d3a3e] shadow-lg object-cover"
              />
              <div className="w-full flex justify-center lg:justify-between items-center">
                <div className="lg:ml-8 mt-3 flex flex-col max-w-[650px]">
                  <h4 className="font-normal lg:text-left lg:text-[42px] text-[26px] text-white">
                    {item.title}
                  </h4>
                  <p className="mt-3 lg:text-left font-normal text-[18px] text-[#B0B0B0] leading-[26.4px]">
                    {item.subtitle}
                  </p>
                </div>
                <Magnetic />
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Insight;

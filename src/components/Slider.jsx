"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import JuniperBonsai from "@/assets/images/JuniperBonsai.jpg";
import BoxwoodBonsai from "@/assets/images/BoxwoodBonsai.jpg";
import SerissaBonsai from "@/assets/images/SerissaBonsai.jpg";
import AzaleaBonsai from "@/assets/images/Ormp9E0FnjONrFUjC1EA2kBnAheMLA6ESxLGW4klVBo.jpg";
import HawthornBonsai from "@/assets/images/HawthornBonsai.jpg";

const items = [
  {
    id: 1,
    title: "Juniper Bonsai",
    image: JuniperBonsai,
  },
  {
    id: 2,
    title: "Boxwood Bonsai",
    image: BoxwoodBonsai,
  },
  {
    id: 3,
    title: "Serissa Bonsai",
    image: SerissaBonsai,
  },
  {
    id: 4,
    title: "Azalea Bonsai",
    image: AzaleaBonsai,
  },
  {
    id: 5,
    title: "Hawthorn Bonsai",
    image: HawthornBonsai,
  },
];

const Card = ({ item, setActive, active, direction }) => {
  return (
    <motion.div
      key={item.id}
      onClick={() => setActive(item.id)}
      className="relative flex items-center justify-center w-full lg:min-w-[180px] h-[100px] lg:h-[580px] rounded-xl"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: item.id * 0.4,
          duration: 0.9,
          ease: "easeIn",
        },
      }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      animate={
        active === item.id
          ? direction === "Y"
            ? { height: "300px", maxWidth: "600px" }
            : { minWidth: "300px", height: "580px" }
          : direction === "Y"
          ? { height: "100px", maxWidth: "600px" }
          : { minWidth: "180px", height: "580px" }
      }
      transition={{
        duration: 0.9,
        ease: "easeInOut",
      }}
      layoutId={`item-${item.id}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        className="absolute w-full h-full object-cover rounded-xl"
        priority={item.id <= 3 ? true : false} // Ajuste de prioridad para las primeras tres imágenes
      />
      <motion.h3
        className="absolute font-semibold sm:text-[32px] text-[24px] lg:bottom-5 text-white text-center"
        animate={
          active === item.id
            ? direction === "Y"
              ? { y: 100 }
              : { y: 0 }
            : { y: 0 }
        }
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
      >
        {item.title}
      </motion.h3>
    </motion.div>
  );
};

export const Slider = () => {
  const [active, setActive] = useState(null);
  const [direction, setDirection] = useState("Y");

  const handleResize = () => {
    if (window.innerWidth >= 1139) {
      setDirection("X");
      setActive(null);
    } else {
      setDirection("Y");
      setActive(null);
    }
  };

  useEffect(() => {
    handleResize(); // Set the initial direction based on the initial window width
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AnimatePresence mode="popLayout">
      <motion.h1
        key="title"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="text-3xl italic my-4 text-center mt-20 lg:mt-0"
      >
        Tiny Trees Collection
      </motion.h1>
      <motion.div
        key="container"
        layout
        className={`flex ${
          direction === "X" ? "flex-row" : "flex-col"
        } items-center justify-center gap-5 max-w-[600px] mx-5 sm:mx-auto lg:w-full h-full my-8`}
      >
        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
            active={active}
            setActive={setActive}
            direction={direction}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

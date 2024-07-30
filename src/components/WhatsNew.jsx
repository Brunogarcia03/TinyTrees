"use client";

import { BsHeadsetVr, BsFlower1 } from "react-icons/bs";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import Image from "next/image";

import BonsaiAzalea from "@/assets/images/BonsaiAzaleaWhatsNews.jpg";

const WhatsNew = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const onHandleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const bounds = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - bounds.left);
    mouseY.set(clientY - bounds.top);
  };

  const h2Text = "What's new about Tiny Trees?";

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

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      exit="hidden"
      className="mx-auto my-28 lg:w-[1024px] flex items-center justify-center lg:flex-row flex-col gap-8"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex justify-center flex-col w-[90%] lg:w-[50%]"
      >
        <motion.p className="font-thin">| How Metaversus Works</motion.p>
        <motion.h2 className="font-bold text-5xl">{h2Text}</motion.h2>
        <article className="flex justify-between mt-8">
          <figure>
            <div className="flex items-center justify-center w-[70px] h-[70px] rounded-3xl bg-[#114040]">
              <BsFlower1 className="font-bold text-white text-center w-[30px] h-[30px]" />
            </div>
            <h5 className="mt-3 font-bold text-3xl">
              Improved Bonsai Care Tips
            </h5>
            <p className="mt-3 font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
              Our latest update includes detailed care tips to help your bonsai
              thrive and flourish.
            </p>
          </figure>
          <figure>
            <div className="flex items-center justify-center w-[70px] h-[70px] rounded-3xl bg-[#114040]">
              <BsHeadsetVr className="font-bold text-white text-center w-[30px] h-[30px]" />
            </div>
            <h5 className="mt-3 font-bold text-3xl">
              Virtual Bonsai Garden Tour
            </h5>
            <p className="mt-3 font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
              Experience a virtual tour of some of the most stunning bonsai
              gardens around the world.
            </p>
          </figure>
        </article>
      </motion.div>
      <motion.div
        layout
        variants={planetVariants("right")}
        transition={{
          duration: 2,
          ease: "easeIn",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        onMouseMove={onHandleMouseMove}
        className="flex items-center justify-center rounded-full relative h-[400px] w-[400px]"
      >
        <Image
          src={BonsaiAzalea}
          alt="Image What's New Bonsai Azalea"
          className="absolute object-cover rounded-xl w-full h-full shadow-[#5d3a3e] shadow-lg"
        />
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background: useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(93, 58, 62, 0.5), transparent)`,
          }}
        />
      </motion.div>
    </motion.section>
  );
};

export default WhatsNew;

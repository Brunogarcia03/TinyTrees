"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBarsStaggered, FaSistrix } from "react-icons/fa6";
import Link from "next/link";

const Navbar = () => {
  const navVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="relative flex items-center justify-between p-8 lg:w-[1024px] md:mx-auto"
    >
      <FaSistrix className="w-6 h-6 cursor-pointer" />
      <Link href={"/"}>
        <h1 className="text-4xl italic z-10">The art of tiny trees</h1>
      </Link>
      <FaBarsStaggered className="w-6 h-6 cursor-pointer" />
    </motion.nav>
  );
};

export default Navbar;

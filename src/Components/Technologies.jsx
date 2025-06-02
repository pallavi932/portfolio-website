import React from "react";
import { RiReactjsLine } from "react-icons/ri"; // React Icon (Remix Icons)
import { TbBrandNextjs } from "react-icons/tb"; // Next.js Icon (Tabler Icons)
import { SiMongodb } from "react-icons/si"; // MongoDB Icon (Simple Icons)
import { DiNodejs } from "react-icons/di"; // Node.js Icon (Devicons)
import { BiLogoPostgresql } from "react-icons/bi"; // PostgreSQL Icon (Boxicons)
import { FaPython } from "react-icons/fa"; // Python Icon (Font Awesome)
import { SiTailwindcss } from "react-icons/si"; // Tailwind CSS Icon (Simple Icons)
import { SiDocker } from "react-icons/si"; // Docker Icon (Simple Icons)
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
          
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiNodejs className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-6xl"
      >  </motion.h1>
    </div>
  );
};

export default Technologies;
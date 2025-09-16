"use client";
import { technologies } from "@/app/constants";
import { SectionWrapper } from "./HigherOrderComponents";
import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/app/utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText text-center">Technologies I work with</p>
        <h2 className="sectionHeadText text-center">
          <span className="rainbow-text-gradient">Tech Stack.</span>
        </h2>
      </motion.div>

      <motion.div
        className="flex flex-row flex-wrap justify-center gap-10 mt-20 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent-2/5 to-accent-3/5 rounded-3xl blur-3xl -z-10"></div>

        {technologies.map((technology, index) => (
          <motion.div
            className="w-28 h-28 group"
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <BallCanvas icon={technology.icon} />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");

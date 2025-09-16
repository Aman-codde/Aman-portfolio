"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { introduction } from "../constants/profile";
import { fadeIn, textVariant } from "@/app/utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="xs:w-[250px] w-full"
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full rainbow-gradient p-px rounded-[20px] shadow-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-tertiary/80 backdrop-blur-sm rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col glass-effect group hover:bg-tertiary/90 transition-all duration-300">
            <motion.div
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={icon}
                width={64}
                height={64}
                alt={title}
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
            <h3 className="text-white text-[20px] font-bold text-center group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">
          <span className="rainbow-text-gradient">Overview.</span>
        </h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent-2/5 to-accent-3/5 rounded-2xl blur-3xl"></div>
        <div className="relative bg-black-100/50 backdrop-blur-sm rounded-2xl p-8 border border-accent/20">
          <motion.p
            className="text-secondary text-[17px] max-w-[3xl] leading-[30px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {introduction}
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="mt-20 flex flex-wrap gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");

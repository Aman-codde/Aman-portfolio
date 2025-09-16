"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { testimonials } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type FeedbackCardProps = {
  index: number;
  testimonial: string;
  name: string;
  link: string;
  image: string;
};

const FeedbackCard = ({
  index,
  testimonial,
  name,
  link,
  image,
}: FeedbackCardProps) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">&quot;</p>

    <div className="mt-1 ">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span>
            {name}
          </p>
        </div>
        <Link href={link}>
          <Image
            src={image}
            width={40}
            height={40}
            alt={`feedback by ${name}`}
            className="w-10 h-10 rounded-full object-cover "
          />
        </Link>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 relative">
      <div className="padding bg-gradient-to-r from-accent/10 via-accent-2/10 to-accent-3/10 rounded-2xl min-h-[220px] flex items-center justify-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent-2/5 to-accent-3/5 rounded-2xl blur-3xl"></div>

        <motion.div
          variants={textVariant()}
          className="text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="sectionHeadText">
            <span className="rainbow-text-gradient">
              Let&apos;s build something great.
            </span>
          </h2>
          <p className="sectionSubText mt-4">
            Open to{" "}
            <span className="purple-text-gradient font-semibold">
              Front-end
            </span>{" "}
            and{" "}
            <span className="blue-text-gradient font-semibold">Full Stack</span>{" "}
            roles.
          </p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="px-6 py-3 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30 neon-glow">
              React & Next.js
            </span>
            <span className="px-6 py-3 bg-accent-2/20 text-accent-2 rounded-full text-sm font-medium border border-accent-2/30 neon-glow">
              TypeScript
            </span>
            <span className="px-6 py-3 bg-accent-3/20 text-accent-3 rounded-full text-sm font-medium border border-accent-3/30 neon-glow">
              Node.js
            </span>
            <span className="px-6 py-3 bg-success/20 text-success rounded-full text-sm font-medium border border-success/30 neon-glow">
              MongoDB
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

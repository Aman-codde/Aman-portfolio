"use client";
import { SectionWrapper } from "@/app/components/HigherOrderComponents";
import { experiences as constantsExperiences } from "@/app/constants";
import { experiences as profileExperiences } from "@/app/constants/profile";
import { textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
  experience: (typeof constantsExperiences)[0] | (typeof profileExperiences)[0];
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background:
          "linear-gradient(135deg, hsl(var(--color-tertiary) / 0.8), hsl(var(--color-black-100) / 0.6))",
        color: "hsl(var(--color-white-100))",
        backdropFilter: "blur(10px)",
        border: "1px solid hsl(var(--color-accent) / 0.2)",
        borderRadius: "20px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
      contentArrowStyle={{
        borderRight: "7px solid hsl(var(--color-accent))",
      }}
      date={
        ("date" in experience
          ? experience.date
          : (experience as any).period) as string
      }
      iconStyle={{
        background:
          "linear-gradient(135deg, hsl(var(--color-accent)), hsl(var(--color-accent-2)))",
        boxShadow: "0 0 20px hsl(var(--color-accent) / 0.5)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            width={48}
            height={48}
            alt={
              ("company_name" in experience
                ? (experience as any).company_name
                : (experience as any).company) as string
            }
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-white text-[24px] font-bold rainbow-text-gradient">
          {(experience as any).title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {
            ("company_name" in experience
              ? (experience as any).company_name
              : (experience as any).company) as string
          }
        </p>
        {((experience as any).start || (experience as any).end) && (
          <p className="text-muted text-[12px] mt-1">
            {(experience as any).start} – {(experience as any).end}
          </p>
        )}
        {(experience as any).slug && (
          <div className="mt-3">
            <a
              href={`/experience/${(experience as any).slug}`}
              className="text-accent text-[14px] hover:underline neon-glow px-3 py-1 rounded-full bg-accent/10 border border-accent/30 transition-all duration-300 hover:bg-accent/20"
            >
              Read more →
            </a>
          </div>
        )}
      </motion.div>

      <motion.ul
        className="mt-5 list-disc ml-5 space-y-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {(
          ("points" in experience
            ? (experience as any).points
            : (experience as any).bullets) as string[]
        ).map((point, index) => (
          <motion.li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider flex items-start gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <span className="text-accent text-lg">•</span>
            <span>{point}</span>
          </motion.li>
        ))}
        {(experience as any).details && (
          <motion.li
            className="text-white-100 text-[14px] pl-1 tracking-wider flex items-start gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <span className="text-accent text-lg">•</span>
            <span>{(experience as any).details}</span>
          </motion.li>
        )}
      </motion.ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText text-center">What I have done so far</p>
        <h2 className="sectionHeadText text-center">
          <span className="rainbow-text-gradient">Work Experience.</span>
        </h2>
      </motion.div>

      <motion.div
        className="mt-20 flex flex-col relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent-2/5 to-accent-3/5 rounded-3xl blur-3xl -z-10"></div>

        <VerticalTimeline>
          {(profileExperiences.length
            ? profileExperiences
            : constantsExperiences
          ).map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

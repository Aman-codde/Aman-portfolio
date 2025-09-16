"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tilt } from "react-tilt";
import { projects as constantsProjects } from "../constants";
import {
  projects as profileProjects,
  projectsIntro,
} from "../constants/profile";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type ProjectCardProps = {
  index: number;
  name: string;
  company?: string;
  role?: string;
  period?: string;
  start?: string;
  end?: string;
  location?: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link?: string;
  deploy_link: string;
  platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web";
  slug?: string;
};



const ProjectCard = ({
  index,
  name,
  description,
  company,
  role,
  period,
  start,
  end,
  location,
  tags,
  image,
  source_code_link,
  deploy_link,
  platform,
  slug,
}: ProjectCardProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            width={1000}
            height={1000}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {source_code_link && (
              <Link
                href={source_code_link}
                target="_blank"
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image
                  src="/tech/github.webp"
                  width={24}
                  height={24}
                  alt="source-code"
                  className="object-contain"
                />
              </Link>
            )}
            <Link
              href={deploy_link}
              target="_blank"
              className="black-gradient w-10 h-10 ml-2 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={
                  platform === "Netlify"
                    ? "/tech/netlify.webp"
                    : platform === "Vercel"
                    ? "/tech/vercel.svg"
                    : platform === "Wordpress"
                    ? "/tech/wordpress.webp"
                    : platform === "Web"
                    ? "/web.webp"
                    : "/tech/figma.webp"
                }
                width={24}
                height={24}
                alt="source code"
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          {(company || role || period) && (
            <p className="mt-1 text-muted text-[13px]">
              {[company, role, period].filter(Boolean).join(" • ")}
            </p>
          )}
          {location && (
            <p className="text-secondary text-[12px] mt-0.5">{location}</p>
          )}
          {(start || end) && (
            <p className="text-secondary text-[12px] mt-0.5">
              {start} – {end}
            </p>
          )}
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        {slug && (
          <div className="mt-4">
            <Link
              href={`/projects/${slug}`}
              className="text-accent hover:underline text-[14px]"
            >
              Read more →
            </Link>
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="sectionHeadText">
          <span className="rainbow-text-gradient">Projects.</span>
        </h2>
      </motion.div>

      <motion.div
        className="mt-20 space-y-8 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent-2/5 to-accent-3/5 rounded-3xl blur-3xl -z-10"></div>

        {(profileProjects.length ? profileProjects : constantsProjects).map(
          (project, index) => (
            <motion.div
              key={`project-${index}`}
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glowing background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent-2/10 to-accent-3/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Tree-like structure */}
              <div className="flex items-start gap-4 relative z-10">
                {/* Vertical line with enhanced styling */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-accent flex-shrink-0 mt-2 neon-glow"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  ></motion.div>
                  {index <
                    (profileProjects.length
                      ? profileProjects
                      : constantsProjects
                    ).length -
                      1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-accent/50 via-accent-2/30 to-transparent mt-2"></div>
                  )}
                </div>

                {/* Project content with enhanced styling */}
                <div className="flex-1 bg-black-100/30 backdrop-blur-sm rounded-2xl p-6 border border-accent/20 group-hover:border-accent/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-white text-2xl font-bold rainbow-text-gradient group-hover:scale-105 transition-transform duration-300">
                      {project.name}
                    </h3>
                    <span className="text-accent text-sm font-medium bg-accent/20 px-3 py-1 rounded-full border border-accent/30 neon-glow">
                      {project.period}
                    </span>
                  </div>

                  <div className="ml-4 space-y-3">
                    <div className="flex items-center gap-2 text-secondary">
                      <span className="text-accent">└─</span>
                      <span className="font-medium">{project.company}</span>
                      {project.location && (
                        <>
                          <span className="text-muted">•</span>
                          <span className="text-muted">{project.location}</span>
                        </>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-secondary">
                      <span className="text-accent">└─</span>
                      <span className="font-medium">Role:</span>
                      <span>{project.role}</span>
                    </div>

                    <div className="flex items-center gap-2 text-secondary">
                      <span className="text-accent">└─</span>
                      <span className="font-medium">Description:</span>
                      <span>{project.description}</span>
                    </div>

                    <div className="flex items-center gap-2 text-secondary">
                      <span className="text-accent">└─</span>
                      <span className="font-medium">Tech Stack:</span>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag.name}
                            className={`text-xs px-2 py-1 rounded-full ${tag.color} bg-black-100/50`}
                          >
                            {tag.name}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="text-xs text-muted">
                            +{project.tags.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {project.slug && (
                      <div className="flex items-center gap-2 mt-4">
                        <span className="text-accent">└─</span>
                        <Link
                          href={`/projects/${project.slug}`}
                          className="text-accent hover:underline text-sm font-medium"
                        >
                          View Details →
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "");

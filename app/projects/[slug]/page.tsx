"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects as profileProjects } from "@/app/constants/profile";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/app/utils/motion";

type Params = { params: { slug: string } };

export default function ProjectDetailPage({ params }: Params) {
  const project = profileProjects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="paddingX paddingY max-w-5xl mx-auto">
      <motion.div
        variants={textVariant()}
        className="rounded-2xl p-6 bg-gradient-to-r from-accent/20 via-purple-500/10 to-transparent ring-1 ring-black-100"
      >
        <Link href="/" className="text-accent hover:underline">
          ← Back
        </Link>
        <h1 className="sectionHeadText mt-2">{project.name}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md border border-accent/30 bg-accent/10 px-2 py-1 text-[12px] text-accent">
            Client
          </span>
          <p className="sectionSubText !mt-0">
            {project.company}
            {project.location ? ` - ${project.location}` : ""}
          </p>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md border border-purple-400/30 bg-purple-400/10 px-2 py-1 text-[12px] text-purple-200">
            Role
          </span>
          <p className="text-secondary text-[14px]">{project.role}</p>
          {(project.start || project.end) && (
            <p className="text-secondary text-[13px]">
              • {project.start} – {project.end}
            </p>
          )}
        </div>
      </motion.div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="rounded-2xl overflow-hidden ring-1 ring-black-100 bg-black-100"
        >
          <Image
            src={project.image}
            alt={project.name}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("", "", 0.15, 1)}
          className="rounded-2xl p-6 bg-tertiary/60 ring-1 ring-black-100"
        >
          <h3 className="text-white font-semibold text-lg">Overview</h3>
          <p className="mt-3 text-secondary text-[15px] leading-[28px]">
            {project.description}
          </p>
          {project.details && (
            <p className="mt-3 text-white-100 text-[14px] leading-[26px]">
              {project.details}
            </p>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t.name}
                className={`rounded-full border border-white/10 bg-black-200/40 px-3 py-1 text-[12px] ${t.color}`}
              >
                #{t.name}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={project.deploy_link}
              target="_blank"
              className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-white transition-transform hover:-translate-y-0.5 hover:bg-accent/80"
            >
              View Live
            </Link>
            {project.source_code_link && (
              <Link
                href={project.source_code_link}
                target="_blank"
                className="inline-flex items-center justify-center rounded-md bg-black-100 px-4 py-2 text-white transition-transform hover:-translate-y-0.5 hover:bg-black-100/80"
              >
                Source Code
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

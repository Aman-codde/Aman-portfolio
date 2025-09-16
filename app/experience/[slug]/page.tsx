"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { experiences as profileExperiences } from "@/app/constants/profile";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/app/utils/motion";

type Params = { params: { slug: string } };

export default function ExperienceDetailPage({ params }: Params) {
  const exp = profileExperiences.find((e) => e.slug === params.slug);
  if (!exp) return notFound();

  return (
    <main className="paddingX paddingY max-w-5xl mx-auto">
      <motion.div
        variants={textVariant()}
        className="rounded-2xl p-6 bg-gradient-to-r from-accent/20 via-purple-500/10 to-transparent ring-1 ring-black-100"
      >
        <Link href="/" className="text-accent hover:underline">
          ← Back
        </Link>
        <h1 className="sectionHeadText mt-2">{exp.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md border border-accent/30 bg-accent/10 px-2 py-1 text-[12px] text-accent">
            Client
          </span>
          <p className="sectionSubText !mt-0">
            {exp.company}
            {exp.location ? ` - ${exp.location}` : ""}
          </p>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md border border-purple-400/30 bg-purple-400/10 px-2 py-1 text-[12px] text-purple-200">
            Role
          </span>
          <p className="text-secondary text-[14px]">{exp.title}</p>
          {(exp.start || exp.end) && (
            <p className="text-secondary text-[13px]">
              • {exp.start} – {exp.end}
            </p>
          )}
        </div>
      </motion.div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <motion.div
          variants={fadeIn("", "", 0.2, 1)}
          className="rounded-2xl p-6 bg-tertiary/60 ring-1 ring-black-100"
        >
          <h3 className="text-white font-semibold text-lg mb-4">Overview</h3>
          {exp.details && (
            <p className="text-white-100 leading-[28px] text-[15px] mb-4">
              {exp.details}
            </p>
          )}
          <h4 className="text-white font-medium text-base mb-3">
            Key Responsibilities
          </h4>
          <ul className="space-y-3">
            {exp.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2"></span>
                <span className="text-secondary text-[14px] leading-[24px]">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.25, 1)}
          className="rounded-2xl p-6 bg-black-100/60 ring-1 ring-black-100"
        >
          <h3 className="text-white font-semibold text-lg mb-4">
            Experience Details
          </h3>
          <div className="space-y-4">
            <div>
              <span className="text-accent text-sm font-medium">Company</span>
              <p className="text-white text-base">{exp.company}</p>
            </div>
            <div>
              <span className="text-accent text-sm font-medium">Position</span>
              <p className="text-white text-base">{exp.title}</p>
            </div>
            {exp.location && (
              <div>
                <span className="text-accent text-sm font-medium">
                  Location
                </span>
                <p className="text-white text-base">{exp.location}</p>
              </div>
            )}
            <div>
              <span className="text-accent text-sm font-medium">Duration</span>
              <p className="text-white text-base">{exp.period}</p>
              {(exp.start || exp.end) && (
                <p className="text-secondary text-sm">
                  {exp.start} – {exp.end}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

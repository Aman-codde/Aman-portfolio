"use client";
import { slideIn } from "@/app/utils/motion";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "./HigherOrderComponents";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_91ssn8g",
        "template_jjegxdr",
        {
          from_name: form.name,
          to_name: "Amandeep Kaur Benipal",
          from_email: form.email,
          to_email: "eramankaur2015@gmail.com",
          message: form.message,
        },
        "VeFeVdEHL9F9_i6xp"
      )
      .then(() => {
        setLoading(false);
        alert(
          "A humble thanks for reaching me out. I will respond to you as soon as possible."
        );
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        alert("Sorry!! Something went wrong!!");
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent-2/5 to-accent-3/5 rounded-3xl blur-3xl -z-10"></div>

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100/50 backdrop-blur-sm p-8 rounded-2xl border border-accent/20 relative"
      >
        <p className="heroSubText">Get in Touch</p>
        <h3 className="heroHeadText">
          <span className="rainbow-text-gradient">Contact.</span>
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <motion.label
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white font-medium mb-4">Your Name.</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary/80 backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-accent/20 focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all duration-300 font-medium"
            />
          </motion.label>
          <motion.label
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-white font-medium mb-4">Your Email.</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary/80 backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-accent/20 focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all duration-300 font-medium"
            />
          </motion.label>
          <motion.label
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-white font-medium mb-4">Your Message.</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary/80 backdrop-blur-sm py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-accent/20 focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all duration-300 font-medium resize-none"
            />
          </motion.label>
          <motion.button
            type="submit"
            className="rainbow-gradient py-3 px-8 outline-none w-fit text-white font-bold shadow-lg rounded-xl hover:scale-105 transition-all duration-300 neon-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-accent-2/10 to-accent-3/10 rounded-2xl blur-2xl"></div>
        <div className="relative z-10 w-full h-full">
          <EarthCanvas />
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiX, SiKaggle } from "react-icons/si";

interface BlockProps {
  className?: string;
  children: React.ReactNode;
  whileHover?: any;
}

const Block: React.FC<BlockProps> = ({ className, children, whileHover, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: { scale: 0.5, y: 50, opacity: 0 },
        animate: { scale: 1, y: 0, opacity: 1 },
      }}
      whileHover={whileHover}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge("col-span-4 rounded-xl border border-gray-100 bg-white p-6", className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export function Contact() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence>
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-light mb-12 bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-600/50 text-center">
            Let's Connect
          </h2>
          
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.05 }}
            className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
          >
            {/* Header Block */}
            <Block className="col-span-12 row-span-2 md:col-span-6">
              <h3 className="mb-8 text-2xl font-light leading-tight text-gray-800">
                Let's collaborate on something amazing.{" "}
                <span className="text-gray-500">
                  I'm always open to discussing new projects and opportunities.
                </span>
              </h3>
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-1 text-gray-600 hover:text-gray-800"
              >
                Email me <FiArrowRight />
              </a>
            </Block>

            {/* Social Links */}
            <Block whileHover={{ scale: 1.05 }} className="col-span-6 bg-[#0077B5] md:col-span-3">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
                className="grid h-full place-content-center text-3xl text-white">
                <SiLinkedin />
              </a>
            </Block>
            <Block whileHover={{ scale: 1.05 }} className="col-span-6 bg-gray-900 md:col-span-3">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                className="grid h-full place-content-center text-3xl text-white">
                <SiGithub />
              </a>
            </Block>
            <Block whileHover={{ scale: 1.05 }} className="col-span-6 bg-black md:col-span-3">
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer"
                className="grid h-full place-content-center text-3xl text-white">
                <SiX />
              </a>
            </Block>
            <Block whileHover={{ scale: 1.05 }} className="col-span-6 bg-[#20BEFF] md:col-span-3">
              <a href="https://www.kaggle.com/yourprofile" target="_blank" rel="noopener noreferrer"
                className="grid h-full place-content-center text-3xl text-white">
                <SiKaggle />
              </a>
            </Block>

            {/* Location */}
            <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
              <FiMapPin className="text-3xl text-gray-600" />
              <p className="text-center text-lg text-gray-600">India</p>
            </Block>

            {/* Email Subscription */}
            <Block className="col-span-12 md:col-span-9">
              <p className="mb-3 text-lg text-gray-800 font-light">Stay updated with my latest work</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded border border-gray-200 bg-white px-3 py-1.5 transition-colors focus:border-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 whitespace-nowrap rounded bg-gray-900 px-3 py-2 text-sm font-light text-white transition-colors hover:bg-gray-700"
                >
                  <FiMail /> Subscribe
                </button>
              </form>
            </Block>
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
}

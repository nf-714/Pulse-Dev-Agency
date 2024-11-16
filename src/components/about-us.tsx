"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import GridPattern from "./ui/grid-pattern";

export default function AboutUs() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 sm:py-32"
      style={{ backgroundColor: `hsla(222,47%,11%,1)` }}
    >
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-5 mix-blend-overlay"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white/5 shadow-xl shadow-indigo-500/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <motion.div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div variants={itemVariants} className="order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-900">
                <Image
                  alt="Nasif Fuad - Professional Portrait"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  height={600}
                  width={450}
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%208-x4SfVv6JeZnulLNWS8RhJXhdDE6Uwo.png"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="order-2">
            <div className="mx-auto max-w-prose">
              <motion.h2
                variants={itemVariants}
                className="text-base font-semibold leading-7 text-indigo-400"
              >
                About Me
              </motion.h2>
              <motion.h1
                variants={itemVariants}
                className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Nasif Fuad
              </motion.h1>
              <motion.div
                variants={itemVariants}
                className="mt-6 space-y-6 text-base leading-7 text-gray-300"
              >
                <p>
                  As a passionate web developer, I specialize in creating
                  modern, efficient, and user-friendly websites that make a real
                  impact. With a keen eye for design and a strong technical
                  foundation, I transform ideas into seamless digital
                  experiences.
                </p>
                <p>
                  My approach combines creativity with technical expertise,
                  ensuring that every project not only looks beautiful but also
                  performs exceptionally. I&apos;m dedicated to staying current
                  with the latest web technologies and best practices to deliver
                  cutting-edge solutions.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Button
                  variant="default"
                  className="group bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  View Portfolio
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </section>
  );
}

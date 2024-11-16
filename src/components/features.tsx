"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Box, Layers, Zap } from "lucide-react";
import DotPattern from "./ui/dot-pattern";

export default function Features() {
  const style = {
    backgroundColor: "hsla(222,47%,11%,1)",
    backgroundImage: `
    radial-gradient(at 0% 100%, hsla(242,21%,26%,1) 0px, transparent 50%),
    radial-gradient(at 44% 53%, hsla(283,76%,34%,0) 0px, transparent 50%)
  `,
  };
  return (
    <section
      className="p-4 bg-gradient-to-b from-slate-900 to-slate-800"
      style={style}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="text-center mb-20">
          <h2 className="text-white text-4xl md:text-5xl lg:text-5xl font-bold mb-6 tracking-tight">
            From Idea to Impact in Just Days – PulseBD Builds Your Club’s
            Website, Fast and Flawless.
          </h2>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
            PulseBD brings your club online with lightning-fast website
            development. Launch a stunning, event-ready site in weeks not month
            and make your mark on campus!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Box className="w-16 h-16 text-purple-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl text-white font-semibold mb-4">
              Complete Package for Event Management System
            </h3>
            <p className="text-gray-100 leading-relaxed">
              Club founders need easy-to-create event pages with RSVP or
              ticketing for streamlined registration and attendance insights.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Zap className="w-16 h-16 text-purple-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Neccessary Integrations
            </h3>
            <p className="text-gray-100 leading-relaxed">
              All neccessary integrations will be done by me, including payment
              gateways, user authentication, and email marketing platforms.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Layers className="w-16 h-16 text-purple-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Sponsorship & Partnerships Section To Increase Credibility
            </h3>
            <p className="text-gray-100 leading-relaxed">
              A sponsor section showcasing logos, links, and details boosts
              credibility and encourages future partnerships.
            </p>
          </div>
        </div>
      </motion.div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </section>
  );
}

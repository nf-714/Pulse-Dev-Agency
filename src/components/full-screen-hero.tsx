"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import DotPattern from "./ui/dot-pattern";

export default function FullScreenHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundStyle = {
    backgroundColor: `hsla(222,47%,11%,1)`,
    backgroundImage: `
      radial-gradient(at 37% 8%, hsla(229, 100%, 68%, 1) 0px, transparent 50%),
      radial-gradient(at 100% 0%, hsla(266, 100%, 65%, 1) 0px, transparent 50%),
      radial-gradient(at 1% 97%, hsla(227, 0%, 100%, 0.45) 0px, transparent 0%)
    `,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <section
        className="relative w-full h-screen overflow-hidden"
        style={backgroundStyle}
      >
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrollY > 50 ? "bg-trans bg-opacity-90 backdrop-blur-lg" : ""
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link
              href="/"
              className="text-white text-2xl font-bold tracking-tighter"
            >
              Pulse <span className="text-purple-300">Studio</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              {["Solutions", "Pricing", "Resources", "Company"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-white hover:text-purple-200 transition-colors text-sm uppercase tracking-wider"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="hidden md:flex space-x-4 items-center">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-100 transition-colors px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl"
              >
                Book a call
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-purple-900 bg-opacity-95 backdrop-blur-lg z-40 flex flex-col justify-center items-center"
            >
              <div className="flex flex-col space-y-6 text-center">
                {["Solutions", "Pricing", "Resources", "Company"].map(
                  (item) => (
                    <Link
                      key={item}
                      href={`/${item.toLowerCase()}`}
                      className="text-white hover:text-purple-200 transition-colors text-2xl font-semibold"
                    >
                      {item}
                    </Link>
                  )
                )}
                <Button
                  variant="outline"
                  size="lg"
                  className="mt-4 border-white text-white hover:bg-white hover:text-purple-700"
                >
                  Start Free Trial
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Ready to Take Your Club’s Events Online?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            >
              Looking for a sleek, easy-to-manage website to showcase your
              club’s events? Let’s make it happen!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button
                variant="default"
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-100 transition-colors px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl"
              >
                See Pricing
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-100 transition-colors px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl"
              >
                Book a call
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      {/*
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ready to Transform Your Business?
          </h2>
          <div className="max-w-xl mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
              />
              <Button
                type="submit"
                className="bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              >
                Start Free Trial
              </Button>
            </form>
          </div>
        </div>
      </section>*/}
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </div>
  );
}

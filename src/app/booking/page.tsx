"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BookingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    if (typeof window !== "undefined") {
      const script = document.createElement("script");

      window.addEventListener("scroll", handleScroll);
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
              {["Features", "About Me", "Pricing", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().split(" ").join("-")}`}
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
        <div className="my-40 text-center">
          <h1 className="lg:text-4xl text-3xl text-white">
            Book a Session with me
          </h1>
          <h3 className="text-gray-300 text-xl">
            {" "}
            Schedule a 30-minute session with me to discuss your needs, get
            advice. Choose a time that works best for you!
          </h3>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/nasif-fuad-arif/30min"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
        </div>
      </section>
    </div>
  );
}

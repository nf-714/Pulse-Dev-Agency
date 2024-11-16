"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useState } from "react";

export function PremiumPricing() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  console.log(hoveredCard);

  const plans = [
    {
      name: "Basic",
      subtitle: "Static Site",
      price: "5000",
      currency: "BDT",
      description:
        "Perfect for small clubs: A modern and sleek landing page that captivates your audience while being fully responsive and fast.",
      features: [
        "Custom static website with 3-5 pages",
        "Fully responsive and mobile-friendly",
        "Delivery within 5 working days",
        "48-hour support response time",
      ],
    },
    {
      name: "Standard",
      subtitle: "Dynamic Site",
      price: "13000",
      currency: "BDT",
      description:
        "The complete club toolkit: Perfect for event management, sponsor visibility, and streamlined attendee registration—all while maintaining an elegant design.",
      features: [
        "All features of Basic",
        "Dedicated page for events with details",
        "Sponsorship section to showcase partners",
        "Event registration via customized Google Form",
        "Customized Google Form integration for payment links",
        "Social media share buttons for event promotion",
        "Delivery within 1-2 weeks (rush delivery available)",
      ],
    },
    {
      name: "Premium",
      subtitle: "Full-Featured Platform",
      price: "25000",
      currency: "BDT",
      description:
        "All-in-one solution: From member management to ticket sales, this premium package is ideal for clubs hosting large events and seeking advanced functionality.",
      features: [
        "All features of Standard",
        "Member profiles and dashboard",
        "Member sign-up and login system",
        "Ticket sales with payment integration (e.g., BKash)",
        "Email marketing integration",
        "Advanced analytics for event registration",
        "Delivery within 2-3 weeks (rush delivery available)",
      ],
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 py-20 sm:py-32"
      id="pricing"
    >
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-10 mix-blend-overlay" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-800 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base font-semibold uppercase tracking-wide text-indigo-400"
          >
            Pricing Plans
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 bg-gradient-to-r from-indigo-200 to-indigo-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl"
          >
            Choose the right plan for you
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-400"
          >
            Select an affordable plan packed with the best features for engaging
            your audience, creating customer loyalty, and driving sales.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className="relative h-full overflow-hidden rounded-2xl border-2 border-indigo-500/20 bg-gray-900/80 shadow-xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-indigo-500/10">
                {/*index === 1 && (
                  <div className="absolute -right-12 top-6 rotate-45 bg-indigo-500 px-10 py-1 text-sm font-semibold text-white">
                    Popular
                  </div>
                )*/}
                <CardHeader className="space-y-1 p-6 pb-0">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-sm text-gray-400">{plan.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                  <div className="flex items-baseline text-white">
                    <span className="text-5xl font-extrabold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-xl font-semibold">
                      /{plan.currency}
                    </span>
                    <span className="ml-2 text-sm font-medium text-gray-400">
                      pay once
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {plan.description}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <AnimatePresence>
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{
                            duration: 0.3,
                            delay: featureIndex * 0.1,
                          }}
                        >
                          <Check className="mr-2 h-4 w-4 flex-shrink-0 text-indigo-500" />
                          {feature}
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    className="group relative w-full overflow-hidden rounded-lg bg-indigo-600 px-5 py-2.5 text-white transition-all duration-300 hover:bg-indigo-700"
                    variant="default"
                  >
                    <span className="relative z-10">Get started</span>
                    <Sparkles className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 transform text-indigo-300 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

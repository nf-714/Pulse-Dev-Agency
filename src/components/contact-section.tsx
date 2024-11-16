"use client";

import { sendEmail } from "@/app/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Facebook, Mail, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSectionComponent() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formState;
    // Handle form submission here

    if (name.length > 4 && message.length > 50) {
      console.log(email.length, message.length);
      sendEmail(name, email, message);
      toast({
        title: "Email send successfully",
        description: "We will contact you soon",
      });
      return;
    } else {
      toast({
        variant: "destructive",
        title:
          "Warning: Your message is too short—please include brief project details with-in 50 words for a quicker response.",
        description: "Provide proper information",
      });
    }
  };

  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden bg-gray-900"
      id="contact"
    >
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-50"></div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mt-3 bg-gradient-to-r from-indigo-200 to-indigo-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300">
              We&apos;d love to hear from you. Drop us a line and we&apos;ll get
              back to you as soon as possible.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border-gray-700 text-white focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border-gray-700 text-white focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-gray-800 border-gray-700 text-white focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your message here..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Email Us</h3>
                  <p className="mt-1 text-gray-300">
                    We&apos;re here to help. Email us directly at:
                  </p>
                  <a
                    href="mailto:contact@example.com"
                    className="mt-1 block text-indigo-400 hover:text-indigo-300 transition"
                  >
                    nasif.fuad.arif@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Facebook className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    Drop a message
                  </h3>
                  <p className="mt-1 text-gray-300">Available when Online</p>
                  <a
                    href="https://www.facebook.com/nf.senpai/"
                    className="mt-1 block text-indigo-400 hover:text-indigo-300 transition"
                  >
                    Nasif Fuad - Facebook
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

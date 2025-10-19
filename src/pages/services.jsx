import React, { useState } from "react";
import AccordionItem from "../components/Accordion";
import { motion } from "framer-motion";

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "UI/UX Design",
      content: "User research, wireframing, interactive prototypes, and visually engaging interfaces that tell stories."
    },
    {
      title: "Graphic Design",
      content: "Logo systems, brand identities, marketing visuals, and digital illustrations that enhance brand appeal."
    },
    {
      title: "Web Design",
      content: "Modern, responsive, SEO-friendly website layouts built with component-based systems."
    },
    {
      title: "Branding",
      content: "Creating unified identities, tone, and experiences that make brands memorable and human-centered."
    }
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6 lg:px-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-7xl mx-auto">

        {/* Left Section */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-6">
            <div className="hidden md:block w-3 h-3 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mt-3" />
            <div>
              <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
                WHAT I CAN DO FOR YOU
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                As a digital designer, I transform creative concepts into experiences that connect deeply and spark innovation.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-200 dark:border-gray-700">
            {items.map((it, i) => (
              <AccordionItem
                key={i}
                index={i + 1}
                title={it.title}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {it.content}
              </AccordionItem>
            ))}
          </div>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          className="lg:col-span-5 flex justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative w-80 md:w-96">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse" />
            <div className="relative rounded-2xl overflow-hidden rotate-3 shadow-2xl">
              <img
                src="https://framerusercontent.com/images/IUYreEo8ON7qCLgK2tgDOW0xoI.jpg"
                alt="Creative workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

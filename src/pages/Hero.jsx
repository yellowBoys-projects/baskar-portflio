import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

import Navbar from './navbar'
import Service from './services'
import About from './About'
import FAQs from './FAQs'
import Contact from './Contact'
import Footer from './Footer'

export default function  HeroSection(){
  return(
    <>
<Navbar/>
    <Hero/>
    <Service/>
    <About/>
    <FAQs/>
    <Contact/>
    <Footer/>

    </>
  )
}


 function Hero({
  name = 'D.Baskar',
  titles = ['Web Developer', 'Video Editor', 'Digital Marketer'],
  locationLine = "Chennai, Tamil Nadu, India",
  ctaText = 'View Work',
  ctaHref = '#work',
  imageUrl = '',
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % titles.length);
    }, 3000); // change title every 1 second
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-6 sm:px-8 lg:px-12">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              {name}
            </h1>

            {/* Decorative gradient rule */}
            <div className="mt-4 h-1 w-28 mx-auto md:mx-0 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400" aria-hidden="true"></div>

            {/* Animated Title */}
            <div className="mt-4 text-lg md:text-2xl font-light text-gray-600 dark:text-gray-300 tracking-wide h-8 md:h-10 relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="absolute"
                >
                  {titles[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <p className="max-w-xl mx-auto md:mx-0 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            {locationLine}
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 justify-center md:justify-start">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center border border-transparent px-6 py-3 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-none text-sm font-semibold uppercase tracking-wide hover:opacity-95"
            >
              {ctaText}
            </a>
            <div className="mt-2 sm:mt-0">
              <a href="#contact" className="inline-block text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline">
                Hire me →
              </a>
            </div>
          </div>

          {/* Social icons */}
          <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
            <a href="mailto:hello@example.com" aria-label="Email" className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><Mail size={18} /></a>
            <a href="https://github.com/" aria-label="Github" className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><Github size={18} /></a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><Linkedin size={18} /></a>
          </div>
        </motion.div>

        {/* Right: Image / Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center justify-center"
        >
          <div className="w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
            {imageUrl ? (
              <img src={imageUrl} alt={`${name} portrait`} className="w-full h-80 object-cover" />
            ) : (
              <div className="w-full h-80 flex items-center justify-center bg-gray-100 dark:bg-gray-800"></div>
            )}

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Selected projects</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Modern UI, Motion-rich Framer prototypes and responsive websites.</p>
              <div className="mt-4 flex items-center gap-3">
                <a href="#work" className="text-sm font-medium underline">See case studies</a>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-400">Available for freelance</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

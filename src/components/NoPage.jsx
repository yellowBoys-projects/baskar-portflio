import React from "react";
import { motion } from "framer-motion";
import Navbar from '../pages/navbar'

export default function NoPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-center px-4">
      {/* Big 404 Number Animation */}
      <motion.h1
        className="text-8xl font-extrabold text-indigo-600 mb-4"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        404
      </motion.h1>

      {/* Subheading Animation */}
      <motion.h2
        className="text-2xl font-semibold text-gray-800 mb-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Oops! Page Not Found
      </motion.h2>

      {/* Message Fade-in */}
      <motion.p
        className="text-gray-500 mb-6 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        The page you're looking for doesn’t exist or might have been moved.
      </motion.p>

      {/* Button Bounce Animation */}
      <motion.a
        href="/"
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        🔙 Go Back Home
      </motion.a>
    </div>
  );
}

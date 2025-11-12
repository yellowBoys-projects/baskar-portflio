import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from '../pages/navbar'

export default function BookOrder() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🙏 நன்றி ${form.name}! உங்கள் project request அனுப்பப்பட்டது.`);
    setForm({ name: "", email: "", service: "", budget: "", message: "" });
  };

  return (
    <section id="book-order" className="bg-gray-50 py-16 px-4">
        <div className='mb-30'>
       
             <Navbar/>
             </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">
          📦 Book Your Order
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="உங்கள் பெயர் / Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select a Service</option>
            <option value="Website Design">🌐 Website Design</option>
            <option value="Web Development">💻 Web Development</option>
            <option value="SEO Optimization">🚀 SEO Optimization</option>
          </select>

          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Budget Range</option>
            <option value="Below ₹10,000">Below ₹10,000</option>
            <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
            <option value="Above ₹25,000">Above ₹25,000</option>
          </select>

          <textarea
            name="message"
            placeholder="Project Details..."
            value={form.message}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-500"
            rows="4"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all"
          >
            🚀 Submit Order
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

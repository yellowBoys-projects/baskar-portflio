import React from 'react'
import Navbar from '../pages/navbar'
 
export default function HireMe() {
  return (
    <div>
       <div className='mb-30'>
      
            <Navbar/>
            </div>
      <section id="contact" className="py-12 bg-gray-50">
  <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow">
    <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
      💬 Hire Me for Your Project
    </h2>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you! I’ll get in touch soon 🚀");
      }}
      className="space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full border p-3 rounded-lg"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full border p-3 rounded-lg"
        required
      />
      <textarea
        name="message"
        placeholder="Tell me about your project..."
        className="w-full border p-3 rounded-lg"
        rows="4"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
      >
        🚀 Send Message
      </button>
    </form>
  </div>
</section>

    </div>
  )
}

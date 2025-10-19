import React, { useState } from "react";

/**
 * Contact section: left portrait, right form, floating "Hi" badge.
 * Basic client-side validation + accessible labels.
 */
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const services = ["UI/UX Design", "Web Design", "Branding", "Consulting"];

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // For demo: mark submitted. Replace with API call as needed.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-24 px-4 sm:px-6 lg:px-8">
      {/* Portrait */}
      <div className="lg:col-span-5 flex justify-start">
        <div className="relative w-full max-w-xs">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://framerusercontent.com/images/IUYreEo8ON7qCLgK2tgDOW0xoI.jpg"
              alt="portrait"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Floating Hi badge */}
          <div className="absolute -left-6 -bottom-6">
            <div className="w-20 h-20 rounded-full bg-primaryPurple flex items-center justify-center shadow-md">
              <span className="text-white font-medium text-lg">Hi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-7">
        <h3 className="font-display text-4xl md:text-5xl tracking-tight mb-4">LET'S WORK TOGETHER</h3>
        <p className="text-gray-600 max-w-2xl mb-8">
          Let's build something impactful together—whether it's your brand, your website, or your next big idea.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-primaryPurple block mb-2" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Smith"
                className="w-full rounded-full bg-gray-100 px-4 py-3 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="text-sm text-primaryPurple block mb-2" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="johnsmith@gmail.com"
                className="w-full rounded-full bg-gray-100 px-4 py-3 focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-primaryPurple block mb-2" htmlFor="service">Service Needed?</label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full rounded-full bg-gray-100 px-4 py-3 focus:outline-none"
            >
              <option value="">Select...</option>
              {services.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="text-sm text-primaryPurple block mb-2" htmlFor="message">What Can I Help You With?</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hello, I'd like to enquire about..."
              className="w-full rounded-2xl bg-gray-100 px-5 py-6 min-h-[140px] focus:outline-none resize-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full border-2 border-primaryPurple text-primaryPurple font-semibold hover:bg-primaryPurple hover:text-white transition-all duration-300"
              aria-busy={submitted}
            >
              {submitted ? "Sending..." : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

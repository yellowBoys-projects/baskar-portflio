import React from "react";
import Navbar from '../pages/navbar'

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Website Redesign",
    description:
      "A complete redesign of an online store to improve UX, speed, and conversion rate. Built using React & TailwindCSS.",
    image: "https://via.placeholder.com/600x400",
    link: "#"
  },
  {
    id: 2,
    title: "Portfolio Website for Designer",
    description:
      "A modern personal portfolio site with animations and responsive design using Framer Motion and TailwindCSS.",
    image: "https://via.placeholder.com/600x400",
    link: "#"
  },
  {
    id: 3,
    title: "Restaurant Booking App UI",
    description:
      "UI concept for a restaurant table booking platform with smooth transitions and modern layout.",
    image: "https://via.placeholder.com/600x400",
    link: "#"
  }
];

export default function CaseStudy() {
  return (
    <section className="bg-gray-50 py-16 px-4" id="case-study">
       <div className='mb-30'>
      
            <Navbar/>
            </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">
          🎯 Selected Projects / Case Studies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="text-indigo-600 font-medium hover:underline"
                >
                  🔍 See Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

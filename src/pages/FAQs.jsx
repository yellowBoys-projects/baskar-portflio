import React, { useState } from "react";
import AccordionItem from "../components/Accordion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I build responsive, modern, and fast websites using HTML, CSS, JavaScript, React, and other web technologies. I also provide website maintenance and optimization services."
    },
    {
      question: "How does the development process work?",
      answer: "We start by understanding your requirements, then I create a project plan and design mockups (if needed). After your approval, I develop the website, test it thoroughly, and deliver a fully functional site."
    },
    {
      question: "How long does a project usually take?",
      answer: "Depending on complexity, projects typically take 1–4 weeks from start to finish."
    },
    {
      question: "How long does a project usually take?",
      answer: "Project timelines depend on complexity."
    },
    {
      question: "What do I need to provide before starting a project?",
      answer: "Yes! I provide multiple rounds of revisions to ensure the final design matches your vision perfectly."
    },
    {
      question: "How do I get started?",
      answer: "Simply reach out via email or the contact form, share your project details, and we’ll schedule a discussion to kick off your project."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Intro */}
        <div className="lg:col-span-4">
          <div className="flex items-start gap-6">
            <div className="hidden md:block w-3 h-3 rounded-full bg-primaryPurple mt-3" />
            <div>
              <h3 className="font-display text-4xl md:text-5xl tracking-tight mb-4">
                FREQUENTLY ASKED QUESTIONS
              </h3>
              <p className="text-gray-600 max-w-md">
                Here are answers to some common questions from clients. If you don't see your question here, feel free to reach out — I'm happy to help!
              </p>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className="lg:col-span-8">
          <div className="border border-transparent divide-y divide-gray-200">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                index={i + 1}
                title={faq.question}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <p className="text-gray-600 py-2">{faq.answer}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

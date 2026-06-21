"use client";

import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const HomeComponents: React.FC = () => {
  const [showContact, setShowContact] = useState(false);

  const email = "mamun@example.com";
  const phone = "+8801XXXXXXXXX";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      {/* Hero Content */}
      <div className="text-center max-w-4xl">
        <h2 className="text-lg md:text-xl text-gray-600 mb-3">
          Hello There 👋
        </h2>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi, I'm Md. Abdullah Al Mamun
        </h1>

        <h3 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
          Software Engineer
        </h3>

        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          I’m focused on building awesome applications while learning and
          exploring modern technologies. Passionate about Java, Spring Boot,
          React.js, Next.js, PostgreSQL, and software architecture.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-12 flex items-center gap-8 text-3xl">
        <a
          href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href={process.env.NEXT_PUBLIC_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <FaGithub />
        </a>

        <button
          onClick={() => setShowContact(true)}
          className="hover:scale-110 transition cursor-pointer"
        >
          <FaEnvelope />
        </button>

        <button
          onClick={() => setShowContact(true)}
          className="hover:scale-110 transition cursor-pointer"
        >
          <FaPhone />
        </button>
      </div>

      {/* Contact Popup */}
      {showContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[350px]">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>

            <p className="mb-2">
              <strong>Email:</strong> {email}
            </p>

            <p className="mb-4">
              <strong>Phone:</strong> {phone}
            </p>

            <button
              onClick={() => setShowContact(false)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeComponents;
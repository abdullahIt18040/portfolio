"use client";

import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactComponents: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-50 py-24 px-6 flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Contact
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-3">
            Take a Coffee ☕ & Chat With Me
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
            I'm always interested in discussing software engineering,
            new opportunities, innovative ideas, and technology.
            Feel free to reach out anytime.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-100">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Side */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Let's Connect
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Whether you have a project idea, job opportunity,
                collaboration proposal, or just want to say hello,
                I'd love to hear from you.
              </p>

              <div className="flex gap-5 mt-8 text-3xl">
                <a
                  href="https://github.com/your-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-black transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-blue-600 transition"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-slate-100 p-5 rounded-xl">
                <FaEnvelope className="text-2xl text-blue-600" />

                <div>
                  <p className="text-sm text-slate-500">Email</p>

                  <a
                    href="mailto:your-email@gmail.com"
                    className="font-semibold text-slate-800 hover:text-blue-600"
                  >
                    your-email@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-100 p-5 rounded-xl">
                <FaPhone className="text-2xl text-green-600" />

                <div>
                  <p className="text-sm text-slate-500">Mobile</p>

                  <a
                    href="tel:+8801XXXXXXXXX"
                    className="font-semibold text-slate-800 hover:text-green-600"
                  >
                    +8801XXXXXXXXX
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-10">
          <p className="text-slate-500">
            Looking forward to connecting with you and building
            something amazing together 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactComponents;
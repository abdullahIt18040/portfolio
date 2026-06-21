"use client";

import Image from "next/image";

const AboutComponents: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-white py-24 px-6 flex items-center "
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              About
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-3">
              Who I Am
            </h2>

            <h3 className="text-2xl font-semibold text-slate-700 mt-6">
              Hi, I'm Md. Abdullah Al Mamun
            </h3>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Well, I've been working as a Software Engineer for more than
              2.5+ years. However, my software development journey started
              during my university life, where I developed a strong passion
              for building applications and solving real-world problems
              through technology.
            </p>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Currently, I focus on developing scalable enterprise
              applications using Java, Spring Boot, React.js, Next.js,
              Oracle, PostgreSQL, and modern software development
              practices.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">
                  ⚡ Fast Worker
                </h4>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">
                  📚 Fast Learner
                </h4>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">
                  ⏰ Aware of Deadlines
                </h4>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">
                  🚀 Careful About Efficiency
                </h4>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-3xl rotate-6"></div>

              <div className="relative bg-white rounded-3xl shadow-2xl p-3">
                <Image
                  src="/images/profile.png"
                  alt="Md Abdullah Al Mamun"
                  width={400}
                  height={500}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default AboutComponents;
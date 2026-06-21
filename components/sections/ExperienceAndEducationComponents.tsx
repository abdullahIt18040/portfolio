"use client";

const experiences = [
  {
    title: "Full Stack Software Engineer",
    company: "Sonali Intellect Limited",
    duration: "Jan 2025 – Present",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Developing frontend applications using React.js, JavaScript, and TypeScript.",
      "Building and integrating backend APIs using Spring Boot and EJB.",
      "Working with enterprise-level banking and business applications.",
      "Collaborating with cross-functional teams to deliver scalable software solutions.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "Newgen Technology Limited",
    duration: "Oct 2023 – Dec 2024",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Developed responsive frontend applications using Next.js, React.js, and Tailwind CSS.",
      "Integrated frontend applications with Spring Boot REST APIs.",
      "Participated in application development, testing, and deployment activities.",
      "Worked closely with senior developers to implement new features.",
    ],
  },
];

const education = [
  {
    degree: "M.Sc. in ICT",
    institute:
      "Mawlana Bhashani Science and Technology University (MBSTU)",
    duration: "2024 – Present",
    result: "Current CGPA: 3.85 / 4.00",
  },
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institute:
      "Mawlana Bhashani Science and Technology University (MBSTU)",
    duration: "2020 – 2024",
    result: "CGPA: 3.75 / 4.00",
  },
];

const ExperienceAndEducationComponents: React.FC = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            My Journey
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-3">
            Experience & Education
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            My professional experience and academic background that
            have shaped my software engineering career.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Experience */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-slate-800">
              Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.title}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
                >
                  <h4 className="text-xl font-bold text-slate-900">
                    {exp.title}
                  </h4>

                  <p className="text-blue-600 font-semibold mt-1">
                    {exp.company}
                  </p>

                  <p className="text-sm text-slate-500 mt-1">
                    {exp.duration} • {exp.location}
                  </p>

                  <ul className="mt-4 space-y-2 text-slate-600">
                    {exp.responsibilities.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-slate-800">
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
                >
                  <h4 className="text-xl font-bold text-slate-900">
                    {edu.degree}
                  </h4>

                  <p className="text-blue-600 font-semibold mt-1">
                    {edu.institute}
                  </p>

                  <p className="text-sm text-slate-500 mt-1">
                    {edu.duration}
                  </p>

                  <p className="mt-3 text-slate-700 font-medium">
                    {edu.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold">
            2.5+ Years of Professional Experience
          </h3>

          <p className="mt-3 text-lg">
            Specialized in Java, Spring Boot, EJB, React.js,
            Next.js, PostgreSQL, Oracle Database, and enterprise
            software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducationComponents;
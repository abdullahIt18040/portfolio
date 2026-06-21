"use client";

const languages = [
  "Java",
  "JavaScript",
  "TypeScript",
  "C",
  "C++",
];

const backendSkills = [
  "Spring Framework",
  "Spring Boot",
  "Spring AOP",
  "Spring Data JPA",
  "Servlet",
  "EJB",
  "Apache Kafka",
];

const frontendSkills = [
  "React.js",
  "Next.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "AJAX",
  "Thymeleaf",
];

const databaseSkills = [
  "Oracle",
  "PostgreSQL",
  "Stored Procedures",
  "Redis",
];

const toolsSkills = [
  "GitHub",
  "Postman",
  "Liquibase",
  "TOAD",
  "JasperReports",
];

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  skills,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
      <h3 className="text-2xl font-bold text-slate-800 mb-6">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillComponents: React.FC = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-50 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            My Expertise
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-3">
            Technical Skills
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            Experienced in designing and developing enterprise
            applications using Java, Spring Boot, React.js,
            Next.js, Oracle, PostgreSQL, Redis, and modern
            software development tools.
          </p>
        </div>

        {/* Programming Languages */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">
            Programming Languages
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((language) => (
              <div
                key={language}
                className="bg-white shadow-md rounded-xl px-8 py-4 text-lg font-semibold text-slate-800 hover:shadow-xl hover:-translate-y-1 transition"
              >
                {language}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">

          <SkillCard
            title="Backend Development"
            skills={backendSkills}
          />

          <SkillCard
            title="Frontend Development"
            skills={frontendSkills}
          />

          <SkillCard
            title="Database & Caching"
            skills={databaseSkills}
          />

          <SkillCard
            title="Tools & Technologies"
            skills={toolsSkills}
          />

        </div>
      </div>
    </section>
  );
};

export default SkillComponents;
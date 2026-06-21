"use client";

const projects = [
  {
    title: "EventBy",
    type: "Full Stack Web Application",
    description:
      "EventBy is a social networking platform for hosting, organizing, and managing both virtual and in-person events. It enables communities with similar interests, hobbies, and professions to connect and participate in activities.",
    technologies: [
      "React.js",
      "Next.js",
      "Spring Boot",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Inventory Management System",
    type: "Web Application",
    description:
      "An inventory management solution for creating, updating, deleting, searching, and tracking products efficiently. Designed to streamline product management processes.",
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },
  {
    title: "Hospital Management System",
    type: "Enterprise Application",
    description:
      "A comprehensive hospital management solution for handling patient records, operational workflows, and administrative processes within healthcare organizations.",
    technologies: [
      "Java",
      "Spring Boot",
      "Oracle",
      "PostgreSQL",
    ],
  },
  {
    title: "Custom Redis Annotation Framework",
    type: "Backend Library",
    description:
      "Designed and implemented a custom Redis caching annotation with auto-configuration support to simplify cache integration in Spring Boot applications.",
    technologies: [
      "Java",
      "Spring Boot",
      "Redis",
      "AOP",
      "Auto Configuration",
    ],
  },
  {
    title: "Apache Kafka Integration",
    type: "Backend Solution",
    description:
      "Implemented asynchronous event-driven communication using Apache Kafka for scalable and reliable message processing between distributed services.",
    technologies: [
      "Java",
      "Spring Boot",
      "Apache Kafka",
      "Microservices",
    ],
  },
];

const ProjectComponents: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-50 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Portfolio
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-3">
            Featured Projects
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            A collection of enterprise applications, full-stack solutions,
            backend frameworks, and software engineering projects I have
            worked on throughout my professional career.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl p-8 shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4">
                <span className="text-sm font-semibold text-blue-600">
                  {project.type}
                </span>

                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  {project.title}
                </h3>
              </div>

              <p className="text-slate-600 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-slate-100 rounded-lg text-sm font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            And Many More...
          </h3>

          <p className="mt-3 text-slate-600">
            Additional projects include banking solutions, enterprise
            integrations, reporting systems, REST APIs, Redis caching
            frameworks, Kafka-based messaging systems, and database-driven
            business applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectComponents;
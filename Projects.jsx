import { ProjectCard } from './components/ProjectCard';

const projects = [
  {
    title: "HaemoLink",
    description: "Engineered an optimized blood coordination platform using Dijkstra's algorithm for hospital routing and FEFO inventory management to minimize wastage.",
    tags: ["Java 17", "Spring Boot", "React 19", "MySQL"],
    repoLink: "https://github.com/29-codeee/HaemoLink"
  },
  {
    title: "MediScan AI",
    description: "Architected a healthcare web app that automates prescription interpretation via the Gemini API, reducing manual lookup effort for non-technical users.",
    tags: ["Gemini API", "React", "Next.js"],
    repoLink: "https://github.com/29-codeee/mediscan-2025"
  }
];

export default function Projects() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-8 text-white">Selected Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
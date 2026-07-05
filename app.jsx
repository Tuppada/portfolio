import React from 'react';

// 1. Define the projects data
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

// 2. Define the Card component inside the same file
const ProjectCard = ({ title, description, tags, repoLink }) => (
  <div className="border border-gray-700 p-6 rounded-lg hover:border-blue-500 transition-all bg-gray-900">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">GitHub →</a>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="bg-blue-900/30 px-3 py-1 rounded text-sm text-blue-300 border border-blue-800">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

// 3. Main Export
export default function App() {
  return (
    <section className="p-10 bg-black min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-white">Selected Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
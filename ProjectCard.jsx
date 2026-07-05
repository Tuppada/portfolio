export const ProjectCard = ({ title, description, tags, repoLink }) => (
  <div className="border border-gray-700 p-6 rounded-lg hover:border-blue-500 transition-all bg-gray-900">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
        GitHub →
      </a>
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
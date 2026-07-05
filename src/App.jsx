import React, { useEffect, useState } from 'react';

const projects = [
  {
    title: 'HaemoLink',
    description: 'Emergency blood coordination system with Dijkstra routing, ABO/Rh compatibility engine, JWT/BCrypt security, and fast hospital logistics.',
    tech: ['Java 17', 'Spring Boot 3.3.2', 'React 19', 'MySQL'],
    repoLink: 'https://github.com/29-codeee/HaemoLink',
    demoLink: 'https://haemo-link-sable.vercel.app/',
  },
  {
    title: 'MediScan AI',
    description: 'AI-assisted healthcare interface that interprets prescriptions using a natural language pipeline and product-first UX.',
    tech: ['Gemini API', 'React', 'Next.js'],
    repoLink: 'https://github.com/29-codeee/mediscan-2025',
    demoLink: 'https://mediscan-2025.vercel.app/',
  },
  {
    title: 'Crop Recommendation Tool',
    description: 'Data-driven crop advisor built for smart agriculture decisions with soil, weather, and yield signals.',
    tech: ['JavaScript', 'Supabase', 'SQL'],
  },
  {
    title: 'Hackathon Yoga Trainer',
    description: 'Runner-up Navodhana project that blends pose tracking and wellness habits into a lightweight mobile-first experience.',
    tech: ['React', 'AI', 'Hackathon Demo'],
    repoLink: '#',
    demoLink: 'https://yogaguiderr.vercel.app/',
  },
];

const skills = [
  { category: 'Languages', items: ['Java (intermediate)', 'JavaScript (beginner)', 'HTML (beginner)', 'CSS (beginner)', 'SQL (beginner)'] },
  { category: 'Tools', items: ['VS Code', 'Cursor', 'Trae', 'Supabase', 'MySQL', 'Tailwind CSS', 'GitHub', 'Gemini API'] },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Tuppada' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tuppada' },
];

function ProjectCard({ title, description, tech, repoLink, demoLink }) {
  return (
    <article className="card">
      <div className="card-header">
        <h3>{title}</h3>
        <div className="card-links">
          {repoLink && (
            <a href={repoLink} target="_blank" rel="noreferrer">GitHub</a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noreferrer">Demo</a>
          )}
        </div>
      </div>
      <p>{description}</p>
      <div className="tags">
        {tech.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('Thanks for reaching out! I�ll get back to you soon.');
    setFormState({ name: '', email: '', message: '' });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Vibe coder � product-first builder</p>
          <h1>Shreya</h1>
        </div>
        <button
          className="theme-toggle"
          onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </header>

      <main>
        <section className="hero section-card">
          <div>
            <p className="overline">2nd-year ISE student at JSS Academy of Technical Education, Bengaluru</p>
            <h2>Building fast, thinking product-first.</h2>
            <p className="intro">
              I�m a self-described vibe coder who uses AI tools to ship polished experiences quickly. I focus on AI/ML, web development, DSA, and product-led growth.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button">Explore projects</a>
              <a href="#contact" className="text-link">Let�s collaborate</a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-panel-card">
              <span>AI Product Management</span>
              <p>Long-term goal: transition from engineering into AI product leadership with a strong product vision.</p>
            </div>
          </div>
        </section>

        <section id="about" className="section-card">
          <h2>About</h2>
          <p>
            I�m currently in my second year of Information Science Engineering at JSS Academy of Technical Education, Bengaluru.
            I love building web experiences, solving algorithmic challenges, and exploring AI/ML products that make real user impact.
          </p>
          <div className="about-grid">
            <div>
              <h3>Focus areas</h3>
              <ul>
                <li>AI/ML exploration</li>
                <li>Web development with modern stacks</li>
                <li>Data structures and algorithms</li>
              </ul>
            </div>
            <div>
              <h3>Vision</h3>
              <p>
                I want to move into AI Product Management, where technical execution and product thinking come together to launch compelling AI experiences.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section-card">
          <div className="section-header">
            <h2>Projects</h2>
            <p>Selected work that blends speed, engineering, and product-minded design.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section id="skills" className="section-card">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.category} className="skill-block">
                <h3>{skill.category}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="achievements" className="section-card">
          <h2>Achievements</h2>
          <div className="achievement-card">
            <p className="achievement-title">Runner-Up, Navodhana 24-hour AIML Hackathon</p>
            <p>Built an AI product prototype focused on wellness and accessibility during an intense hackathon sprint.</p>
          </div>
        </section>

        <section id="contact" className="section-card contact-section">
          <div>
            <h2>Contact</h2>
            <p>Have an idea, collaboration, or product challenge? Let�s connect.</p>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Name
              <input required name="name" value={formState.name} onChange={handleChange} placeholder="Your name" />
            </label>
            <label>
              Email
              <input required type="email" name="email" value={formState.email} onChange={handleChange} placeholder="you@example.com" />
            </label>
            <label>
              Message
              <textarea required name="message" value={formState.message} onChange={handleChange} placeholder="Tell me about your project" rows="5" />
            </label>
            <button type="submit" className="button">Send message</button>
            {message && <p className="form-feedback">{message}</p>}
          </form>
        </section>
      </main>
    </div>
  );
}
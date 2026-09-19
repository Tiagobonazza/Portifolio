import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectModal from '../components/ProjectModal'

export default function Projetos() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <main className="content page-content">
      <div className="projects-scroll">
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card" onClick={() => setSelectedProject(p)}>
            <div className="project-thumb">
              {p.image && <img src={p.image} alt={p.title} />}
            </div>
            <div className="project-info">
              <div className="project-title-row">
                <h4 className="project-title">{p.title}</h4>
                {p.platforms && (
                  <div className="project-platforms">
                    {p.platforms.includes('pc') && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                    )}
                    {p.platforms.includes('mobile') && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
                      </svg>
                    )}
                  </div>
                )}
              </div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  )
}

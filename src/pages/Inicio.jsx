import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectModal from '../components/ProjectModal'

const skills = [
  { name: 'Desenvolvimento Web', level: 90 },
  { name: 'Desenvolvimento Mobile', level: 60 },
  { name: 'HTML / CSS / JavaScript', level: 90 },
  { name: 'React / Next.js', level: 85 },
  { name: 'UI / UX Design', level: 80 },
  { name: 'Node.js / PostgreSQL', level: 90 },
  { name: 'C++', level: 35 },
]

export default function Inicio({ onNavigate }) {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <main className="content">
      <div className="info-grid">
        <div className="info-card">
          <h3 className="info-title">SOBRE MIM</h3>
          <p className="info-text">Sou apaixonado por tecnologia e inovação. Trabalho há mais de 10 anos desenvolvendo soluções digitais que ajudam marcas e negócios a se destacarem no mundo online.</p>
          <p className="info-text">Meu foco é criar projetos funcionais, bonitos e com propósito.</p>
          <div className="info-stats">
            <div className="stat">
              <span className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </span>
              <div><strong>10+ Anos</strong><span>Experiência</span></div>
            </div>
            <div className="stat">
              <span className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21C12 21 5 13.5 5 9a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>
                </svg>
              </span>
              <div><strong>Brasil</strong><span>Localização</span></div>
            </div>
            <div className="stat">
              <span className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                </svg>
              </span>
              <div><strong>5+</strong><span>Projetos Entregues</span></div>
            </div>
          </div>
        </div>

        <div className="info-card">
          <h3 className="info-title">HABILIDADES</h3>
          <div className="skills-list">
            {skills.map((s) => (
              <div key={s.name} className="skill-item">
                <div className="skill-header">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="info-card">
          <h3 className="info-title">INFORMAÇÕES</h3>
          <ul className="contact-list">
            <li><span className="contact-icon">✉</span> thiagobonassa@hotmail.com</li>
            <li><span className="contact-icon">📞</span> 48 99189-3348</li>
            <li><span className="contact-icon">📍</span> Santa Catarina, Brasil</li>
            <li><span className="contact-icon">🌐</span> www.dow.com.br</li>
            <li><span className="contact-icon">📅</span> Disponível para projetos</li>
          </ul>
        </div>
      </div>

      <div className="projects-section">
        <div className="projects-header">
          <h3 className="info-title">PROJETOS EM DESTAQUE</h3>
          <button className="projects-link" onClick={() => onNavigate('projetos')}>Ver todos os projetos →</button>
        </div>
        <div className="projects-grid">
          {projects.slice(0, 4).map((p) => (
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

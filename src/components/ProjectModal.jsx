import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!project) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-thumb">
          {project.image && <img src={project.image} alt={project.title} />}
        </div>

        <div className="modal-scroll">
          <div className="modal-body">
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-desc">{project.fullDesc || project.desc}</p>

            <div className="modal-tags">
              {project.tags.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-video-btn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                Ver Vídeo do Projeto
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

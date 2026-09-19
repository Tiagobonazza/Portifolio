import { useEffect, useState } from 'react'

export default function ProjectModal({ project, onClose }) {
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key !== 'Escape') return
      if (showVideo) setShowVideo(false)
      else onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose, showVideo])

  useEffect(() => {
    setShowVideo(false)
  }, [project])

  if (!project) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {showVideo && project.videoUrl ? (
          <div className="modal-video-player">
            <button className="modal-back-btn" onClick={() => setShowVideo(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
              Voltar
            </button>
            <video src={project.videoUrl} controls autoPlay className="modal-video" />
          </div>
        ) : (
          <div className="modal-thumb">
            {project.image && <img src={project.image} alt={project.title} />}
          </div>
        )}

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
              <button
                className="modal-video-btn"
                onClick={() => setShowVideo(true)}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                Ver Vídeo do Projeto
              </button>
            )}

            {project.siteUrl && (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-video-btn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                Ver Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

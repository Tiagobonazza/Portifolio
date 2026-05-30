import menuLateral from './assets/Menu Lateral.png'
import logoMenu from './assets/LOGO menu.png'
import logo from './assets/LOGO.png'
import banner from './assets/Banner.png'
import ElectricButton from './ElectricButton'
import './App.css'

const skills = [
  { name: 'Desenvolvimento Web', level: 90 },
  { name: 'HTML / CSS / JavaScript', level: 90 },
  { name: 'React / Next.js', level: 85 },
  { name: 'UI / UX Design', level: 80 },
  { name: 'Node.js / PostgreSQL', level: 70 },
]

const projects = [
  { title: 'Golden Fire', desc: 'Projeto completo com design moderno e soluções digitais de alto impacto.', tags: ['Unreal Engine', 'Node.js', 'PostgreSQL'] },
  { title: 'App Exala', desc: 'Aplicativo mobile com experiência fluida e interface intuitiva para o usuário.', tags: ['React Native', 'Node.js', 'PostgreSQL'] },
  { title: 'Sistema de Carteira', desc: 'Sistema de gestão financeira com carteira digital, transações e relatórios.', tags: ['React JS', 'Node.js', 'PostgreSQL'] },
  { title: 'E-commerce Oasis', desc: 'Loja virtual completa com carrinho, filtros e integração com pagamentos.', tags: ['React JS', 'Node.js', 'PostgreSQL'] },
]

function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <img src={menuLateral} alt="Menu Lateral" />
        <div className="sidebar-header">
          <img src={logoMenu} alt="Logo" className="sidebar-logo" />
          <span className="sidebar-title">Portifólio</span>
        </div>
      </aside>
      <div className="main-area">
        <header className="topbar">
          <div className="search-wrapper">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input className="search-input" type="text" placeholder="Pesquisar..." />
          </div>
          <img src={logo} alt="Logo" className="topbar-logo" />
        </header>
        <main className="content">
          <div className="banner-wrapper">
            <div className="banner-inner">
              <img src={banner} alt="Banner" className="banner" />
              <div className="banner-overlay">
                <p className="banner-suptitle">OLÁ, EU SOU</p>
                <h1 className="banner-name">Tiago Bonassa<span className="dot">.</span></h1>
                <p className="banner-role">Desenvolvedor & Criador Digital</p>
                <p className="banner-desc">Transformo ideias em experiências digitais incríveis.<br />Especialista em desenvolvimento web, design de interfaces<br />e soluções que geram resultados.</p>
                <div className="banner-actions">
                  <ElectricButton className="btn-primary">⬇ Baixar Currículo</ElectricButton>
                  <button className="btn-secondary">Entrar em Contato</button>
                </div>
                <p className="banner-available"><span className="dot-green"></span> Disponível para novos projetos</p>
              </div>
            </div>
          </div>

          {/* Sobre / Habilidades / Informações */}
          <div className="info-grid">
            <div className="info-card">
              <h3 className="info-title">SOBRE MIM</h3>
              <p className="info-text">Sou apaixonado por tecnologia e inovação. Trabalho há mais de 10 anos desenvolvendo soluções digitais que ajudam marcas e negócios a se destacarem no mundo online.</p>
              <p className="info-text">Meu foco é criar projetos funcionais, bonitos e com propósito.</p>
              <div className="info-stats">
                <div className="stat">
                  <span className="stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </span>
                  <div><strong>5+ Anos</strong><span>Experiência</span></div>
                </div>
                <div className="stat">
                  <span className="stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21C12 21 5 13.5 5 9a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  </span>
                  <div><strong>Brasil</strong><span>Localização</span></div>
                </div>
                <div className="stat">
                  <span className="stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/>
                      <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
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

          {/* Projetos em Destaque */}
          <div className="projects-section">
            <div className="projects-header">
              <h3 className="info-title">PROJETOS EM DESTAQUE</h3>
              <a href="#" className="projects-link">Ver todos os projetos →</a>
            </div>
            <div className="projects-grid">
              {projects.map((p) => (
                <div key={p.title} className="project-card">
                  <div className="project-thumb" />
                  <div className="project-info">
                    <h4 className="project-title">{p.title}</h4>
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

        </main>
      </div>
    </div>
  )
}

export default App

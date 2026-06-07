import { useState } from 'react'
import menuLateral from './assets/Menu Lateral.png'
import logoMenu from './assets/LOGO menu.png'
import logo from './assets/LOGO.png'
import banner from './assets/Banner.png'
import ElectricButton from './ElectricButton'
import Inicio from './pages/Inicio'
import SobreMim from './pages/SobreMim'
import Projetos from './pages/Projetos'
import Habilidades from './pages/Habilidades'
import Experiencia from './pages/Experiencia'
import Servicos from './pages/Servicos'
import Depoimentos from './pages/Depoimentos'
import Contato from './pages/Contato'
import './App.css'

const navItems = [
  {
    id: 'inicio', label: 'Início',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  },
  {
    id: 'sobre', label: 'Sobre Mim',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  },
  {
    id: 'projetos', label: 'Projetos',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
  },
  {
    id: 'habilidades', label: 'Habilidades',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  },
  {
    id: 'experiencia', label: 'Experiência',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
  },
  {
    id: 'servicos', label: 'Serviços',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  },
  {
    id: 'depoimentos', label: 'Depoimentos',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  },
  {
    id: 'contato', label: 'Contato',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
  },
]


function App() {
  const [activePage, setActivePage] = useState('inicio')

  return (
    <div className="layout">
      <aside className="sidebar">
        <img src={menuLateral} alt="Menu Lateral" />
        <div className="sidebar-header">
          <img src={logoMenu} alt="Logo" className="sidebar-logo" />
          <span className="sidebar-title">Portifólio</span>
        </div>

        <nav className="sidebar-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-item${activePage === item.id ? ' active' : ''}`}
              onClick={() => setActivePage(item.id)}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-profile">
            <div className="sidebar-avatar">
              <img src={logo} alt="Logo" />
            </div>
            <div className="sidebar-profile-info">
              <span className="sidebar-profile-name">Tiago Bonassa</span>
              <span className="sidebar-profile-role">Desenvolvedor & Criador Digital</span>
            </div>
            <span className="sidebar-chevron">▾</span>
          </div>
          <div className="sidebar-socials">
            <a href="#" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
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

        <div className="banner-wrapper">
          <div className="banner-inner">
            <img src={banner} alt="Banner" className="banner" />
            <div className="banner-overlay">
              <p className="banner-suptitle">OLÁ, EU SOU</p>
              <h1 className="banner-name">Tiago Bonassa<span className="dot">.</span></h1>
              <p className="banner-role">Desenvolvedor & Criador Digital</p>
              <p className="banner-desc">Transformo ideias em experiências digitais incríveis.<br />Especialista em desenvolvimento web, design de interfaces<br />e soluções que geram resultados.</p>
              <p className="banner-tech-badge">PÁGINA DESENVOLVIDA COM <span>React</span>/<span>JavaScript</span></p>
              <div className="banner-actions">
                <ElectricButton className="btn-primary">⬇ Baixar Currículo</ElectricButton>
                <button className="btn-secondary"><span>Entrar em Contato</span></button>
              </div>
              <p className="banner-available"><span className="dot-green"></span> Disponível para novos projetos</p>
            </div>
          </div>
        </div>

        <div className="page-wrapper">
          {{
            inicio: <Inicio onNavigate={setActivePage} />,
            sobre: <SobreMim />,
            projetos: <Projetos />,
            habilidades: <Habilidades />,
            experiencia: <Experiencia />,
            servicos: <Servicos />,
            depoimentos: <Depoimentos />,
            contato: <Contato />,
          }[activePage]}
        </div>
      </div>
    </div>
  )
}

export default App

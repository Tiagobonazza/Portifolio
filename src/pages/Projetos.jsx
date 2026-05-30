import { useState } from 'react'
import goldenFire from '../assets/GoldenFire.png'
import exala from '../assets/Exala.png'
import carteira from '../assets/Carteira.png'
import oasis from '../assets/Oasis.png'
import dow from '../assets/DOW.png'
import ProjectModal from '../components/ProjectModal'

const projects = [
  {
    title: 'Golden Fire',
    desc: 'Projeto completo com design moderno e soluções digitais de alto impacto.',
    fullDesc: `Golden Fire é um projeto ambicioso que une tecnologia de ponta com design imersivo. Desenvolvido com Unreal Engine, Node.js e PostgreSQL, o sistema oferece uma experiência visual impressionante com renderização em tempo real e ambientes interativos.

O backend foi construído com Node.js para garantir alta performance e escalabilidade, enquanto o PostgreSQL gerencia dados complexos de forma eficiente. A integração entre o motor gráfico e a API permite atualizações dinâmicas de conteúdo sem interromper a experiência do usuário.

Entre as funcionalidades principais estão: sistema de autenticação seguro, painel administrativo completo, relatórios em tempo real, sistema de notificações push e suporte a múltiplos idiomas. O projeto foi entregue dentro do prazo e superou as expectativas do cliente em termos de performance e design.

O resultado final é uma plataforma robusta, escalável e visualmente impactante que se destaca no mercado pela qualidade técnica e criativa.`,
    tags: ['Unreal Engine 5.4', 'Node.js', 'PostgreSQL'],
    image: goldenFire,
    platforms: ['pc', 'mobile'],
  },
  {
    title: 'App Exala',
    desc: 'Aplicativo mobile com experiência fluida e interface intuitiva para o usuário.',
    fullDesc: `App Exala é um aplicativo mobile desenvolvido com React Native e Node.js, voltado para conectar pessoas através de experiências culturais e eventos ao vivo.

O sistema de backend utiliza Node.js com arquitetura RESTful e banco de dados PostgreSQL, garantindo alta disponibilidade e segurança nos dados dos usuários.

Funcionalidades implementadas: cadastro e login social, perfil de usuário customizável, busca por eventos e categorias, sistema de avaliações, chat entre usuários, pagamento in-app e histórico de atividades.`,
    tags: ['React Native', 'Node.js', 'PostgreSQL'],
    image: exala,
    platforms: ['mobile'],
  },
  {
    title: 'Sistema de Carteira',
    desc: 'Sistema de gestão financeira com carteira digital, transações e relatórios.',
    fullDesc: `Sistema de Carteira Digital é uma plataforma financeira completa desenvolvida com React JS, Node.js e PostgreSQL.

A arquitetura foi projetada com foco em segurança, utilizando criptografia de ponta a ponta, autenticação em dois fatores e conformidade com as regulamentações financeiras vigentes.

Principais funcionalidades: depósitos e saques, transferências entre usuários, histórico completo de transações, relatórios exportáveis em PDF e Excel, integração com bancos via Open Banking e dashboard com gráficos interativos.`,
    tags: ['React JS', 'Node.js', 'PostgreSQL'],
    image: carteira,
    platforms: ['pc'],
  },
  {
    title: 'E-commerce Oasis',
    desc: 'Loja virtual completa com carrinho, filtros e integração com pagamentos.',
    fullDesc: `E-commerce Oasis é uma loja virtual completa desenvolvida com React JS, Node.js e PostgreSQL, focada em oferecer a melhor experiência de compra online.

O frontend em React JS garante uma navegação rápida e fluida, com carregamento otimizado de imagens, filtros dinâmicos por categoria, preço e disponibilidade, e sistema de busca inteligente.

Funcionalidades desenvolvidas: catálogo de produtos com variações, carrinho persistente, wishlist, sistema de cupons e promoções, múltiplos métodos de pagamento, rastreamento de pedidos em tempo real e programa de fidelidade.`,
    tags: ['React JS', 'Node.js', 'PostgreSQL'],
    image: oasis,
    platforms: ['pc'],
  },
  {
    title: 'D.O.W',
    desc: 'Descrição do projeto D.O.W em breve.',
    fullDesc: `Descrição completa do projeto D.O.W em breve.`,
    tags: [],
    image: dow,
    platforms: ['pc'],
  },
]

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

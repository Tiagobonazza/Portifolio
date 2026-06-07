export default function Servicos() {
  return (
    <main className="content page-content">

      <section className="sobre-section">
        <h2 className="sobre-section-title">Serviços em Andamento</h2>

        <div className="sobre-card">
          <div className="sobre-card-header">
            <div>
              <h3 className="sobre-card-title">Ministério da Fazenda</h3>
              <span className="sobre-card-sub">Programador BackEnd</span>
            </div>
            <span className="sobre-card-date">11/2025 — Atual</span>
          </div>
          <p className="sobre-card-desc">
            Desenvolvimento BackEnd com foco em sistemas governamentais.
          </p>
          <div className="sobre-tags">
            <span className="tag">C#</span>
            <span className="tag">WebForms</span>
          </div>
        </div>

      </section>

      <section className="sobre-section">
        <h2 className="sobre-section-title">Projetos Concluídos</h2>

        <div className="sobre-card">
          <div className="sobre-card-header">
            <div>
              <h3 className="sobre-card-title">Golden Fire</h3>
              <span className="sobre-card-sub">Projeto completo com design moderno e soluções digitais de alto impacto</span>
            </div>
            <span className="sobre-card-date" style={{color:'#22c55e'}}>Concluído</span>
          </div>
          <div className="sobre-tags">
            <span className="tag">Unreal Engine 5.4</span>
            <span className="tag">Node.js</span>
            <span className="tag">PostgreSQL</span>
          </div>
        </div>

      </section>

      <section className="sobre-section">
        <h2 className="sobre-section-title">Projetos em Desenvolvimento</h2>

        <div className="sobre-card">
          <div className="sobre-card-header">
            <div>
              <h3 className="sobre-card-title">App Exala</h3>
              <span className="sobre-card-sub">Aplicativo mobile com experiência fluida e interface intuitiva</span>
            </div>
            <span className="sobre-card-date" style={{color:'#f5c518'}}>Em desenvolvimento</span>
          </div>
          <div className="sobre-tags">
            <span className="tag">React Native</span>
            <span className="tag">Node.js</span>
            <span className="tag">PostgreSQL</span>
          </div>
        </div>

        <div className="sobre-card">
          <div className="sobre-card-header">
            <div>
              <h3 className="sobre-card-title">Sistema de Carteira</h3>
              <span className="sobre-card-sub">Sistema de gestão financeira com carteira digital, transações e relatórios</span>
            </div>
            <span className="sobre-card-date" style={{color:'#f5c518'}}>Em desenvolvimento</span>
          </div>
          <div className="sobre-tags">
            <span className="tag">React JS</span>
            <span className="tag">Node.js</span>
            <span className="tag">PostgreSQL</span>
          </div>
        </div>

        <div className="sobre-card">
          <div className="sobre-card-header">
            <div>
              <h3 className="sobre-card-title">E-commerce Oasis</h3>
              <span className="sobre-card-sub">Loja virtual completa com carrinho, filtros e integração com pagamentos</span>
            </div>
            <span className="sobre-card-date" style={{color:'#f5c518'}}>Em desenvolvimento</span>
          </div>
          <div className="sobre-tags">
            <span className="tag">React JS</span>
            <span className="tag">Node.js</span>
            <span className="tag">PostgreSQL</span>
          </div>
        </div>

      </section>

    </main>
  )
}

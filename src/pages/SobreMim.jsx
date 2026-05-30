export default function SobreMim() {
  return (
    <main className="content page-content">

      <section className="sobre-section">
        <h2 className="sobre-section-title">Quem sou eu</h2>
        <p className="sobre-text">Descrição pessoal aqui...</p>
      </section>

      <section className="sobre-section">
        <h2 className="sobre-section-title">Experiência Profissional</h2>

        <div className="sobre-card">
          <div className="sobre-card-header">
            <div>
              <h3 className="sobre-card-title">Cargo / Função</h3>
              <span className="sobre-card-sub">Empresa ou Cliente</span>
            </div>
            <span className="sobre-card-date">2020 — Atual</span>
          </div>
          <p className="sobre-card-desc">Descrição das atividades e responsabilidades exercidas nessa função...</p>
          <div className="sobre-tags">
            <span className="tag">Tecnologia 1</span>
            <span className="tag">Tecnologia 2</span>
          </div>
        </div>

        <div className="sobre-card">
          <div className="sobre-card-header">
            <div>
              <h3 className="sobre-card-title">Cargo / Função</h3>
              <span className="sobre-card-sub">Empresa ou Cliente</span>
            </div>
            <span className="sobre-card-date">2018 — 2020</span>
          </div>
          <p className="sobre-card-desc">Descrição das atividades e responsabilidades exercidas nessa função...</p>
          <div className="sobre-tags">
            <span className="tag">Tecnologia 1</span>
            <span className="tag">Tecnologia 2</span>
          </div>
        </div>

      </section>

      <section className="sobre-section">
        <h2 className="sobre-section-title">Formação Acadêmica</h2>

        <div className="sobre-card">
          <div className="sobre-card-header">
            <div>
              <h3 className="sobre-card-title">Curso / Graduação</h3>
              <span className="sobre-card-sub">Instituição de Ensino</span>
            </div>
            <span className="sobre-card-date">2015 — 2019</span>
          </div>
          <p className="sobre-card-desc">Descrição do curso e áreas de estudo...</p>
        </div>

      </section>

      <section className="sobre-section">
        <h2 className="sobre-section-title">Certificações</h2>

        <div className="sobre-card">
          <div className="sobre-card-header">
            <div>
              <h3 className="sobre-card-title">Nome da Certificação</h3>
              <span className="sobre-card-sub">Plataforma ou Instituição</span>
            </div>
            <span className="sobre-card-date">2023</span>
          </div>
          <p className="sobre-card-desc">Descrição do que foi aprendido na certificação...</p>
        </div>

        <div className="sobre-card">
          <div className="sobre-card-header">
            <div>
              <h3 className="sobre-card-title">Nome da Certificação</h3>
              <span className="sobre-card-sub">Plataforma ou Instituição</span>
            </div>
            <span className="sobre-card-date">2022</span>
          </div>
          <p className="sobre-card-desc">Descrição do que foi aprendido na certificação...</p>
        </div>

      </section>

      <section className="sobre-section">
        <h2 className="sobre-section-title">Idiomas</h2>

        <div className="sobre-card">
          <div className="sobre-card-header">
            <div>
              <h3 className="sobre-card-title">Idioma</h3>
              <span className="sobre-card-sub">Nível de proficiência</span>
            </div>
          </div>
        </div>

      </section>

    </main>
  )
}

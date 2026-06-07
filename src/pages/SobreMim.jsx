export default function SobreMim() {
  return (
    <main className="content page-content">

      <section className="sobre-section">
        <h2 className="sobre-section-title">Quem sou eu</h2>
        <p className="sobre-text">
          Tenho 38 anos, sou divorciado e pai de um filho de 6 anos que é minha maior motivação.
          Sou apaixonado por tecnologia e inovação, mas minha vida vai muito além das telas.
        </p>
        <p className="sobre-text">
          A velocidade faz parte de quem eu sou — participo de campeonatos de Kart e também ando de moto,
          sempre buscando adrenalina com responsabilidade. No ar, tenho habilitação de piloto e gosto de
          voar em aviões de pequeno porte, uma paixão que une técnica, liberdade e precisão. Em um período
          da minha vida também saltei de paraquedas — mais uma experiência que reflete minha relação com
          a altitude e a busca por sensações únicas.
        </p>
        <p className="sobre-text">
          No lado mais tranquilo, toco violão — um contraponto ao ritmo acelerado do dia a dia,
          onde encontro equilíbrio e criatividade.
        </p>
      </section>

      <section className="sobre-section">
        <h2 className="sobre-section-title">Interesses & Hobbies</h2>

        <div className="sobre-card">
          <div className="sobre-card-header">
            <div>
              <h3 className="sobre-card-title">Automobilismo</h3>
              <span className="sobre-card-sub">Campeonato de Kart</span>
            </div>
          </div>
          <p className="sobre-card-desc">Participa ativamente de campeonatos de Kart, unindo paixão por velocidade, estratégia e competição.</p>
        </div>

        <div className="sobre-card">
          <div className="sobre-card-header">
            <div>
              <h3 className="sobre-card-title">Motociclismo</h3>
              <span className="sobre-card-sub">Piloto de moto</span>
            </div>
          </div>
          <p className="sobre-card-desc">Apaixonado por motos, utiliza a moto como estilo de vida e meio de explorar liberdade nas estradas.</p>
        </div>

        <div className="sobre-card">
          <div className="sobre-card-header">
            <div>
              <h3 className="sobre-card-title">Aviação</h3>
              <span className="sobre-card-sub">Piloto habilitado — aviões de pequeno porte</span>
            </div>
          </div>
          <p className="sobre-card-desc">Possui habilitação de piloto e voa em aviões de pequeno porte por puro prazer, unindo técnica aeronáutica e a sensação única de voar.</p>
        </div>

        <div className="sobre-card">
          <div className="sobre-card-header">
            <div>
              <h3 className="sobre-card-title">Música</h3>
              <span className="sobre-card-sub">Violão</span>
            </div>
          </div>
          <p className="sobre-card-desc">Toca violão como forma de expressão e equilíbrio, encontrando na música um contraponto ao ritmo intenso da vida.</p>
        </div>

      </section>

    </main>
  )
}

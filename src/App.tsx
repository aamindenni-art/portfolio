import './App.css'

const stack = [
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Docker',
  'Vite',
  'Git',
]

const projects = [
  {
    name: 'SupTech Platform',
    domain: 'Supervision',
    desc: 'Plateforme de supervision bancaire : collecte COREP, scoring CAMELS et tableaux de bord superviseur.',
    tags: ['Python', 'PostgreSQL', 'Docker'],
  },
  {
    name: 'Réglementation Crédit',
    domain: 'Réglementaire',
    desc: 'Référentiel et module d’inspection du portefeuille crédit (DIE), de la donnée au rapport.',
    tags: ['Analyse', 'Docs'],
  },
  {
    name: 'Modèles ML',
    domain: 'Data Science',
    desc: 'Scoring, matrices de confusion et importance des variables sur données bancaires.',
    tags: ['Python', 'scikit-learn'],
  },
]

function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">
          <span className="mono monogram">AD</span> Amin Denni
        </div>
        <nav className="nav-links">
          <a href="#apropos">À propos</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
          <a
            className="btn-ghost"
            href="https://github.com/aamindenni-art"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <span className="badge">
            <i className="dot"></i> Disponible pour de nouveaux projets
          </span>
          <h1>
            Développeur <span className="accent">supervision bancaire</span>{' '}
            &amp; web.
          </h1>
          <p className="lead">
            Je conçois des plateformes SupTech, des modèles de données et des
            interfaces web modernes — de la donnée réglementaire jusqu’au
            produit livré.
          </p>
          <div className="cta">
            <a className="btn" href="#projets">
              Voir les projets
            </a>
            <a
              className="btn-ghost"
              href="https://github.com/aamindenni-art"
              target="_blank"
              rel="noreferrer"
            >
              Code sur GitHub
            </a>
          </div>
        </section>

        <section id="stack">
          <h2 className="eyebrow">Stack technique</h2>
          <ul className="chips">
            {stack.map((s) => (
              <li key={s} className="chip mono">
                {s}
              </li>
            ))}
          </ul>
        </section>

        <section id="projets">
          <h2 className="eyebrow">Projets</h2>
          <div className="grid">
            {projects.map((p) => (
              <article className="card" key={p.name}>
                <div className="card-top">
                  <h3>{p.name}</h3>
                  <span className="domain mono">{p.domain}</span>
                </div>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag mono">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="apropos">
          <h2 className="eyebrow">À propos</h2>
          <p className="about">
            Ingénieur et développeur, je travaille à l’intersection de la
            finance réglementaire et du logiciel : conception de plateformes de
            supervision bancaire (SupTech), modèles de scoring et de données, et
            interfaces web modernes. J’aime livrer des produits robustes — de la
            donnée brute jusqu’à l’expérience utilisateur — avec une exigence de
            clarté et de fiabilité en production.
          </p>
        </section>

        <section id="contact">
          <h2 className="eyebrow">Contact</h2>
          <p className="lead" style={{ marginBottom: 22 }}>
            Un projet, une collaboration ? Écrivons-nous.
          </p>
          <div className="contact-links">
            <a
              className="btn"
              href="https://www.linkedin.com/in/amin-denni-a91681286/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn-ghost"
              href="https://github.com/aamindenni-art"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span className="mono">© 2026 Amin Denni</span>
        <span className="mono faint">C:\Workspace · built with Vite + React</span>
      </footer>
    </div>
  )
}

export default App

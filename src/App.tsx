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
          <span className="mono monogram">AD</span> Adam Denni
        </div>
        <nav className="nav-links">
          <a href="#projets">Projets</a>
          <a href="#stack">Stack</a>
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
      </main>

      <footer className="footer">
        <span className="mono">© 2026 Adam Denni</span>
        <span className="mono faint">C:\Workspace · built with Vite + React</span>
      </footer>
    </div>
  )
}

export default App

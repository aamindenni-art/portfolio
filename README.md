# Portfolio — Amin Denni

Portfolio personnel de **Amin Denni**, développeur (supervision bancaire & web).
Site vitrine construit avec **Vite + React + TypeScript**, déployé sur GitHub Pages.

🌐 **En ligne** : https://aamindenni-art.github.io/portfolio/

## Aperçu

- Page unique : présentation, stack technique, projets, à propos, contact
- Thème sombre premium (bleu nuit + accent teal), responsive, accessible
- Liens LinkedIn & GitHub

## Stack

- **React 19** + **TypeScript**
- **Vite** (build & serveur de développement)
- CSS maison (aucune dépendance UI), polices IBM Plex

## Démarrer en local

```bash
npm install      # installer les dépendances
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

## Déploiement

Le déploiement est **automatique** : chaque `git push` sur la branche `main`
déclenche le workflow GitHub Actions (`.github/workflows/deploy.yml`) qui build
le site et le publie sur GitHub Pages.

> Le chemin de base est configuré dans `vite.config.ts` (`base: '/portfolio/'`)
> pour correspondre à l'URL du dépôt sur GitHub Pages.

## Structure

```
src/
├── App.tsx      # composant principal (contenu de la page)
├── App.css      # styles des composants
├── index.css    # réinitialisation + thème (variables CSS)
└── main.tsx     # point d'entrée React
```

---

© 2026 Amin Denni

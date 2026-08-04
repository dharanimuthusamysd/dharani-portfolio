# Dharani M — Portfolio (React + Vite)

Departure-board / boarding-pass themed portfolio, built with React and Vite.

## Project structure

```
src/
  data/portfolioData.js   <- ALL content lives here (skills, projects, education...)
  hooks/useReveal.js       <- scroll-reveal animation hook
  components/              <- one component per section
  App.jsx                  <- assembles all sections
  index.css                <- all styling (design tokens + component styles)
```

To update your info later, you almost never need to touch a component —
just edit `src/data/portfolioData.js`.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
```

Outputs to `dist/`.

## Deploy to GitHub Pages

This repo is already configured (in `vite.config.js`) for:
`https://dharanimuthusamysd.github.io/dharani-portfolio/`

1. Install the deploy helper (already in package.json devDependencies):
   ```bash
   npm install
   ```
2. Push this project to your `dharani-portfolio` GitHub repo (root of the repo).
3. Deploy:
   ```bash
   npm run deploy
   ```
   This builds the site and pushes the `dist/` folder to a `gh-pages` branch.
4. On GitHub: **Settings → Pages → Source** → select branch `gh-pages`, folder `/ (root)`.

If you'd rather keep deploying the simple way (pushing raw HTML to `main`,
like before), run `npm run build`, then copy everything from `dist/` into
the repo root and push — no `gh-pages` branch needed.

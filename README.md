# Shreya's Portfolio

A clean, dark-mode personal portfolio built with React and Vite.

## Features

- Hero, About, Projects, Skills, Achievements, and Contact sections
- Responsive layout for desktop and mobile
- Dark mode toggle
- Minimal modern design with teal accents

## Local Development

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal to preview the site.

## Build

```bash
npm run build
```

## Deployment

### GitHub Pages

1. Install `gh-pages`:

```bash
npm install --save-dev gh-pages
```

2. Add the following fields to `package.json`:

```json
"homepage": "https://Tuppada.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:

```bash
npm run deploy
```

### Vercel

1. Go to [vercel.com](https://vercel.com) and sign in.
2. Import the repository.
3. Set the framework preset to `Vite`.
4. Use `npm install` as the install command, `npm run build` as the build command, and `npm run preview` as the output directory command.

## Notes

- Update the project links in `src/App.jsx` once live demos are available.
- Replace placeholder social URLs with your actual GitHub and LinkedIn profiles.

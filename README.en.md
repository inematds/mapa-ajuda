# mapa-ajuda

[![Help Map](guia/assets/banner-en.jpg)](https://inematds.github.io/mapa-ajuda/guia/en/)

**🇧🇷 [Português](README.md) · 🇺🇸 [English](README.en.md) · 🇪🇸 [Español](README.es.md)**

## What it is

mapa-ajuda is a ready-made help center template for websites, courses, communities and products. Instead of a list of frequently asked questions, the visitor clicks the problem they have right now and sees a path in steps, with the right link at each one. It suits anyone who keeps getting the same questions or has content scattered across many places. It is a single HTML page: to use it, just edit a text file with your own paths and publish it on any hosting.

## 📖 User guide

Full guide (landing + step by step): **https://inematds.github.io/mapa-ajuda/guia/en/**

A template for a **help center in the form of a map**: the person picks the problem they have right now and gets a path in order, with yes-or-no questions and the right link at each step. One HTML page, no build and no server, with a 3D illustration on each card (optional: with no image, the card uses an icon).

**Live (INEMA ecosystem example):** https://inematds.github.io/mapa-ajuda/
**Generic example:** https://inematds.github.io/mapa-ajuda/?config=exemplos/config.vazio.js

## How to use

1. Use this repository as a template (or download the ZIP).
2. Copy `exemplos/config.vazio.js` to `config.js` and edit the texts and links.
3. Publish on any static hosting (GitHub Pages, Vercel, Netlify).

Opening it straight in the browser (`file://`) also works.

## Files

| File | What it is |
|---|---|
| `index.html` | Engine: look, light/dark theme, path assembly. No need to touch it |
| `config.js` | Content of the INEMA example (6 paths) |
| `exemplos/config.vazio.js` | Commented generic example, a starting point |
| `assets/` | Illustrations of the INEMA example (cover + one per path) |
| `ANALISE.md` | Analysis of the pattern: why it works and how to write good paths (in Portuguese) |

## General configuration

`marca`, `titulo` (accepts `**highlight**` in a gradient), `subtitulo`, `destaques[]`, `capa` (cover image), `rodape`. Each problem: `id`, `titulo`, `resumo`, `icone`, `imagem`, `inicio`, `fluxo[]`, `rodape`.

## Node types

| Type | Fields |
|---|---|
| `passo` | `rotulo`, `titulo`, `texto`, `icone`, `tempo`, `marcadores[]`, `link:{texto,url}` |
| `seta` | `rotulo`, `cor: 'sim' \| 'nao'` |
| `pergunta` | `pergunta`, `ramo:{rotulo, tipo, titulo, texto, link, abrir}` |
| `lista` | `titulo`, `itens:[{titulo, texto, url}]` |
| `saida` | `pergunta`, `texto`, `destino` (id of another problem) |

Features: direct link to each path (`#id`), Esc key closes, remembered theme, respects "reduce motion", column layout on phones, escaped text (only `**bold**` is interpreted).

## License

MIT.

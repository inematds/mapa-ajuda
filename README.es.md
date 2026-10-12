# mapa-ajuda

[![Mapa de Ayuda](guia/assets/banner-es.jpg)](https://inematds.github.io/mapa-ajuda/guia/es/)

**🇧🇷 [Português](README.md) · 🇺🇸 [English](README.en.md) · 🇪🇸 [Español](README.es.md)**

## Qué es

mapa-ajuda es un modelo listo de centro de ayuda para sitios, cursos, comunidades y productos. En lugar de una lista de preguntas frecuentes, el visitante hace clic en el problema que tiene ahora y ve un camino en etapas, con el enlace correcto en cada una. Sirve para quien recibe siempre las mismas dudas o tiene contenido disperso en varios lugares. Es una sola página HTML: para usarla, basta editar un archivo de texto con tus caminos y publicarlo en cualquier hosting.

## 📖 Guía de uso

Guía completa (landing + paso a paso): **https://inematds.github.io/mapa-ajuda/guia/es/**

Modelo de **centro de ayuda en formato de mapa**: la persona elige el problema que tiene ahora y recibe un camino en orden, con preguntas de sí o no y el enlace correcto en cada etapa. Una página HTML, sin build y sin servidor, con ilustración 3D en cada tarjeta (opcional: sin imagen, la tarjeta usa un ícono).

**En vivo (ejemplo del ecosistema INEMA):** https://inematds.github.io/mapa-ajuda/
**Ejemplo genérico:** https://inematds.github.io/mapa-ajuda/?config=exemplos/config.vazio.js

## Cómo usar

1. Usa este repositorio como template (o descarga el ZIP).
2. Copia `exemplos/config.vazio.js` a `config.js` y edita los textos y enlaces.
3. Publica en cualquier hosting estático (GitHub Pages, Vercel, Netlify).

Abrirlo directo en el navegador (`file://`) también funciona.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Motor: visual, tema claro/oscuro, armado de los caminos. No hace falta tocarlo |
| `config.js` | Contenido del ejemplo INEMA (6 caminos) |
| `exemplos/config.vazio.js` | Ejemplo genérico comentado, punto de partida |
| `assets/` | Ilustraciones del ejemplo INEMA (portada + una por camino) |
| `ANALISE.md` | Análisis del patrón: por qué funciona y cómo escribir buenos caminos (en portugués) |

## Configuración general

`marca`, `titulo` (acepta `**destaque**` en degradado), `subtitulo`, `destaques[]`, `capa` (imagen de portada), `rodape`. Cada problema: `id`, `titulo`, `resumo`, `icone`, `imagem`, `inicio`, `fluxo[]`, `rodape`.

## Tipos de nodo

| Tipo | Campos |
|---|---|
| `passo` | `rotulo`, `titulo`, `texto`, `icone`, `tempo`, `marcadores[]`, `link:{texto,url}` |
| `seta` | `rotulo`, `cor: 'sim' \| 'nao'` |
| `pergunta` | `pergunta`, `ramo:{rotulo, tipo, titulo, texto, link, abrir}` |
| `lista` | `titulo`, `itens:[{titulo, texto, url}]` |
| `saida` | `pergunta`, `texto`, `destino` (id de otro problema) |

Recursos: enlace directo a cada camino (`#id`), la tecla Esc cierra, el tema se recuerda, respeta "reducir movimiento", diseño en columna en el celular, texto escapado (solo `**negrita**` se interpreta).

## Licencia

MIT.

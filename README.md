# mapa-ajuda

[![Mapa de Ajuda](guia/assets/banner.jpg)](https://inematds.github.io/mapa-ajuda/guia/)

**🇧🇷 [Português](README.md) · 🇺🇸 [English](README.en.md) · 🇪🇸 [Español](README.es.md)**

## O que é

O mapa-ajuda é um modelo pronto de central de ajuda para sites, cursos, comunidades e produtos. Em vez de uma lista de perguntas frequentes, o visitante clica no problema que tem agora e vê um caminho em etapas, com o link certo em cada uma. Serve para quem recebe sempre as mesmas dúvidas ou tem conteúdo espalhado em vários lugares. É uma página HTML só: para usar, basta editar um arquivo de texto com os seus caminhos e publicar em qualquer hospedagem.

## 📖 Guia de uso

Guia completo (landing + passo a passo): **https://inematds.github.io/mapa-ajuda/guia/**

Modelo de **central de ajuda em formato de mapa**: a pessoa escolhe o problema que tem agora e recebe um caminho em ordem, com perguntas de sim ou não e o link certo em cada etapa. Uma página HTML, sem build e sem servidor, com ilustração 3D em cada cartão (opcional: sem imagem, o cartão usa ícone).

**Ao vivo (exemplo do ecossistema INEMA):** https://inematds.github.io/mapa-ajuda/
**Exemplo genérico:** https://inematds.github.io/mapa-ajuda/?config=exemplos/config.vazio.js

## Como usar

1. Use este repositório como template (ou baixe o ZIP).
2. Copie `exemplos/config.vazio.js` para `config.js` e edite os textos e links.
3. Publique em qualquer hospedagem estática (GitHub Pages, Vercel, Netlify).

Abrir direto no navegador (`file://`) também funciona.

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | Motor: visual, tema claro/escuro, montagem dos caminhos. Não precisa mexer |
| `config.js` | Conteúdo do exemplo INEMA (6 caminhos) |
| `exemplos/config.vazio.js` | Exemplo genérico comentado, ponto de partida |
| `assets/` | Ilustrações do exemplo INEMA (capa + uma por caminho) |
| `ANALISE.md` | Análise do padrão: por que funciona e como escrever bons caminhos |

## Configuração geral

`marca`, `titulo` (aceita `**destaque**` em gradiente), `subtitulo`, `destaques[]`, `capa` (imagem da capa), `rodape`. Cada problema: `id`, `titulo`, `resumo`, `icone`, `imagem`, `inicio`, `fluxo[]`, `rodape`.

## Tipos de nó

| Tipo | Campos |
|---|---|
| `passo` | `rotulo`, `titulo`, `texto`, `icone`, `tempo`, `marcadores[]`, `link:{texto,url}` |
| `seta` | `rotulo`, `cor: 'sim' \| 'nao'` |
| `pergunta` | `pergunta`, `ramo:{rotulo, tipo, titulo, texto, link, abrir}` |
| `lista` | `titulo`, `itens:[{titulo, texto, url}]` |
| `saida` | `pergunta`, `texto`, `destino` (id de outro problema) |

Recursos: link direto para cada caminho (`#id`), tecla Esc fecha, tema lembrado, respeita "reduzir movimento", layout em coluna no celular, texto escapado (só `**negrito**` é interpretado).

## Licença

MIT.


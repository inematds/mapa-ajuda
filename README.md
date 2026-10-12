# mapa-ajuda

**PT** · [EN](#en) · [ES](#es)

Modelo de **central de ajuda em formato de mapa**: a pessoa escolhe o problema que tem agora e recebe um caminho em ordem, com perguntas de sim ou não e o link certo em cada etapa. Uma página HTML, sem build, sem servidor, sem imagens obrigatórias.

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
| `ANALISE.md` | Análise do padrão: por que funciona e como escrever bons caminhos |

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

---

<a id="en"></a>
## EN

A **map-style help center** template: visitors pick the problem they have right now and get an ordered path with yes/no questions and the right link at each step. One HTML page, no build, no server, no required images. Copy `exemplos/config.vazio.js` to `config.js`, edit texts and links, publish on any static host. Live INEMA example: https://inematds.github.io/mapa-ajuda/

<a id="es"></a>
## ES

Plantilla de **centro de ayuda en forma de mapa**: la persona elige el problema que tiene ahora y recibe un camino ordenado, con preguntas de sí o no y el enlace correcto en cada etapa. Una sola página HTML, sin build, sin servidor y sin imágenes obligatorias. Copia `exemplos/config.vazio.js` a `config.js`, edita textos y enlaces y publica en cualquier hosting estático. Ejemplo INEMA en vivo: https://inematds.github.io/mapa-ajuda/

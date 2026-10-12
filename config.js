/*
 * Configuração do Mapa de Ajuda — exemplo do ecossistema INEMA.
 * Para o seu negócio, copie exemplos/config.vazio.js para cá e edite.
 * Tipos de nó do fluxo: passo, seta, pergunta, lista, saida (ver README).
 */
window.MAPA_AJUDA = {
  tituloAba: 'Mapa de Ajuda · INEMA',
  marca: {
    nome: 'INEMA',
    monograma: 'i',
    sub: 'Mapa de Ajuda',
    links: [
      { texto: 'inema.club', url: 'https://inema.club' },
      { texto: 'Busca', url: 'https://buscas.inema.club' },
      { texto: 'News', url: 'https://news.inema.pro' }
    ]
  },
  kicker: 'Central de ajuda do ecossistema',
  titulo: 'Do que você precisa agora?',
  subtitulo: 'Escolha a situação mais parecida com a sua. O caminho abre com as etapas em ordem e o link certo em cada uma.',
  rodape: '**INEMA** · inema.club · inema.pro · inema.vip · eventos.inema.pro · aventura.inema.club',

  problemas: [
    {
      id: 'comecar',
      titulo: 'Não sei por onde começar',
      resumo: 'Primeiro contato com IA ou com o INEMA.',
      icone: 'bussola',
      fluxo: [
        { tipo: 'passo', rotulo: 'Etapa 1', icone: 'foguete', titulo: 'Trilha para iniciantes', texto: 'A sequência pensada para quem está chegando agora.', link: { texto: 'Abrir a trilha', url: 'https://inema.club/#trilha-iniciantes' } },
        { tipo: 'seta' },
        { tipo: 'passo', rotulo: 'Etapa 2', icone: 'busca', titulo: 'Escolha um curso pelo tema', texto: 'Filtre por assunto, ferramenta ou nível. Tudo aberto e em português.', link: { texto: 'Buscar cursos', url: 'https://buscas.inema.club' } },
        { tipo: 'seta' },
        { tipo: 'pergunta', rotulo: 'Etapa 3', pergunta: 'Você terminou um curso e fez o projeto dele?', ramo: { rotulo: 'Se não', tipo: 'nao', titulo: 'Termine antes de abrir outro.', texto: 'Um curso concluído ensina mais do que três começados.', link: { texto: 'Ver cursos', url: 'https://inema.club/cursos' } } },
        { tipo: 'seta', rotulo: 'Se sim', cor: 'sim' },
        { tipo: 'saida', pergunta: 'Já fez um projeto de verdade?', texto: 'Próximo: ir mais fundo', destino: 'aprofundar' }
      ]
    },
    {
      id: 'encontrar',
      titulo: 'Não encontro um conteúdo',
      resumo: 'Sabe que existe um curso, projeto ou vídeo, mas não acha.',
      icone: 'busca',
      fluxo: [
        { tipo: 'passo', rotulo: 'Etapa 1', tempo: 'Na hora', icone: 'conversa', titulo: 'Pergunte ao agente do INEMA.club', texto: 'Fica na página inicial e responde com o link do curso ou projeto.', link: { texto: 'Perguntar', url: 'https://inema.club' } },
        { tipo: 'seta', rotulo: 'Não achou?' },
        { tipo: 'passo', rotulo: 'Etapa 2', icone: 'busca', titulo: 'Busque por tema ou ferramenta', texto: 'Cursos e projetos indexados por assunto, com link direto.', link: { texto: 'Abrir a busca', url: 'https://buscas.inema.club' } },
        { tipo: 'seta', rotulo: 'Ainda nada?' },
        { tipo: 'passo', rotulo: 'Etapa 3', icone: 'play', titulo: 'Procure nos vídeos', texto: 'Explicativos, aulas e shorts publicados, do mais novo ao mais antigo.', link: { texto: 'Ver vídeos', url: 'https://inema.club/videos' } },
        { tipo: 'seta', rotulo: 'Ainda nada?' },
        { tipo: 'passo', rotulo: 'Etapa 4', icone: 'pessoas', titulo: 'Peça para a equipe', texto: 'Diga o nome ou o assunto do que procura. Se não existir, vira pedido.', link: { texto: 'Falar no Telegram', url: 'https://t.me/apoioinema' } }
      ],
      rodape: {
        tipo: 'mapa',
        titulo: 'Onde fica cada coisa no ecossistema',
        itens: [
          { titulo: 'inema.club', texto: 'Cursos, projetos, trilhas e vídeos abertos.', url: 'https://inema.club' },
          { titulo: 'buscas.inema.club', texto: 'Busca de cursos e projetos por tema.', url: 'https://buscas.inema.club' },
          { titulo: 'news.inema.pro', texto: 'O que mudou em IA, em linguagem simples.', url: 'https://news.inema.pro' },
          { titulo: 'eventos.inema.pro', texto: 'Imersões, treinamentos e gravações.', url: 'https://eventos.inema.pro' },
          { titulo: 'inema.pro', texto: 'Trilhas guiadas, acervo e curadoria.', url: 'https://inema.pro' },
          { titulo: 'inema.vip', texto: 'Comunidade e acervo privado.', url: 'https://inema.vip' },
          { titulo: 'aventura.inema.club', texto: 'Arquivo de aventura 2000–2014.', url: 'https://aventura.inema.club' },
          { titulo: 'inema.club/videos', texto: 'Todos os vídeos publicados.', url: 'https://inema.club/videos' }
        ]
      }
    },
    {
      id: 'suporte',
      titulo: 'Preciso de ajuda com acesso ou pagamento',
      resumo: 'Login, assinatura, cobrança ou algo que não abre.',
      icone: 'chave',
      inicio: '**Use um, dois ou os três canais.** Estão em ordem, do mais rápido ao mais completo.',
      fluxo: [
        { tipo: 'passo', rotulo: 'Mais rápido', tempo: 'Na hora', icone: 'conversa', titulo: 'Agente do INEMA.club', texto: 'Resolve as dúvidas comuns e indica o caminho certo.', link: { texto: 'Perguntar', url: 'https://inema.club' } },
        { tipo: 'seta' },
        { tipo: 'passo', rotulo: 'Direto com a equipe', tempo: 'Telegram', icone: 'pessoas', titulo: 'Fale com o suporte', texto: 'Conte o que tentou e onde travou. Print ajuda muito.', link: { texto: 'Abrir @apoioinema', url: 'https://t.me/apoioinema' } },
        { tipo: 'seta' },
        { tipo: 'passo', rotulo: 'Por escrito', tempo: 'E-mail', icone: 'email', titulo: 'Mande um e-mail', texto: 'Para cobrança e acesso, envie o **e-mail usado na compra** e o print da tela.', link: { texto: 'Escrever', url: 'mailto:inemavip@gmail.com' } }
      ],
      rodape: { tipo: 'nota', texto: 'É do **INEMA.VIP** ou do **INEMA.PRO**? Os grupos privados do Telegram também respondem, e muita dúvida já está resolvida lá.' }
    },
    {
      id: 'aprofundar',
      titulo: 'Quero ir mais fundo',
      resumo: 'Trilhas guiadas, acervo, comunidade e imersões.',
      icone: 'camadas',
      fluxo: [
        { tipo: 'pergunta', rotulo: 'Antes', pergunta: 'Você já concluiu um curso do INEMA.club?', ramo: { rotulo: 'Se não', tipo: 'nao', titulo: 'Comece pelo básico.', texto: 'A trilha para iniciantes prepara o terreno.', abrir: 'comecar', link: { texto: 'Ir para "Por onde começar"' } } },
        { tipo: 'seta', rotulo: 'Se sim', cor: 'sim' },
        { tipo: 'lista', rotulo: 'Etapa 1', titulo: 'Escolha o formato', itens: [
          { titulo: 'INEMA.PRO', texto: 'Trilhas guiadas, catálogo vivo e curadoria', url: 'https://inema.pro' },
          { titulo: 'INEMA.VIP', texto: 'Comunidade e acervo privado', url: 'https://inema.vip' },
          { titulo: 'Eventos', texto: 'Imersões, treinamentos e gravações', url: 'https://eventos.inema.pro' }
        ] },
        { tipo: 'seta' },
        { tipo: 'lista', rotulo: 'Etapa 2', titulo: 'Escolha uma área de estudo', itens: [
          { titulo: 'Skills', texto: 'Habilidades para agentes', url: 'https://eventos.inema.pro/skills/' },
          { titulo: 'Gestão de IA e agentes', texto: 'Times de agentes no trabalho', url: 'https://eventos.inema.pro/gestao-ia/' },
          { titulo: 'OSWork', texto: 'Terminal, projetos e publicação', url: 'https://eventos.inema.pro/oswork/' },
          { titulo: 'Mods', texto: 'Personalizar o Claude Code', url: 'https://eventos.inema.pro/mods/' },
          { titulo: 'JARVIS', texto: 'Sistemas operacionais de IA', url: 'https://eventos.inema.pro/jarvis/' }
        ] },
        { tipo: 'seta' },
        { tipo: 'passo', rotulo: 'Etapa 3', icone: 'pessoas', titulo: 'Entre na comunidade', texto: 'Os grupos do Telegram são privados, para quem é do INEMA.VIP e do INEMA.PRO.', link: { texto: 'Conhecer o INEMA.VIP', url: 'https://inema.vip' } }
      ]
    },
    {
      id: 'novidades',
      titulo: 'Quero acompanhar o que muda em IA',
      resumo: 'Ficar em dia sem gastar horas lendo.',
      icone: 'sinal',
      fluxo: [
        { tipo: 'passo', rotulo: 'Todo dia', icone: 'sinal', titulo: 'Leia o briefing', texto: 'O que mudou em IA, explicado para quem não é da área.', link: { texto: 'Abrir o News', url: 'https://news.inema.pro' } },
        { tipo: 'seta' },
        { tipo: 'passo', rotulo: 'Toda semana', icone: 'play', titulo: 'Veja os vídeos novos', texto: 'Explicativos curtos sobre ferramentas e lançamentos.', link: { texto: 'Ver vídeos', url: 'https://inema.club/videos' } },
        { tipo: 'seta' },
        { tipo: 'passo', rotulo: 'Quando quiser', icone: 'calendario', titulo: 'Assista às imersões', texto: 'Gravações e materiais de estudo por área.', link: { texto: 'Abrir o Eventos', url: 'https://eventos.inema.pro' } },
        { tipo: 'seta' },
        { tipo: 'pergunta', pergunta: 'Quer aplicar isso no seu trabalho?', ramo: { rotulo: 'Se sim', tipo: 'sim', titulo: 'Siga uma trilha.', texto: 'Ler novidades informa; um projeto feito ensina.', abrir: 'aprofundar', link: { texto: 'Ir para "Ir mais fundo"' } } }
      ]
    },
    {
      id: 'aventura',
      titulo: 'Vim pelo arquivo de aventura',
      resumo: 'Motos, trilhas e eventos de 2000 a 2014.',
      icone: 'montanha',
      inicio: '**O arquivo do antigo portal de aventura voltou.** Catorze anos de motos, trilhas, eventos e das pessoas por trás deles.',
      fluxo: [
        { tipo: 'passo', rotulo: 'Etapa 1', icone: 'montanha', titulo: 'Explore o arquivo', texto: '11,5 milhões de fotos, 309 comunidades e 160 mil matérias.', link: { texto: 'Abrir o arquivo', url: 'https://aventura.inema.club' } },
        { tipo: 'seta' },
        { tipo: 'pergunta', rotulo: 'Etapa 2', pergunta: 'Achou a sua comunidade ou o seu evento?', ramo: { rotulo: 'Se não', tipo: 'nao', titulo: 'Procure pelo nome, cidade ou ano.', texto: 'As comunidades e os eventos estão organizados no arquivo.', link: { texto: 'Procurar', url: 'https://aventura.inema.club' } } },
        { tipo: 'seta', rotulo: 'Se sim', cor: 'sim' },
        { tipo: 'passo', rotulo: 'Etapa 3', icone: 'livro', titulo: 'Acesso completo ao acervo', texto: 'Por assinatura: **R$ 14/mês ou R$ 47/ano**.', link: { texto: 'Ver o acesso', url: 'https://eai.inema.club' } },
        { tipo: 'seta' },
        { tipo: 'saida', pergunta: 'Problema para entrar ou pagar?', texto: 'Ir para o suporte', destino: 'suporte' }
      ]
    }
  ]
};

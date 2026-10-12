/*
 * Exemplo genérico: uma empresa de software com clientes e suporte.
 * Copie para config.js e troque os textos e os links.
 *
 * Tipos de nó:
 *   passo    { rotulo, titulo, texto, icone, tempo, marcadores[], link:{texto,url}, largo }
 *   seta     { rotulo, cor: 'sim'|'nao' }
 *   pergunta { rotulo, pergunta, ramo:{ rotulo, tipo:'sim'|'nao', titulo, texto, volta, link:{texto,url}, abrir:'id' } }
 *   lista    { rotulo, titulo, itens:[{titulo, texto, url}] }
 *   saida    { pergunta, texto, destino:'id-de-outro-problema' }
 * Rodapé do caminho (opcional): { tipo:'nota', texto } ou { tipo:'mapa', titulo, itens:[...] }
 * Ícones: bussola busca chave camadas sinal montanha conversa pessoas email livro
 *         play foguete calendario grade brilho grafico escudo mapa raio relogio
 * Texto aceita **negrito**.
 */
window.MAPA_AJUDA = {
  tituloAba: 'Ajuda · Sua Empresa',
  marca: { nome: 'Sua Empresa', monograma: 'S', sub: 'Ajuda', links: [{ texto: 'Site', url: 'https://exemplo.com' }] },
  kicker: 'Central de ajuda',
  titulo: 'Como podemos ajudar?',
  subtitulo: 'Escolha a situação mais parecida com a sua e siga as etapas.',
  rodape: '© Sua Empresa',
  mostrarComoUsar: true,

  problemas: [
    {
      id: 'primeiros-passos',
      titulo: 'Acabei de chegar',
      resumo: 'Configurar a conta e fazer a primeira entrega.',
      icone: 'foguete',
      fluxo: [
        { tipo: 'passo', rotulo: 'Etapa 1', icone: 'chave', titulo: 'Crie a sua conta', texto: 'Leva dois minutos.', link: { texto: 'Criar conta', url: 'https://exemplo.com/cadastro' } },
        { tipo: 'seta' },
        { tipo: 'passo', rotulo: 'Etapa 2', icone: 'play', titulo: 'Veja o tour de 5 minutos', texto: 'As três telas que você vai usar todo dia.', link: { texto: 'Assistir', url: 'https://exemplo.com/tour' } },
        { tipo: 'seta', rotulo: 'Feito' },
        { tipo: 'saida', pergunta: 'Conta pronta?', texto: 'Próximo: primeiro resultado', destino: 'resultado' }
      ]
    },
    {
      id: 'resultado',
      titulo: 'Quero o primeiro resultado',
      resumo: 'Do zero ao primeiro uso real.',
      icone: 'grafico',
      fluxo: [
        { tipo: 'pergunta', rotulo: 'Etapa 1', pergunta: 'Você já importou os seus dados?', ramo: { rotulo: 'Se não', tipo: 'nao', titulo: 'Importe primeiro.', texto: 'Sem dados, nada aparece.', link: { texto: 'Como importar', url: 'https://exemplo.com/importar' } } },
        { tipo: 'seta', rotulo: 'Se sim', cor: 'sim' },
        { tipo: 'passo', rotulo: 'Etapa 2', icone: 'brilho', titulo: 'Use um modelo pronto', marcadores: ['**Relatório** semanal', '**Alerta** de queda', '**Painel** do time'], link: { texto: 'Ver modelos', url: 'https://exemplo.com/modelos' } }
      ]
    },
    {
      id: 'suporte',
      titulo: 'Algo deu errado',
      resumo: 'Erro, acesso ou cobrança.',
      icone: 'escudo',
      inicio: '**Use um ou todos.** Em ordem, do mais rápido ao mais completo.',
      fluxo: [
        { tipo: 'passo', rotulo: 'Mais rápido', tempo: 'Na hora', icone: 'busca', titulo: 'Busque na base de ajuda', link: { texto: 'Buscar', url: 'https://exemplo.com/ajuda' } },
        { tipo: 'seta' },
        { tipo: 'passo', rotulo: 'Com uma pessoa', tempo: 'Em até 1 dia útil', icone: 'email', titulo: 'Abra um chamado', texto: 'Diga o que tentou e mande um print.', link: { texto: 'Abrir chamado', url: 'mailto:suporte@exemplo.com' } }
      ],
      rodape: { tipo: 'nota', texto: 'Cada caminho é só uma lista de etapas na configuração. Adicione quantos precisar.' }
    }
  ]
};

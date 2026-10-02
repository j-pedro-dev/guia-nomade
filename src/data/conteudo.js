/**
 * Todos os textos das seções da página.
 * Para mudar uma frase, edite aqui. Os componentes só leem estes dados.
 */
import {
  DollarSign, MapPin, Clock, Layers, TrendingUp, Plane,
  ListChecks, Wrench, FileSpreadsheet, Languages,
} from 'lucide-react'

export const NAVEGACAO = [
  { label: 'Método', href: '#metodo' },
  { label: 'Conteúdo', href: '#conteudo' },
  { label: 'Autor', href: '#autor' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export const HERO = {
  selo: 'Ebook de Lucas Melo',
  titulo: 'Pare de vender seu tempo',
  tituloDestaque: 'por trocados.',
  subtitulo:
    'Enquanto você bate ponto, tem gente comum ganhando em dólar com um notebook na mochila. Este manual mostra o caminho, mesmo começando do zero.',
  ctaPrincipal: 'Quero sair do 9 às 18',
  ctaSecundario: 'Ver o que tem dentro',
  garantias: ['Acesso imediato', 'Garantia de 7 dias', 'Atualizações incluídas'],
  foto: { legenda: 'Escritório de hoje', local: 'Algarve, Portugal' },
}

export const DORES = [
  'Nesse ritmo, a aposentadoria chega antes da liberdade.',
  'Você vê gente viajando o tempo todo e não entende como pagam isso.',
  'Já procurou como ganhar dinheiro online e só achou curso caro e confuso.',
  'Tem medo de olhar pra trás daqui a 5 anos e ver que nada mudou.',
]

export const BENEFICIOS = [
  { icone: DollarSign, titulo: 'Ganhe em dólar ou euro', texto: 'Clientes de fora pagam em moeda forte. Você gasta onde o dinheiro rende mais.' },
  { icone: MapPin, titulo: 'Liberdade geográfica', texto: 'Seu trabalho depende de internet, não de endereço.' },
  { icone: Clock, titulo: 'Rotina flexível', texto: 'Entregas por resultado e blocos de foco que cabem em qualquer fuso.' },
  { icone: Layers, titulo: 'Várias fontes de renda', texto: 'Serviços, afiliados e produtos digitais juntos.' },
  { icone: TrendingUp, titulo: 'Habilidades valorizadas', texto: 'O que o mercado digital procura de verdade.' },
  { icone: Plane, titulo: 'Viagens planejadas', texto: 'Passagens, bancos digitais e custo de vida resolvidos.' },
]

export const PASSOS = [
  { titulo: 'Escolha a habilidade', texto: 'A que tem demanda e combina com o que você já sabe.' },
  { titulo: 'Monte a operação', texto: 'Portfólio e ferramentas gratuitas, sem gastar o que não tem.' },
  { titulo: 'Feche os primeiros contratos', texto: 'Oferta específica para problema específico.' },
  { titulo: 'Compre a passagem', texto: 'Renda, rotina e reserva no lugar. Hora de ir.' },
]

export const MODULOS = [
  'Mentalidade', 'Organização financeira', 'Como ganhar dinheiro online', 'Freelancer', 'Afiliados',
  'Social media', 'Design', 'Copywriting', 'Tráfego pago', 'Produtos digitais', 'Inteligência artificial',
  'Clientes internacionais', 'Inglês e espanhol', 'Passagens aéreas', 'Bancos digitais', 'Segurança',
  'Plano de ação de 90 dias',
]

export const BONUS = [
  { icone: ListChecks, titulo: 'Checklist de embarque', texto: 'Documentos, mala, saúde e finanças.' },
  { icone: Wrench, titulo: 'Arsenal de ferramentas grátis', texto: 'Apps que substituem uma empresa inteira.' },
  { icone: FileSpreadsheet, titulo: 'Planilha de sobrevivência', texto: 'Quanto faturar para viver no seu destino.' },
  { icone: Languages, titulo: 'Guia de idiomas de bolso', texto: 'As frases que resolvem 90% das situações.' },
]

export const PARA_QUEM = {
  e: [
    'Cansou de ver outras pessoas vivendo a vida que você queria',
    'Quer trocar chefe e escritório por autonomia',
    'Topa estudar 1 hora por dia',
    'Prefere errar tentando a ficar imaginando',
  ],
  naoE: [
    'Espera dinheiro sem trabalho',
    'Procura fórmula mágica pra ficar rico rápido',
    'Compra curso e não abre',
  ],
}

export const AUTOR = {
  bio: 'Empreendedor digital. Comecei a estudar marketing cedo, movido por uma pergunta: como transformar habilidade em oportunidade sem depender de patrão? Testei os modelos na prática e coloquei no manual o que funciona, sem atalho mágico.',
  frase: 'Liberdade não nasce de sorte.',
  fraseDestaque: 'Nasce de preparo.',
}

export const ITENS_OFERTA = [
  '17 módulos práticos',
  '4 bônus exclusivos',
  'Plano de ação de 90 dias',
  'Acesso vitalício e atualizações',
]

export const FAQ = [
  { pergunta: 'Preciso de experiência?', resposta: 'Não. O manual começa do zero, pela escolha da sua primeira habilidade.' },
  { pergunta: 'Tenho pouco tempo. Funciona?', resposta: 'Sim. Foi pensado para quem ainda tem emprego e consegue separar 1 hora por dia.' },
  { pergunta: 'Preciso falar inglês fluente?', resposta: 'Não. Tem um módulo de inglês e espanhol funcional e um guia de bolso.' },
  { pergunta: 'Como recebo?', resposta: 'Na hora, por e-mail, logo depois do pagamento. Dá para ler no celular ou no computador.' },
  { pergunta: 'E se eu não gostar?', resposta: 'Você tem 7 dias de garantia. Pede o reembolso e recebe 100% de volta.' },
  { pergunta: 'Isso garante que vou ficar rico?', resposta: 'Não. É um método organizado. O resultado depende da sua dedicação.' },
]

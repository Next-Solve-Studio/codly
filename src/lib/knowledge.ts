export type KnowledgeItem = {
    id: string;
    keywords: string[];
    answer: string;
};

export const knowledge: KnowledgeItem[] = [
    {
        id: "sobre",
        keywords: ["o que e codly", "o que e a codly", "sobre codly", "conhecer codly", "para que serve codly", "o que faz", "proposta"],
        answer: "A Codly é a forma mais divertida e interativa de aprender a programar! 💻💜 Misturamos desafios rápidos de código, lições práticas estilo bite-sized, sistema de XP, corações e ligas para você dominar linguagens como Python, JavaScript e muito mais do zero.",
    },
    {
        id: "funcionamento",
        keywords: ["como funciona", "como aprender", "como estudar", "metodo codly", "licoes", "fases", "modulos", "praticar"],
        answer: "Funciona em etapas dinâmicas e curtas: cada lição traz conceitos rápidos direto ao ponto, seguidos por blocos de código para encaixar, corrigir ou escrever do zero. Você aprende errando e avançando fase por fase! 🚀",
    },
    {
        id: "linguagens",
        keywords: ["linguagens", "quais linguagens", "python", "javascript", "html", "css", "typescript", "aprender python", "aprender js"],
        answer: "Na Codly você encontra trilhas completas para as linguagens mais需求adas do mercado! ⚡ Temos conteúdos voltados para Python, JavaScript, HTML/CSS, lógica de programação e muito mais para você construir projetos reais.",
    },
    {
        id: "instalacao",
        keywords: ["baixar", "instalar", "download", "aplicativo", "android", "iphone", "ios", "pwa", "celular", "app"],
        answer: "Você pode usar a Codly direto pelo navegador ou instalá-la como aplicativo (PWA) no seu celular ou computador! 📱 Basta acessar o site oficial pelo seu dispositivo e selecionar a opção de adicionar à tela inicial.",
    },
    {
        id: "pagamento",
        keywords: ["pagamento", "pagar", "preco", "valor", "assinatura", "mensalidade", "cartao", "planos", "gratis", "premium", "pro"],
        answer: "A Codly possui trilhas gratuitas incríveis para você começar agora mesmo! 💜 Caso queira acelerar sua evolução sem limites de vidas ou anúncios, confira os planos e opções de assinatura disponíveis na seção de preços do site.",
    },
    {
        id: "xp",
        keywords: ["xp", "pontos", "pontuacao", "experiencia", "ganhar xp", "nivel", "subir de nivel"],
        answer: "O XP (pontos de experiência) mede o seu esforço e evolução na programação! ⚡ Você ganha XP completando lições, mantendo a ofensiva e superando desafios práticos de código.",
    },
    {
        id: "ranking",
        keywords: ["ranking", "classificacao", "competicao", "competir", "posicao", "ligas", "torneio"],
        answer: "As Ligas e o Ranking da Codly transformam o estudo em uma jornada emocionante! 🏆 Toda semana você compete em grupos com outros programadores com base no seu XP ganho, subindo de divisão (de Bronze até o Mestre da Lógica!).",
    },
    {
        id: "sequencia",
        keywords: ["sequencia diaria", "sequencia de estudos", "streak", "dias seguidos", "ofensiva", "fogo", "vidas", "coracoes"],
        answer: "A ofensiva (streak) rastreia quantos dias seguidos você estudou programação! 🔥 Manter a ofensiva cria o hábito diário. E fique de olho nos corações: eles são suas chances nas lições — errar faz parte, mas se acabarem, você pode revisá-las para recuperar!",
    },
    {
        id: "cadastro",
        keywords: ["cadastro", "cadastrar", "criar conta", "registrar", "comecar agora", "entrar", "login"],
        answer: "Para criar sua conta e salvar todo o seu XP, ofensivas e progresso nas trilhas, basta clicar no botão 'Começar grátis' no topo do site da Codly! 🚀 É rápido e gratuito.",
    },
];
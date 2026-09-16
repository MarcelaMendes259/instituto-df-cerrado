const viteEnv = import.meta.env;
const usandoBuildVite = Boolean(viteEnv && viteEnv.BASE_URL);
const imagensBase = usandoBuildVite ? `${viteEnv.BASE_URL}imagens/` : 'imagens/';

function imagem(webp, original) {
    return `${imagensBase}${usandoBuildVite ? webp : original}`;
}

const frentesAtuacao = [
    {
        numero: '01',
        titulo: 'Unidades de conservação',
        texto: 'Apoio a ações de conservação, visitação responsável e valorização de parques e reservas.',
        badge: 'Ação contínua',
        badgeClasse: 'badge-success'
    },
    {
        numero: '02',
        titulo: 'Pesquisa',
        texto: 'Monitoramento de fauna e flora, produção de dados e incentivo à ciência cidadã.',
        badge: 'Participação aberta',
        badgeClasse: 'badge-info'
    },
    {
        numero: '03',
        titulo: 'Educação ambiental',
        texto: 'Atividades educativas, trilhas interpretativas e ações com estudantes e visitantes.',
        badge: 'Ação contínua',
        badgeClasse: 'badge-success'
    },
    {
        numero: '04',
        titulo: 'Recuperação ambiental',
        texto: 'Mobilização para recuperação de áreas degradadas e proteção da vegetação nativa.',
        badge: 'Participação aberta',
        badgeClasse: 'badge-info'
    }
];

const projetos = [
    {
        titulo: 'Guardiões do Cerrado',
        categoria: 'Fauna • Monitoramento',
        texto: 'Projeto de monitoramento de mamíferos de médio e grande porte em áreas protegidas, com foco em espécies emblemáticas do Cerrado.',
        imagem: imagem('lobo.webp', 'lobo.png'),
        alt: 'Ilustração de lobo-guará.',
        visualClasse: 'purple-gradient',
        badge: 'Em andamento',
        badgeClasse: 'badge-success',
        reverso: false,
        destaques: [
            'Observação e registro de fauna',
            'Ciência cidadã e apoio de voluntários',
            'Produção de materiais educativos'
        ]
    },
    {
        titulo: 'Campos Vivos',
        categoria: 'Campos naturais • Aves',
        texto: 'Iniciativa voltada ao reconhecimento e valorização dos ambientes campestres do Cerrado, fundamentais para espécies especializadas.',
        imagem: imagem('galito.webp', 'galito.jpg'),
        alt: 'Ilustração da ave galito.',
        visualClasse: 'dark-gradient',
        badge: 'Novas ações',
        badgeClasse: 'badge-info',
        reverso: true,
        destaques: [
            'Observação de aves e habitats',
            'Educação sobre conservação de campos naturais',
            'Atividades com estudantes e visitantes'
        ]
    },
    {
        titulo: 'Flora do Cerrado',
        categoria: 'Flora • Pesquisa',
        texto: 'Levantamento educativo de espécies vegetais nativas e de ambientes sensíveis, com divulgação científica e incentivo à conservação.',
        imagem: imagem('lobelia.webp', 'lobelia.png'),
        alt: 'Ilustração de lobélia.',
        visualClasse: 'light-gradient',
        badge: 'Pesquisa ativa',
        badgeClasse: 'badge-success',
        reverso: false,
        destaques: [
            'Registro de espécies vegetais',
            'Divulgação científica',
            'Valorização da vegetação nativa'
        ]
    },
    {
        titulo: 'Ciência no Parque',
        categoria: 'Educação • Uso público',
        texto: 'Atividades de educação ambiental e interpretação da natureza para aproximar estudantes, visitantes e comunidade das unidades de conservação locais.',
        imagem: imagem('cerrado-hero.webp', 'cerrado-hero.jpg'),
        alt: 'Ilustração de paisagem do Cerrado.',
        visualClasse: 'purple-gradient',
        badge: 'Educação ambiental',
        badgeClasse: 'badge-highlight',
        reverso: true,
        destaques: [
            'Trilhas interpretativas',
            'Oficinas e ações educativas',
            'Formação para visitação responsável'
        ]
    }
];

const especies = [
    {
        numero: '01',
        titulo: 'Lobo-guará',
        texto: 'Chrysocyon brachyurus • Mamífero associado a ações de monitoramento e educação ambiental.'
    },
    {
        numero: '02',
        titulo: 'Tamanduá-bandeira',
        texto: 'Myrmecophaga tridactyla • Mamífero utilizado em atividades educativas sobre conservação da fauna.'
    },
    {
        numero: '03',
        titulo: 'Tatu-canastra',
        texto: 'Priodontes maximus • Espécie que reforça a importância da proteção de habitats naturais.'
    },
    {
        numero: '04',
        titulo: 'Galito',
        texto: 'Alectrurus tricolor • Ave relacionada à conservação dos campos naturais do Cerrado.'
    },
    {
        numero: '05',
        titulo: 'Lobélia',
        texto: 'Lobelia brasiliensis • Planta nativa destacada em ações de pesquisa e divulgação científica.'
    }
];

function gerarFrentesAtuacao() {
    return frentesAtuacao.map((item) => `
        <article class="info-card">
            <span class="badge ${item.badgeClasse}">${item.badge}</span>
            <span class="card-number">${item.numero}</span>
            <h3>${item.titulo}</h3>
            <p>${item.texto}</p>
        </article>
    `).join('');
}

function gerarProjetos() {
    return projetos.map((projeto) => `
        <article class="project-card${projeto.reverso ? ' reverse' : ''}">
            <div class="project-visual ${projeto.visualClasse}">
                <img src="${projeto.imagem}" alt="${projeto.alt}" loading="lazy" decoding="async">
            </div>
            <div class="project-content">
                <p class="project-tag">${projeto.categoria}</p>
                <span class="badge ${projeto.badgeClasse}">${projeto.badge}</span>
                <h2>${projeto.titulo}</h2>
                <p>${projeto.texto}</p>
                <ul>
                    ${projeto.destaques.map((item) => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </article>
    `).join('');
}

function gerarEspecies() {
    return especies.map((especie) => `
        <article class="info-card">
            <span class="card-number">${especie.numero}</span>
            <h3>${especie.titulo}</h3>
            <p>${especie.texto}</p>
        </article>
    `).join('');
}

export const templates = {
    inicio: `
        <section class="hero">
            <div class="container hero-grid">
                <div class="hero-copy">
                    <p class="eyebrow">Conservação do Cerrado • Brasília, DF</p>
                    <h1>Ciência e conservação para proteger a biodiversidade do Cerrado.</h1>
                    <p class="hero-text">O Instituto DF Cerrado é uma organização fictícia dedicada ao apoio a unidades de conservação, pesquisa, educação ambiental e participação social no Distrito Federal.</p>
                    <div class="hero-actions">
                        <a class="button button-primary" href="#projetos" data-route="projetos">Conheça nossos projetos</a>
                        <a class="button button-secondary" href="#voluntariado" data-route="voluntariado">Quero ser voluntário</a>
                    </div>
                </div>
                <figure class="hero-image">
                    <img src="${imagem('cerrado-hero.webp', 'cerrado-hero.jpg')}" alt="Ilustração minimalista de paisagem do Cerrado com vegetação, céu e silhueta de lobo-guará." decoding="async" fetchpriority="high">
                </figure>
            </div>
        </section>

        <section class="section section-soft">
            <div class="container">
                <div class="section-heading">
                    <p class="eyebrow">Nossa missão</p>
                    <h2>Quatro frentes de atuação</h2>
                    <p>Conservação aplicada, pesquisa e educação para fortalecer a relação entre pessoas e áreas naturais.</p>
                </div>
                <div class="card-grid four-columns">
                    ${gerarFrentesAtuacao()}
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container split-section">
                <div class="section-heading">
                    <p class="eyebrow">Por que o Cerrado importa</p>
                    <h2>Um bioma diverso que precisa ser conhecido para ser protegido.</h2>
                </div>
                <div>
                    <p>O Cerrado reúne paisagens, espécies e relações ecológicas fundamentais para a biodiversidade brasileira. No Distrito Federal, áreas naturais também cumprem um importante papel na educação ambiental, na pesquisa e na aproximação da população com a conservação.</p>
                    <p>Por isso, o projeto combina informação científica, participação social e atividades educativas em uma proposta simples: transformar conhecimento em cuidado com o território.</p>
                    <a class="button button-secondary" href="#projetos" data-route="projetos">Ver iniciativas</a>
                </div>
            </div>
        </section>

        <section class="section section-soft">
            <div class="container participation-grid">
                <div>
                    <p class="eyebrow">Participação social</p>
                    <h2>Conservação também se faz com educação, voluntariado e ciência cidadã.</h2>
                    <p>Estudantes, visitantes e comunidade podem participar de atividades educativas, observação da biodiversidade e ações demonstrativas de apoio à conservação.</p>
                </div>
                <div class="participation-actions">
                    <a class="button button-primary" href="#voluntariado" data-route="voluntariado">Participar</a>
                    <a class="button button-secondary" href="#contato" data-route="contato">Falar com o instituto</a>
                </div>
            </div>
        </section>
    `,

    projetos: `
        <section class="page-hero">
            <div class="container page-hero-content">
                <p class="eyebrow">Projetos e iniciativas</p>
                <h1>Pesquisa, educação e ação local para conservar o Cerrado.</h1>
                <p>Os projetos abaixo são fictícios e simulam uma atuação integrada em áreas naturais do Distrito Federal.</p>
            </div>
        </section>

        <div class="section">
            <div class="container project-list">
                ${gerarProjetos()}
            </div>
        </div>

        <section class="section section-soft" aria-labelledby="especies-protegidas">
            <div class="container">
                <div class="section-heading">
                    <p class="eyebrow">Espécies em destaque</p>
                    <h2 id="especies-protegidas">Biodiversidade que orienta nossas ações</h2>
                    <p>Algumas espécies ajudam a representar a diversidade de ambientes e os temas trabalhados nas iniciativas do instituto.</p>
                </div>
                <div class="card-grid four-columns">
                    ${gerarEspecies()}
                </div>
            </div>
        </section>

        <section class="section" aria-labelledby="apoie-conservacao">
            <div class="container split-section">
                <div class="section-heading">
                    <p class="eyebrow">Apoie a conservação</p>
                    <h2 id="apoie-conservacao">Conhecimento, participação e cuidado com o território.</h2>
                    <p>Em uma organização real, contribuições poderiam apoiar pesquisa, educação ambiental e ações de campo. Neste projeto, a seção demonstra como essa área poderia ser apresentada de forma transparente.</p>
                </div>
                <article class="info-card">
                    <span class="badge badge-highlight">Demonstração acadêmica</span>
                    <h3>Como uma contribuição poderia ajudar</h3>
                    <ul>
                        <li>Apoio a atividades de pesquisa e monitoramento</li>
                        <li>Produção de materiais de educação ambiental</li>
                        <li>Realização de ações com estudantes e visitantes</li>
                        <li>Suporte a iniciativas de conservação em áreas naturais</li>
                    </ul>
                    <p>Nenhuma contribuição financeira é processada por este site.</p>
                    <a class="button button-primary" href="#voluntariado" data-route="voluntariado">Participar como voluntário</a>
                </article>
            </div>
        </section>

        <section class="section section-soft" aria-labelledby="participacao-projetos">
            <div class="container participation-grid">
                <div>
                    <p class="eyebrow">Faça parte</p>
                    <h2 id="participacao-projetos">Quer participar de uma atividade de campo ou educação ambiental?</h2>
                    <p>O formulário de voluntariado permite registrar interesse nas áreas demonstrativas do projeto.</p>
                </div>
                <div class="participation-actions">
                    <a class="button button-primary" href="#voluntariado" data-route="voluntariado">Cadastrar interesse</a>
                    <a class="button button-secondary" href="#inicio" data-route="inicio">Voltar ao início</a>
                </div>
            </div>
        </section>
    `,

    voluntariado: `
        <section class="page-hero compact">
            <div class="container page-hero-content">
                <p class="eyebrow">Voluntariado</p>
                <h1>Transforme interesse pela natureza em participação.</h1>
                <p>Preencha o formulário demonstrativo abaixo para registrar interesse nas ações do instituto.</p>
            </div>
        </section>

        <div class="section form-section">
            <div class="container form-layout">
                <aside class="form-aside">
                    <p class="eyebrow">Antes de começar</p>
                    <h2>Onde você pode colaborar?</h2>
                    <ul><li>Educação ambiental</li><li>Monitoramento de fauna e flora</li><li>Pesquisa e ciência cidadã</li><li>Recuperação ambiental</li></ul>
                </aside>

                <form class="volunteer-form" id="volunteer-form" novalidate>
                    <p class="form-message" id="form-alert" role="alert" aria-live="assertive"></p>
                    <fieldset>
                        <legend>Dados pessoais</legend>
                        <div class="form-grid two-columns">
                            <div class="form-field full-width"><label for="nome">Nome completo *</label><input type="text" id="nome" name="nome" required minlength="3" autocomplete="name"></div>
                            <div class="form-field"><label for="email">E-mail *</label><input type="email" id="email" name="email" required autocomplete="email"></div>
                            <div class="form-field"><label for="telefone">Telefone *</label><input type="tel" id="telefone" name="telefone" required></div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Área de interesse</legend>
                        <div class="checkbox-grid">
                            <label><input type="checkbox" name="interesse" value="educacao"> Educação ambiental</label>
                            <label><input type="checkbox" name="interesse" value="fauna"> Monitoramento da fauna</label>
                            <label><input type="checkbox" name="interesse" value="pesquisa"> Pesquisa</label>
                        </div>
                    </fieldset>
                    <div class="consent-box"><label><input type="checkbox" id="consentimento" name="consentimento" required> Concordo com o uso demonstrativo dos dados neste projeto acadêmico. *</label></div>
                    <button class="button button-primary submit-button" type="submit">Quero ser voluntário</button>
                    <p class="form-message" id="form-message" role="status" aria-live="polite"></p>
                </form>
            </div>
        </div>
    `,

    contato: `
        <section class="page-hero compact">
            <div class="container page-hero-content">
                <p class="eyebrow">Contato</p>
                <h1>Entre em contato com o Instituto DF Cerrado.</h1>
                <p>Este é um projeto acadêmico fictício criado para demonstrar recursos de desenvolvimento front-end.</p>
            </div>
        </section>
        <section class="section">
            <div class="container split-section">
                <div><h2>Fale conosco</h2><p>Use os canais demonstrativos abaixo para conhecer a proposta da aplicação.</p></div>
                <div><p><strong>E-mail:</strong> contato@institutodfcerrado.example</p><p><strong>Telefone:</strong> (61) 0000-0000</p><p><strong>Localização:</strong> Brasília, Distrito Federal</p></div>
            </div>
        </section>
    `
};

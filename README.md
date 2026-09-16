# Instituto DF Cerrado

Projeto front-end acadêmico de uma ONG fictícia voltada à conservação do Cerrado no Distrito Federal. A aplicação foi desenvolvida como uma SPA (Single Page Application), com navegação dinâmica, recursos de acessibilidade, otimização de imagens e publicação automatizada no GitHub Pages.

## Visão geral

O Instituto DF Cerrado simula uma organização dedicada à conservação da biodiversidade, pesquisa, educação ambiental, participação social e valorização de unidades de conservação do Distrito Federal.

Entre os conteúdos apresentados estão projetos de monitoramento de fauna e flora, ações educativas, voluntariado e informações sobre espécies do Cerrado.

## Principais recursos

- Navegação dinâmica em SPA por hash
- Layout responsivo para diferentes tamanhos de tela
- Estrutura semântica em HTML5
- Formulário de voluntariado com validação em JavaScript
- Recursos de acessibilidade inspirados nas WCAG 2.1 nível AA
- Navegação por teclado e foco visível
- Textos alternativos para imagens
- Modo de alto contraste
- Conteúdo estático de fallback caso o JavaScript não seja executado
- Imagens otimizadas em WebP
- Build de produção com minificação
- Deploy automatizado no GitHub Pages

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript com ES Modules
- Vite
- Sharp
- html-minifier-terser
- Git e GitHub
- GitHub Actions
- GitHub Pages

## Estrutura principal do projeto

```text
.
├── index.html
├── css/
│   ├── style.css
│   ├── mobile.css
│   └── accessibility.css
├── js/
│   ├── main.js
│   └── modules/
│       ├── events.js
│       ├── router.js
│       ├── storage.js
│       ├── templates.js
│       └── validation.js
├── imagens/
├── public/
├── scripts/
│   └── optimize-images.mjs
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── package.json
└── vite.config.js
```

## Pré-requisitos

Para executar o projeto localmente com o fluxo de desenvolvimento e build, é recomendado ter instalado:

- Node.js 22 ou versão compatível
- npm
- Git

O site também pode ser visualizado diretamente pela versão publicada no GitHub Pages.

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/MarcelaMendes259/instituto-df-cerrado.git
cd instituto-df-cerrado
npm install
```

## Comandos disponíveis

### Ambiente de desenvolvimento

```bash
npm run dev
```

O comando otimiza as imagens e inicia o servidor de desenvolvimento do Vite.

### Otimização das imagens

```bash
npm run optimize:images
```

Executa o script responsável pela geração das versões otimizadas em WebP com Sharp.

### Build de produção

```bash
npm run build
```

Gera a versão de produção na pasta `dist`, com otimização das imagens, minificação de HTML, CSS e JavaScript e configuração adequada para publicação no GitHub Pages.

### Visualização da build

```bash
npm run preview
```

Inicia um servidor local para visualizar a versão gerada em `dist`.

## Testes e validação

O projeto não possui uma suíte automatizada de testes unitários. A validação realizada nesta etapa incluiu:

- execução bem-sucedida da build de produção;
- verificação da navegação entre as rotas da SPA;
- teste do formulário e das mensagens de validação;
- conferência do carregamento das imagens;
- testes de navegação por teclado;
- teste com leitor de tela;
- verificação do modo de alto contraste;
- validação estrutural do HTML com o W3C Validator durante o desenvolvimento.

## Acessibilidade

Foram aplicados recursos voltados à acessibilidade, como HTML semântico, link para pular ao conteúdo principal, navegação por teclado, foco visível, atributos ARIA, mensagens de erro acessíveis, textos alternativos e modo de alto contraste.

Os testes manuais incluíram navegação por teclado e uso de leitor de tela. Um ajuste adicional foi realizado para reduzir anúncios repetidos durante a navegação dinâmica.

## Otimização e build

A aplicação utiliza Vite para a build de produção. O processo inclui:

- minificação de CSS e JavaScript;
- minificação do HTML com `html-minifier-terser`;
- geração de imagens WebP com Sharp;
- manutenção dos recursos visuais como arquivos externos;
- saída final na pasta `dist`.

## Deploy

O deploy é automatizado com GitHub Actions. Sempre que alterações são integradas à branch `main`, o workflow:

1. configura o Node.js;
2. instala as dependências;
3. executa `npm run build`;
4. envia o conteúdo da pasta `dist` como artefato;
5. publica a aplicação no GitHub Pages.

Site publicado:

https://marcelamendes259.github.io/instituto-df-cerrado/

## Fluxo de versionamento

O desenvolvimento seguiu uma organização baseada em GitFlow:

- `main`: versão estável e publicada;
- `develop`: integração contínua das alterações;
- `feature/`: desenvolvimento de novas funcionalidades;
- `fix/`: correções específicas;
- `hotfix/`: correções urgentes aplicadas à versão estável.

As integrações foram realizadas por meio de pull requests e os commits utilizaram padrões semelhantes aos Conventional Commits, como `feat:`, `fix:`, `perf:` e `chore:`.

## Versionamento e release

O projeto utiliza versionamento semântico no formato `MAJOR.MINOR.PATCH`.

A release `v1.0.0` representa a primeira versão final estável e validada do projeto.

## Observação

Este é um projeto fictício desenvolvido exclusivamente para fins acadêmicos. A organização apresentada não existe e nenhum dado de formulário ou doação é processado por um servidor real.

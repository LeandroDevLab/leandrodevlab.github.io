const arrayProjetos = [
  {
    urlMiniatura: './assets/image/projects/mortgage.png',
    titulo: 'Calculadora de Hipoteca',
    subtitle: 'Projeto de calculadora de hipoteca com validação de formulário',
    tec1: 'Validação de campos e retorno visual ao usuário',
    tec2: 'Uso de conversão para moeda;',
    tec3: 'Nagevação com mouse e teclado',
    previa: 'https://leandrodevlab.github.io/Mortgage-Calculator/',
    repositorio: 'https://github.com/LeandroDevLab/Mortgage-Calculator',
    cardReverse: '',
  },
  {
    urlMiniatura: './assets/image/projects/6.png',
    titulo: 'Modelo de página de Perfil',
    subtitle: 'Projeto modelo de um portifólio/Página de perfil',
    tec1: 'Acionamento do teclado clicando;',
    tec2: 'Acionamento do Piano pelo teclado;',
    tec3: 'Controle de volume',
    previa: 'https://leandrodevlab.github.io/portifolio/',
    repositorio: 'https://github.com/LeandroDevLab/portifolio',
    cardReverse: '',
  },
  {
    urlMiniatura: './assets/image/projects/5.png',
    titulo: 'Landing Page Spiderman',
    subtitle: 'Projeto de Landing Page do Spiderman',
    tec1: 'Galeria de seleção com rotação 3D;',
    tec2: 'Website multipáginas;',
    tec3: 'Galeria com Framework.',
    previa: 'https://leandrodevlab.github.io/spider-man-multiverses-dio/',
    repositorio: 'https://github.com/LeandroDevLab/spider-man-multiverses-dio',
    cardReverse: '',
  },
  {
    urlMiniatura: './assets/image/projects/4.png',
    titulo: 'Landing Page Mundo Invertido',
    subtitle: 'Projeto de Landing Page para uma série "Mundo Invertido"',
    tec1: 'Manipulação de tema Light/Dark;',
    tec2: 'Manipulação de DOM;',
    tec3: 'Estilização de WebSite.',
    previa: 'https://leandrodevlab.github.io/semana-frontend-mundo-invertido/',
    repositorio:
      'https://github.com/LeandroDevLab/semana-frontend-mundo-invertido',
    cardReverse: '',
  },
  {
    urlMiniatura: './assets/image/projects/7.png',
    titulo: 'Pokedex Pokemon',
    subtitle: 'Projeto de criação de uma Pokedex',
    tec1: 'Utilização de dados de API;',
    tec2: 'Manipulação de DOM;',
    tec3: 'Estilização WebSite.',
    previa: 'https://leandrodevlab.github.io/js-developer-PokedexApi/',
    repositorio: 'https://github.com/LeandroDevLab/js-developer-PokedexApi',
    cardReverse: '',
  },
  {
    urlMiniatura: './assets/image/projects/1.png',
    titulo: 'Simulador Digital de Piano',
    subtitle: 'Projeto que simula um Piano de forma digital',
    tec1: 'Acionamento do teclado clicando;',
    tec2: 'Acionamento do Piano pelo teclado;',
    tec3: 'Controle de volume.',
    previa: 'https://leandrodevlab.github.io/simulador-piano/',
    repositorio: 'https://github.com/LeandroDevLab/simulador-piano',
    cardReverse: '',
  },
];

const divProjetos = document.querySelector('.todosProjetos');
let incremento = 0;

arrayProjetos.forEach(projeto => {
  const divProjeto = document.createElement('div');
  incremento++;
  if (incremento % 2 === 0) projeto.cardReverse = 'card--reverse';
  divProjeto.innerHTML = `<div class="projects__container">
            <div class="projects__card ${projeto.cardReverse}">
              <img
                class="card__cover"
                src="${projeto.urlMiniatura}"
                alt="${projeto.subtitle}"
              />
              <div class="card__body">
                <h3 class="card__title">${projeto.titulo}</h3>
                <p class="card__description">
                  ${projeto.subtitle}
                </p>
                <ul class="card__list">
                  <li class="card__item">${projeto.tec1}</li>
                  <li class="card__item">${projeto.tec2}</li>
                  <li class="card__item">${projeto.tec3}</li>
                </ul>
                <ul class="habilidades__list">
                  <li class="habilidades__item">
                    <img
                      class="habilidades__logo"
                      src="./assets/image/technologies/HTML.svg"
                      alt=""
                    />
                  </li>
                  <li class="habilidades__item">
                    <img
                      class="habilidades__logo"
                      src="./assets/image/technologies/CSS.svg"
                      alt=""
                    />
                  </li>
                  <li class="habilidades__item">
                    <img
                      class="habilidades__logo"
                      src="./assets/image/technologies/JS.svg"
                      alt=""
                    />
                  </li>
                  <li class="habilidades__item">
                    <img
                      class="habilidades__logo"
                      src="./assets/image/technologies/Bootstrap.svg"
                      alt=""
                    />
                  </li>
                </ul>
                <div class="card__buttons">
                  <a
                    href="https://leandrodevlab.github.io/portifolio/"
                    target="_blank"
                  >
                    <button class="btn btn--primary">
                      <span>Prévia</span>
                      <i class="bi bi-arrow-up-right"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/LeandroDevLab/portifolio"
                    target="_blank"
                  >
                    <button class="btn">
                      <span>Repositório</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>`;
  divProjetos.appendChild(divProjeto);
});

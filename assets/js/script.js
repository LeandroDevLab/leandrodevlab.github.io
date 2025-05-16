/* Simulando pegar informações de uma JSON */
/* Foi adicionado em cima para que os códigos e funções abaixo pudessem ler o document após ser criado primeiro */

const cursosJSON = [
    {
        "titleCourse": "JavaScript Básico - Para iniciantes",
        "localDate": "Udemy - Criador: Luiz Otávio Miranda e Tales Calogi Malaquias. Mar 2025. 7h39min.",
        "information": "Manipulação de variáveis; Objeto Math; Arrays; Function; Objetos."
    },
    {
        "titleCourse": "JavaScript - Lógica de programação",
        "localDate": "Udemy - Criador: Luiz Otávio Miranda e Tales Calogi Malaquias. Mar 2025. 9h08min.",
        "information": "Sobre lógica; Extensões que utilizo no VSCode; Operadores de comparação; Operadores Lógicos; Avaliação de Curto-Circuito (Short-Circuit); if, else if e else; Modelo HTML e CSS; Operação ternária; Objeto Date; Switch/Case; Exercício com switch e date; Mais diferenças entre var e let/const; Atribuição via desestruturação (Objetos); For - Clássico - Estrutura de repetição; DOM e a árvore do DOM; For in - Estrutura de repetição; For of - Estrutura de repetição; Exercícios com NodeList (Browser); While e Do While - Estrutura de repetição; Break e Continue; Tratando e lançando erros (try, catch, throw); Tratando e lançando erros (try, catch, finally); setInterval e setTimeout."
    }
];

const todosOsCursos = document.getElementById("accordion");

cursosJSON.forEach(curso => {
    const boxCourse = document.createElement("div");
    boxCourse.innerHTML = `
        <div class="accordion__item">
            <button class="accordion__header">
                <span>${curso.titleCourse}</span>
                <i class="bi bi-chevron-down"></i>
            </button>
            <div class="accordion__body">
                <p>
                    ${curso.localDate}
                </p>
                <p>
                    ${curso.information}
                </p>
            </div>
        </div>
    `;
    todosOsCursos.appendChild(boxCourse);
});

/* Codificando */

const toggleTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement // assistir os documentos da página como um todo

function changeTheme () {
    const currentTheme = rootHtml.getAttribute('data-theme');
    
/*     if (currentTheme === 'dark') rootHtml.setAttribute('data-theme', 'light');
    else rootHtml.setAttribute('data-theme', 'dark'); */

    /* usando if ternário */
    currentTheme === 'dark' ? rootHtml.setAttribute('data-theme', 'light') : rootHtml.setAttribute('data-theme', 'dark');

    toggleTheme.classList.toggle('bi-sun'); /* se tem tira e se não tem coloca */
    toggleTheme.classList.toggle('bi-moon-stars'); /* se tem tira e se não tem coloca */
}

toggleTheme.addEventListener('click', changeTheme)

const accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement; //pegando o pai do meu elemento accordion__header, que é o accordion__item
        const accordionActive = accordionItem.classList.contains('active'); //saber se no elemento pai tem a class active

        accordionActive ? accordionItem.classList.remove('active') : accordionItem.classList.add('active');
    })
})

const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(item => {
    item.addEventListener('click', () => {
        menuLinks.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    })
})

/* Salvando no localStorage a opção de theme escolhida pelo usuário */
document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme');

  // Aplica o tema salvo (ou mantém o padrão)
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
  }

  document.getElementById('toggle-theme').addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
});




/* 
Dei pausa: como eu fiz
const divIcone = document.querySelector('.header__toggle');

function trocaIcon() {
    const iconeHeader = document.querySelector('#toggleTheme');
    const sol = document.querySelector('.bi-sun');
    const bodyTheme = document.querySelector('body');

    if (sol) {
        iconeHeader.classList.remove('bi-sun');
        iconeHeader.classList.add('bi-moon-stars');
        bodyTheme.classList.remove('dark');
        bodyTheme.classList.add('light');
        
    } else {
        iconeHeader.classList.remove('bi-moon-stars');
        iconeHeader.classList.add('bi-sun');
        bodyTheme.classList.remove('light');
        bodyTheme.classList.add('dark');
    };
};

divIcone.addEventListener('click', () => {
    trocaIcon()
}); */




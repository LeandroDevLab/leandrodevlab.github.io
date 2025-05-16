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




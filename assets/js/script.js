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




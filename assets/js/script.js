const toggleTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement

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




const overview = document.querySelector('#overview');
const repositories = document.querySelector('#repositories');
const projects = document.querySelector('#projects');
const navArrow = document.querySelectorAll('.nav-arrow');
const li = document.querySelectorAll('.li');

let href = window.location.href.split('/');
let pageName = href[href.length-1].replace('.php', '');

switch(pageName){
    case '':
        change(overview);
        break;
    case 'repositories':
        change(repositories);
        break;
    case 'projects':
        change(projects);
        break;
}

function change(page) {
    page.classList.add('on-page');
}

console.log(li);
console.log(navArrow);

li.forEach(e => {
    e.onmouseover = () => {
        navArrow[e.id].classList.add('move');
    }

    e.onmouseout = () => {
        navArrow[e.id].classList.remove('move');
    }
});

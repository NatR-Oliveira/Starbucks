const btnMenu = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

btnMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

document.addEventListener('click', function(evento) {
    if (!btnMenu.contains(evento.target) && !navMenu.contains(evento.target)) {
        navMenu.classList.remove('active');
    }
});
function abrirMenu() {
    const menu = document.querySelector('.mobile-menu');
    const logo = document.querySelector('.header-logotipo');
    menu.classList.toggle('open');
    logo.classList.toggle('hidden');
  }
  
  
window.sr = ScrollReveal({reset: true});
sr.reveal('.card', {duration: 2000});

sr.reveal('.titulo', {
    rotate: {x: 0, y:80, z:0},
    duration: 3000
});
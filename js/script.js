const open = document.querySelector('#open');
const close = document.querySelector('#close');
const hiddenMenu = document.querySelector('.hidden-menu');
const overlay = document.querySelector('#overlay');

open.addEventListener('click', () => {
    overlay.classList.add('show-menu')
    hiddenMenu.classList.add('show-menu')
    open.classList.add('show-menu')
    close.classList.add('show-menu')
});

close.addEventListener('click', () => {
    close.classList.remove('show-menu')
    open.classList.remove('show-menu')
    hiddenMenu.classList.remove('show-menu')
    overlay.classList.remove('show-menu')
})


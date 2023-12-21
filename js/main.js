document.addEventListener('scroll', () => {
    let bg = document.querySelector('.header');

    bg.style.backgroundSize = `100%, 4px 4px, ${100 - window.pageYOffset / 10}%`;

    let wrapperMenu = document.querySelector('.system');
    wrapperMenu.style.transform = `rotateZ(${window.pageYOffset / 10}deg)`;

})

document.querySelectorAll('.btn-accent').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelector('#beep').play();
    })
})

document.querySelector('.wrapperMenu').addEventListener('click', () => {
    document.querySelector('.leftSide').classList.toggle('activeLeft');
    document.querySelector('.rightSide').classList.toggle('activeRight');
})
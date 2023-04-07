let openNav = document.querySelector('.open-nav');
let closeNav = document.querySelector('.close-nav');
let navItems = document.querySelector('.nav-items');
let navBar = document.querySelector('.nav');

const copyright = document.querySelector('.copyright-text');

copyright.textContent = `\u00A9${new Date().getFullYear()}`


window.onscroll = () => {
    let logo = document.getElementById('logo-img');
    if(window.pageYOffset > 100){
        navItems.classList.add('nav-active');
        logo.src = './img/DC_logo-02.png';

    } else if(window.pageYOffset < 100)
    {
        navItems.classList.remove('nav-active');
        logo.src = './img/Artboard 2.png';

    }
}

openNav.addEventListener('click', () => {
  openNav.style.display = "none"
  closeNav.style.display = "inline-block"
  navBar.style.display = 'flex';
  navBar.style.marginTop = '0'
});

closeNav.addEventListener('click', () => {
    openNav.style.display = 'inline-block';
    closeNav.style.display = 'none';
    navBar.style.display = "none"
    
    
});

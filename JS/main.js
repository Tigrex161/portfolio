//Select DOM Items

const menuBtn = document.querySelector('.menu-btn');

const menu = document.querySelector('.menu');

const menuBranding = document.querySelector('.menu-nav');

const menuNav = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');


//Set Initial State of Menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu()
{
        menuBtn.classList.toggle('close');
        menu.classList.toggle('show');
        menuBranding.classList.toggle('show');
        menuNav.classList.toggle('show');
        navItems.forEach(item => item.classList.toggle('show'));
    
        showMenu = !showMenu;
       
}
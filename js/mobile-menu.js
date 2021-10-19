// mobile menu is initially set to display: none
// when hamburger icon is clicked, set to mobile menu to display: block
// then add class to fade in menu and change hamburger icon to close icon
// when close icon is clicked, remove fade in class and add fade out class
// once animation has finished, remove fade out class and set mobile menu to display: none

let mobileMenu = document.querySelector('.mobile-background');
let menuToggle = document.querySelector('.mobile-menu-toggle');
let mainContent = document.querySelector('#content');
let body = document.getElementsByTagName('body');


menuToggle.addEventListener('click', () => {

    if (!menuToggle.classList.contains('open')) {

        document.querySelector('.toggle-icon').src = "./assets/icons/icon-close.svg";
        menuToggle.classList.add('open');

        mobileMenu.classList.add('show');

        body[0].classList.add('fixed');

        setTimeout( () =>{ mobileMenu.classList.add('fade-in'); }, 100);


    } else {

        document.querySelector('.toggle-icon').src = "./assets/icons/icon-hamburger.svg";
        menuToggle.classList.remove('open'); 

        mobileMenu.classList.add('fade-out');
        body[0].classList.remove('fixed');

        setTimeout( () =>{ 
            mobileMenu.classList.remove('show');
            mobileMenu.classList.remove('fade-in');
            mobileMenu.classList.remove('fade-out');
            
            
        }, 500);
        
    }

    
});




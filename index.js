copyEmail = () => {
    emailBtn = document.querySelector('.clipboard');
    
    navigator.clipboard.writeText('contactlespino@gmail.com');

    emailBtn.style.bottom = '0';

    setTimeout(() => {
        emailBtn.style.bottom = '-30%';
      }, "2500")
}

skypeChat = () => {
    window.open('https://join.skype.com/invite/uJR30ME55Dyq', '_blank');
}

contact = () => {
    window.location.href='/contact.html';
}

burgerOpen = () => {
    burgerMenu = document.querySelector('#burger-menu');

    burgerMenu.style.visibility = 'visible';
    burgerMenu.style.animation = 'slidein 1s ease-in-out';
}

burgerClose = () => {
    burgerMenu = document.querySelector('#burger-menu');

    burgerMenu.style.visibility = 'collapse';

    burgerMenu.style.animation = 'slideout 1s ease-in-out';
}
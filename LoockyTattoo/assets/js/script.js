function menuMobile() {
    let menuMObile = document.querySelector('.mobile-menu');
    if (menuMObile.classList.contains('open')) {
        menuMObile.classList.remove('open');
        document.querySelector('.icon').src = "/assets/img/logo-mobile/menu_white_36dp.svg";
    } else {
        menuMObile.classList.add('open');
        document.querySelector('.icon').src = "/assets/img/logo-mobile/close_white_36dp.svg";
    }
}
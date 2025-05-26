document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.getElementById('header__button'); //кнопка

  burgerButton.addEventListener('click', () => {
    const burgerMenu = document.querySelector('.header__nav');
    const main = document.querySelector('.main');
    if (!burgerMenu.classList.contains('header__nav-active')) {
      burgerMenu.classList.add('header__nav-active');
      main.classList.add('main__show-overlay');
    } else {
      burgerMenu.classList.remove('header__nav-active');
      main.classList.remove('main__show-overlay');
    }
  });

  const menuLink = document.querySelector('.header__nav-drop'); //ссылка
  
  menuLink.addEventListener('click', function(event) {
    event.preventDefault();
    const subMenu = document.querySelector('.header__sub-menu');
    if (!subMenu.classList.contains('sub__menu-active')) {
      subMenu.classList.add('sub__menu-active');
      menuLink.classList.add('rotate');
    } else {
      subMenu.classList.remove('sub__menu-active');
      menuLink.classList.remove('rotate');
    }
  });

  const subMenuLink = document.querySelector('.header__sub-drop'); //ссылка

  subMenuLink.addEventListener('click', function(event) {
    event.preventDefault();
    const thirdMenu = document.querySelector('.header__third-menu');
    if (!thirdMenu.classList.contains('third__menu-active')) {
      thirdMenu.classList.add('third__menu-active');
      subMenuLink.classList.add('rotate-drop');
    } else {
      thirdMenu.classList.remove('third__menu-active');
      subMenuLink.classList.remove('rotate-drop');
    }
  })
});


window.addEventListener('load', () => {
  const burgerIcon = document.querySelector('.burger-menu');
  const navLinks = document.querySelectorAll('.nav__link');

  const createBurger = () => {
    const mobileMenu = document.createElement('div');
    mobileMenu.className = "mobile-menu";
    const wrapper = document.createElement('ul');
    wrapper.className = "mobile-menu__wrapper";

    navLinks.forEach((link) => {
      wrapper.append(link);
    });
    wrapper.querySelector('.trash').remove();
    mobileMenu.append(wrapper);
    burgerIcon.append(mobileMenu);
  }

  burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
    if (burgerIcon.classList.contains('active')) {
      createBurger();
    } else {
      burgerIcon.querySelector('.mobile-menu').remove();
    }
  });
});
window.addEventListener('load', () => {
  const logo = document.querySelector('.logo');
  const search = document.querySelector('.search');
  const header = document.querySelector('.header');

  search.addEventListener('click', (e) => {
    e.stopPropagation();
    search.classList.add('active');
    logo.classList.add('inactive');
    header.addEventListener('click', () => {
      search.classList.remove('active');
      logo.classList.remove('inactive');
    })
  })
});
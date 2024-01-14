window.addEventListener('load', () => {
  const modal = document.querySelector('.modal');
  const filtersIcon = document.querySelector('.filters-icon');

  filtersIcon.addEventListener('click', () => {
    modal.classList.add('active');

    const cross = document.querySelector('.cross-icon');
    cross.addEventListener('click', () => {
      modal.classList.remove('active');
    })

    const submitButton = document.querySelector('.modal__button');
    submitButton.addEventListener('click', () => {
      modal.classList.remove('active');
    })
  })
});
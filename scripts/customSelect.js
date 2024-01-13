window.onload = () => {
  const filterByLogotype = document.querySelector('#logotype');
  const filterByLogotypeText = filterByLogotype.querySelector('.filter__value');

  filterByLogotype.addEventListener('click', () => {
    filterByLogotype.classList.toggle('active');
  });

  const logotypeValues = filterByLogotype.querySelectorAll('.filter__element');
  logotypeValues.forEach((elem) => {
    elem.addEventListener('click', () => {
      filterByLogotypeText.innerText = elem.querySelector('label').innerText;
      filterByLogotype.classList.add('active');
    })
  });

  const filterByBrend = document.querySelector('#brend');
  const filterByBrendText = filterByBrend.querySelector('.filter__value');

  filterByBrend.addEventListener('click', () => {
    filterByBrend.classList.toggle('active');
  });

  const brendValue = filterByBrend.querySelectorAll('.filter__element');
  brendValue.forEach((elem) => {
    elem.addEventListener('click', () => {
      filterByBrendText.innerText = elem.querySelector('label').innerText;
      filterByBrend.classList.add('active');
    })
  });
}
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

  const filterByBrendM = document.querySelector('#brend-modal');
  const filterByBrendTextM = filterByBrendM.querySelector('.filter__value');

  filterByBrendM.addEventListener('click', () => {
    filterByBrendM.classList.toggle('active');
  });

  const brendValueM = filterByBrendM.querySelectorAll('.filter__element');
  brendValueM.forEach((elem) => {
    elem.addEventListener('click', () => {
      filterByBrendTextM.innerText = elem.querySelector('label').innerText;
      filterByBrendM.classList.add('active');
    })
  });

  const filterByLogotypeM = document.querySelector('#logotype-modal');
  const filterByLogotypeTextM = filterByLogotypeM.querySelector('.filter__value');

  filterByLogotypeM.addEventListener('click', () => {
    filterByLogotypeM.classList.toggle('active');
  });

  const logotypeValuesM = filterByLogotypeM.querySelectorAll('.filter__element');
  logotypeValuesM.forEach((elem) => {
    elem.addEventListener('click', () => {
      filterByLogotypeTextM.innerText = elem.querySelector('label').innerText;
      filterByLogotypeM.classList.add('active');
    })
  });
}
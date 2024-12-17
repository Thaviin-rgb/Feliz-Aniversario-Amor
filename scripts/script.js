const card = document.querySelectorAll('.card');
const style2 = document.querySelectorAll('.style-2');
const style3 = document.querySelectorAll('.style-3');
const img = document.querySelectorAll('.img');
const cardContainer = document.querySelectorAll('.card-container');
const data = 17121990;

const password1 = document.querySelector('.password-1');

let counter = 1;
for (let index = 0; index < card.length; index += 1) {
  cardContainer[index].style.height =  `${img[index].clientHeight + 30}px`
  card[index].addEventListener('click', () => {
    if (counter % 2 === 1) {
      card[index].style.transform = 'rotateY(180deg)';
    } else {
      card[index].style.transform = 'rotateY(0deg)';
    }
    counter += 1;
  })
}
for (let index = 0; index < style2.length; index += 1) {
  style3[index].style.top = `${style2[index].clientHeight + 25}px`
}

/*lock()

function lock() {
  const lock = localStorage.getItem('lock');
  const passwordContainer = document.querySelector('.password-container');
  if (!lock) {
    localStorage.setItem('lock', 'closed');
  }
  if (lock === 'closed') {
    passwordContainer.ariaDisabled = 'false';
    document.querySelector('main').style.pointerEvents = 'none';
  } else if (lock === 'open') {
    passwordContainer.ariaDisabled = 'true';
    document.querySelector('main').style.pointerEvents = 'auto';
  }
}*/

password1.addEventListener('input', async () => {
  const passwordContainer = document.querySelector('.password-container');
  if (password1.value == data) {
    //localStorage.setItem('lock', 'open');
    passwordContainer.ariaDisabled = 'true';

  }
})

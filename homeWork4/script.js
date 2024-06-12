//1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span.
// То есть при печати в input'е тег span также должен меняться.

const inputElem = document.querySelector('#from');
const spanElem = document.querySelector('span');
inputElem.addEventListener('input', () => {
  spanElem.textContent = inputElem.value;
});

//2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const messageBtnElem = document.querySelector('.messageBtn');
const messageElem = document.querySelector('.message');
messageBtnElem.addEventListener('click', () => {
  messageElem.classList.add('animate_animated', 'animate_fadeInLeftBig');
  messageElem.style.visibility = 'visible';
});

//3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено,
// форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error
// незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле,
// произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const formElem = document.querySelector('form');
const formInputElems = document.querySelectorAll('.form-control');
const formButton = formElem.lastElementChild;

formElem.addEventListener('input', (event) => {
  formInputElems.forEach((element) => {
    if (element.value === '') {
      event.preventDefault();
      element.style.border = '3px solid red';
      element.classList.add('error');
    } else {
      element.style.border = 'none';
      element.classList.remove('error');
    }
  });
});

formButton.addEventListener('click', (event) => {
  formInputElems.forEach((element) => {
    if (element.value === '') {
      event.preventDefault();
      element.style.border = '3px solid red';
      element.classList.add('error');
    }
     else if (element.classList.contains('error')) {
      event.preventDefault();
    }
  });
});




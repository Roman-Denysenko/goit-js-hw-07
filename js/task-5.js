// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его
// текущее значение в span#name - output.Если инпут пустой,
//     в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputRef = document.querySelector(`#name-input`);
const nameRef = document.querySelector(`#name-output`);

inputRef.addEventListener(`input`, onWritesName);

function onWritesName(event) {
  const text = `незнакомец`;
  let inputValue = event.currentTarget.value;

  event.data === null
    ? (nameRef.textContent = text)
    : (nameRef.textContent = inputValue);
}

// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль span#text
// обновляя свойство font - size.В результате при перетаскивании ползунка будет
// меняться размер текста.

// < input id = "font-size-control" type = "range" />
// <br />
// <span id="text">Абракадабра!</span>

const controlRef = document.querySelector(`#font-size-control`);
const textRef = document.querySelector(`#text`);

controlRef.addEventListener(`input`, onChangesFontSize);

function onChangesFontSize(event) {
  event.currentTarget.min = 10;
  event.currentTarget.max = 40;
  event.currentTarget.step = 1;

  textRef.style.fontSize = `${event.currentTarget.value}px`;
}

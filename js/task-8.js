// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит
// количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// < div id = "controls" >
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div >

//     <div id="boxes"></div>

const inputRef = document.querySelector(`#controls input `);
const renderBtnRef = document.querySelector(` [data-action="render"]`);
const clearBtnRef = document.querySelector(`[data-action="destroy"]`);
const containerRef = document.querySelector(`#boxes`);

const subContainer = document.createElement(`div`);

function createBoxes() {
  const amount = Number(inputRef.value);

  let width = 30;
  let height = 30;

  subContainer.innerHTML = ``;

  for (let i = 1; i <= amount; i += 1) {
    const element = document.createElement(`div`);
    const makeRandomColor =
      "#" + (((1 << 24) * Math.random()) | 0).toString(16);

    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    element.style.backgroundColor = `${makeRandomColor}`;

    subContainer.append(element);

    width += 10;
    height += 10;
  }
  return containerRef.append(subContainer);
}

renderBtnRef.addEventListener(`click`, createBoxes);
clearBtnRef.addEventListener(`click`, onClearContainer);

function onClearContainer() {
  subContainer.remove();
}

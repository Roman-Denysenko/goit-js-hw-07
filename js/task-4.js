// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение
// счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
const valueRef = document.querySelector(`#value`);

const btnIncrementRef = document.querySelector(
  `#counter [data-action="increment"]`
);
const btnDecrementRef = document.querySelector(
  `#counter [data-action="decrement"]`
);

let counterValue = 0;
counterValue = valueRef;

let value = 0;
counterValue.textContent = value;
const step = 1;

const increment = () => {
  value += step;
  return (counterValue.textContent = value);
};

const decrement = () => {
  value -= step;
  return (counterValue.textContent = value);
};

btnIncrementRef.addEventListener(`click`, increment);
btnDecrementRef.addEventListener(`click`, decrement);

'use strict';
const refs = {
  controls: document.querySelector('#tabs-1 [data-controls]'),
  panes: document.querySelector('#tabs-1 [data-panes]'),
};
refs.controls.addEventListener('click', event => {
  //если стоит якорь тогда можно не сбрасывать дефолтное поведения слушателя

  if (event.target.nodeName !== 'A') {
    console.log('кликнули не в ссылку');
    return;
  }

  const currentActiveControlItem = refs.controls.querySelector('.controls__item--active');

  if (currentActiveControlItem) {
    //   убираем класс с элемента кнопки(ссылки)
    currentActiveControlItem.classList.remove('controls__item--active');
    // убираем класс с элемента панели
    const paneId = currentActiveControlItem.getAttribute('href').slice(1);
    const pane = refs.panes.querySelector(`#${paneId}`);
    pane.classList.remove('pane--active');
  }

  const controlItem = event.target;
  controlItem.classList.add('controls__item--active');

  // добавляем панель после нажатия по атрибуту ссылки
  const paneId = controlItem.getAttribute('href').slice(1);
  // находим ту панель по ID
  const pane = refs.panes.querySelector(`#${paneId}`);
  //   console.log(pane);
  // добавим класс на панель когда она активна
  pane.classList.add('pane--active');
});

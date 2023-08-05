function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', function () {
  const controlsDiv = document.querySelector('#controls');
  const input = controlsDiv.querySelector('input');
  const createButton = controlsDiv.querySelector('[data-create]');
  const destroyButton = controlsDiv.querySelector('[data-destroy]');
  const boxesDiv = document.querySelector('#boxes');

  createButton.addEventListener('click', function () {
    const amount = parseInt(input.value);

    if (isNaN(amount)) {
      return;
    }

    const boxes = [];

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
    }

    boxesDiv.append(...boxes);
  });

  destroyButton.addEventListener('click', function () {
    boxesDiv.innerHTML = '';
  });
});








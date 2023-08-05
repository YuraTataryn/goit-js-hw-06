const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById('value');

let counterValue = 0;

function updateCounterUI() {
  valueSpan.textContent = counterValue;
}

decrementButton.addEventListener('click', function() {
  counterValue -= 1;
  updateCounterUI();
});

incrementButton.addEventListener('click', function() {
  counterValue += 1;
  updateCounterUI();
});
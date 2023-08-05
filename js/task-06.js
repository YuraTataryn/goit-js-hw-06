document.addEventListener('DOMContentLoaded', function () {
  const inputElement = document.getElementById('validation-input');

  inputElement.addEventListener('blur', function() {
    const desiredLength = parseInt(inputElement.getAttribute('data-length'));
    const inputValue = inputElement.value.trim();
    const isValid = inputValue.length === desiredLength;

    if (isValid) {
      inputElement.classList.remove('invalid');
      inputElement.classList.add('valid');
    } else {
      inputElement.classList.remove('valid');
      inputElement.classList.add('invalid');
    }
  });
});
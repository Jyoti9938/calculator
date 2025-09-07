const screen = document.getElementById('screen');
const keys = document.querySelector('.calculator-keys');
let input = '';

keys.addEventListener('click', event => {
  if (!event.target.matches('button')) return;
  const value = event.target.value;
  if (value === 'all-clear') {
      input = '';
      screen.value = '';
  } else if (value === '=') {
      try {
        input = eval(input).toString();
        screen.value = input;
      } catch {
        screen.value = "Error";
        input = '';
      }
  } else {
      input += value;
      screen.value = input;
  }
});

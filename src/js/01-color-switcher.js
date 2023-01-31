const startBtnEl = document.querySelector('[data-start]');
const stopBtnEL = document.querySelector('[data-stop]');

stopBtnEL.disabled = true;
let timerId = null;

startBtnEl.addEventListener('click', startRandomBgColor);
stopBtnEL.addEventListener('click', stopRandomBgColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function startRandomBgColor() {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;

  timerId = setInterval(() => 
    (document.body.style.backgroundColor = `${getRandomHexColor()}`), 1000
  );

  startBtnEl.disabled = true;
  stopBtnEL.disabled = false;
};


function stopRandomBgColor() {
    document.body.style.backgroundColor = '#fafafa';
    clearInterval(timerId);
    startBtnEl.disabled = false;
    stopBtnEL.disabled = true;
}
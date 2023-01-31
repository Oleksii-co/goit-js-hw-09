import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startTimerBtnEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

const CURRENT_DATE = Number.parseInt(Date.now() / 60000);

let date;

startTimerBtnEl.addEventListener('click', startTimer);

startTimerBtnEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  locale: {
    FirstDayOfWeek: 1,
  },
  onClose(selectedDates) {
    date = selectedDates[0].getTime();
    const isValid = isDateValid(date / 60000);
    if (!isValid) {
      window.alert('Please choose a date in the future');
      return;
    }
    startTimerBtnEl.disabled = false;
  },
};

flatpickr('#datetime-picker', options);

function isDateValid(date) {
  return date > CURRENT_DATE;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function startTimer() {
  startTimerBtnEl.disabled = true;
  const timerId = setInterval(() => {
    const curentDate = Date.now();
    const msCount = date - curentDate;

    const { days, hours, minutes, seconds } = convertMs(msCount);
    updateTimer({ days, hours, minutes, seconds });

    if (msCount < 0) {
      clearInterval(timerId);
    }
  }, 1000);
}

function addZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimer({ days, hours, minutes, seconds }) {
  if (seconds < 0) {
    return;
  }

  if (Number(minutesEl.innerHTML) !== minutes) {
    minutesEl.innerHTML = addZero(minutes);
  }

  if (Number(hoursEl.innerHTML) !== hours) {
    hoursEl.innerHTML = addZero(hours);
  }

  if (Number(daysEl.innerHTML) !== days) {
    daysEl.innerHTML = addZero(days);
  }
  secondsEl.innerHTML = addZero(seconds);
}

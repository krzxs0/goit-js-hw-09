import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

let finalUnix = 0;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  if (value < 10) return `0${value}`;
  return value;
}

let elements = document.getElementsByClassName("field");

flatpickr("#datetime-picker", {
  onChange: function (selectedDates, dateStr, instance) {
    let dateUnix = Date.parse(dateStr);
    let now = Date.now();
    if (now > dateUnix) {
      button[0].disabled = true;
      return alert("Неверная дата");
    }

    finalUnix = dateUnix;
    button[0].disabled = false;
  },
});

let button = document.getElementsByTagName("button");

button[0].disabled = true;

button[0].onclick = () => {
  let now = Date.now();
  let estimateObject = convertMs(finalUnix - now);

  innerValues(estimateObject);
  let iterator = 1;

  setInterval(() => {
    if (finalUnix == now) return;
    let estimateObject = convertMs(finalUnix - now - 1000 * iterator);
    innerValues(estimateObject);
    iterator++;
  }, 1000);
};

function innerValues(estimated) {
  elements[0].innerHTML = `<span>${addLeadingZero(
    estimated.days
  )}</span> <span>Days</span>`;
  elements[1].innerHTML = `<span>${addLeadingZero(
    estimated.hours
  )}</span> <span>Hours</span>`;
  elements[2].innerHTML = `<span>${addLeadingZero(
    estimated.minutes
  )}</span> <span>Minutes</span>`;
  elements[3].innerHTML = `<span>${addLeadingZero(
    estimated.seconds
  )}</span> <span>Seconds</span>`;
}

window.onload = () => {
  let estimateObject = convertMs(0);
  innerValues(estimateObject);
};

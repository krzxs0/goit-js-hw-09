
const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
const body = document.querySelector("body");
let timerId = null;

startButton.addEventListener("click", () => {
  startButton.disabled = true; 
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopButton.addEventListener("click", () => {
  clearInterval(timerId);
  startButton.disabled = false;
  console.log(`Interval with id ${timerId} has stopped!`);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const start = document.querySelector("[data-action='start']");
start.addEventListener("click", (e) => {
  start.setAttribute("disabled", "");
  stop.removeAttribute("disabled");
  startTimer();
});

const stop = document.querySelector("[data-action='stop']");
stop.addEventListener("click", (e) => {
  stop.setAttribute("disabled", "");
  start.removeAttribute("disabled");
  stopTimer();
});

function changeBackground(color) {
  document.body.style.background = color;
}

function startTimer() {
  if (typeof change === "undefined" || change === null) {
    change = setInterval(function () {
      color = colors[randomIntegerFromInterval(0, colors.length - 1)];
      changeBackground(color);
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(change);
  change = null;
}

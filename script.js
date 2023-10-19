// Variables to track timer, running state, and time values
let timer;
let isRunning = false;
let seconds = 0,
  minutes = 0,
  hours = 0;

// Get button elements
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const display = document.getElementById("display");

// Function to start the timer
function startTimer() {
  if (!isRunning) {
    timer = setInterval(updateDisplay, 1000);
    isRunning = true;
    startButton.disabled = true;
  }
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timer);
  isRunning = false;
  startButton.disabled = false;
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  display.textContent = "00:00:00";
  startButton.disabled = false;
}

// Function to update the timer display
function updateDisplay() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const h = hours < 10 ? "0" + hours : hours;
  const m = minutes < 10 ? "0" + minutes : minutes;
  const s = seconds < 10 ? "0" + seconds : seconds;

  display.textContent = h + ":" + m + ":" + s;
}

// Event listeners for buttons
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

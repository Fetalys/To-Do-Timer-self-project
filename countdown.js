function startTimer() {
  let hours = parseInt(document.getElementById("hour").value) || 0;
  let minutes = parseInt(document.getElementById("minutes").value) || 0;
  let seconds = parseInt(document.getElementById("seconds").value) || 0;

  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

  const countdownDisplay = document.getElementById("countdown");

  function updateDisplay() {
    let remainingHours = Math.floor(totalSeconds / 3600);
    let remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
    let remainingSeconds = totalSeconds % 60;

    countdownDisplay.textContent = `${String(remainingHours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }

  updateDisplay(); // Initial display

  if (totalSeconds > 0) {
    const timerInterval = setInterval(() => {
      totalSeconds--;
      updateDisplay();

      if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        countdownDisplay.textContent = "00:00:00";
        alert("Countdown complete!");
      }
    }, 1000);
  } else {
    alert("Please enter a valid time.");
  }
}
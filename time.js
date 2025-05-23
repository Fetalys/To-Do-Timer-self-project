function updateClock() {
    const options = { timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-PH', options);
    document.getElementById('clock-body').innerText = timeString;
}

// update the clock every second
setInterval(updateClock, 1000);

// initial call to display the clock immediately
updateClock();

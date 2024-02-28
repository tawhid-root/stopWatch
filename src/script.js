let startTime;
let intervalId;

function startStopwatch() {
    startTime = new Date().getTime();

    intervalId = setInterval(updateStopwatch, 1);
}

function stopStopwatch() {
    clearInterval(intervalId);
}

function resetStopwatch() {
    clearInterval(intervalId);

    document.getElementById("display").innerText = `00:00:00`;
}

function updateStopwatch() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const milliseconds = Math.floor(elapsedTime % 1000);

    const formattedTime = padTime(hours) + ':' + padTime(minutes) + ':' + padTime(seconds) + ':' + padTime(milliseconds);

    document.getElementById("display").innerText = formattedTime;
}

function padTime(value) {
    return value < 10 ? '0' + value : value;
}
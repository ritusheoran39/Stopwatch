document.addEventListener('DOMContentLoaded', function() {
    let startTime;
    let updatedTime;
    let difference;
    let tInterval;
    let savedTime = 0;
    let running = false;

    const timerDisplay = document.getElementById('time');
    const startButton = document.getElementById('start');
    const pauseButton = document.getElementById('pause');
    const resetButton = document.getElementById('reset');

    function startTimer() {
        console.log('Start Timer function called');
        if (!running) {
            startTime = new Date().getTime() - savedTime;
            tInterval = setInterval(getShowTime, 1);
            running = true;
            startButton.textContent = 'Running';
            startButton.disabled = true;
            pauseButton.disabled = false;
            resetButton.disabled = false;
            console.log('Timer started');
        }
    }

    function pauseTimer() {
        console.log('Pause Timer function called');
        if (running) {
            clearInterval(tInterval);
            savedTime = new Date().getTime() - startTime;
            running = false;
            startButton.textContent = 'Resume';
            startButton.disabled = false;
            pauseButton.disabled = true;
            console.log('Timer paused');
        }
    }

    function resetTimer() {
        console.log('Reset Timer function called');
        clearInterval(tInterval);
        running = false;
        savedTime = 0;
        timerDisplay.textContent = '00:00:00:000';
        startButton.textContent = 'Start';
        startButton.disabled = false;
        pauseButton.disabled = true;
        resetButton.disabled = true;
        console.log('Timer reset');
    }

    function getShowTime() {
        updatedTime = new Date().getTime();
        difference = updatedTime - startTime;
        
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);
        let milliseconds = Math.floor((difference % 1000));

        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        milliseconds = (milliseconds < 100) ? '0' + milliseconds : milliseconds;
        milliseconds = (milliseconds < 10) ? '0' + milliseconds : milliseconds;

        timerDisplay.textContent = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
    }

    startButton.addEventListener('click', () => {
        console.log('Start button clicked');
        startTimer();
    });
    pauseButton.addEventListener('click', () => {
        console.log('Pause button clicked');
        pauseTimer();
    });
    resetButton.addEventListener('click', () => {
        console.log('Reset button clicked');
        resetTimer();
    });

    pauseButton.disabled = true;
    resetButton.disabled = true;
});

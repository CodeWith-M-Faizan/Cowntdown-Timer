let countdown;  
let timeLeft = 0;  
let isPaused = false;  

const durationInput = document.getElementById('duration');  
const timerDisplay = document.getElementById('timerDisplay');  
const setButton = document.getElementById('setButton');  
const startButton = document.getElementById('startButton');  
const pauseButton = document.getElementById('pauseButton');  
const resetButton = document.getElementById('resetButton');  

setButton.addEventListener('click', () => {  
    timeLeft = parseInt(durationInput.value);  
    updateDisplay();  
});  

startButton.addEventListener('click', () => {  
    if (timeLeft > 0 && !isPaused) {  
        countdown = setInterval(() => {  
            if (timeLeft > 0) {  
                timeLeft--;  
                updateDisplay();  
            } else {  
                clearInterval(countdown);  
            }  
        }, 1000);  
    }  
});  

pauseButton.addEventListener('click', () => {  
    isPaused = true;  
    clearInterval(countdown);  
});  

resetButton.addEventListener('click', () => {  
    clearInterval(countdown);  
    timeLeft = 0;  
    isPaused = false;  
    updateDisplay();  
});  

function updateDisplay() {  
    const minutes = Math.floor(timeLeft / 60);  
    const seconds = timeLeft % 60;  
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;  
}
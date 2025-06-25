
let secretNumber = Math.floor(Math.random() * 100) + 1;
let lives = 10;

const guessBtn = document.getElementById("guessBtn");
const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");
const livesDisplay = document.getElementById("lives");

guessBtn.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  if (userGuess === secretNumber) {
    message.textContent = ` Congratulations! You guessed the number ${secretNumber} correctly!`;
    guessBtn.disabled = true;
    guessInput.disabled = true;
  } else {
    lives--;
    if (lives > 0) {
      message.textContent = userGuess > secretNumber ? "Too high! Try again." : "Too low! Try again.";
      livesDisplay.textContent = `Lives Remaining: ${lives}`;
    } else {
      message.textContent = `💀 Game Over! The correct number was ${secretNumber}.`;
      livesDisplay.textContent = "Lives Remaining: 0";
      guessBtn.disabled = true;
      guessInput.disabled = true;
    }
  }

  guessInput.value = "";
});

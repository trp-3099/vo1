let secretNumber = randomNumber();
let attempts = 0;

function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function Check() {
    let input = document.getElementById("Number");
    let message = document.getElementById("message");
    let guess = parseInt(input.value);

    if (isNaN(guess)) {
        message.innerText = "Please enter a valid number.";
        return;
    }

    attempts++;

    if (guess === secretNumber) {
        message.innerText = "Correct! You guessed the right number.";
        input.value = guess;
        attempts = 0;
        secretNumber = randomNumber();
    } else if (attempts >= 2) {
        message.innerText = `Out of attempts! The correct number was ${secretNumber}.`;
        input.value = guess;
        attempts = 0;
        secretNumber = randomNumber();
    } else if (guess > secretNumber) {
        message.innerText = "Too high! Try a lower number.";
    } else {
        message.innerText = "Too low! Try a higher number.";
    }
}

function Reset() {
    secretNumber = randomNumber();
    attempts = 0;

    let input = document.getElementById("Number");
    let message = document.getElementById("message");

    input.value = "";
    message.innerText = "New game started. You have 2 attempts.";
}
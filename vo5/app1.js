let secretNumber = 5;
let attempts = 0;

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
        input.value = "";
        attempts = 0;
        secretNumber = 5;
    } else if (attempts >= 2) {
        message.innerText = `Out of attempts! The correct number was ${secretNumber}.`;
        input.value = "";
        attempts = 0;
        secretNumber = 5;
    } else if (guess > secretNumber) {
        message.innerText = "Too high! Try a lower number.";
    } else {
        message.innerText = "Too low! Try a higher number.";
    }
}

function Reset() {
    secretNumber = 5;
    attempts = 0;

    let input = document.getElementById("Number");
    let message = document.getElementById("message");

    input.value = "";
    message.innerText = "New game started. You have 2 attempts.";
}
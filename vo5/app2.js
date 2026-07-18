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
        input.value = "";
        Swal.fire({
            title: "WIN!",
            text: "Congratulations! You won the game.",
            icon: "success",
            imageUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnlwc3ZydTVqbm15OHFsMW0zNzMwMjNxMXAwNnprNzBhYTB6a282YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KXOKGDNL5dxik2LrpM/giphy.gif",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        });
        Reset();
    } else if (attempts >= 2) {
        const correctNumber = secretNumber;
        message.innerText = `Out of attempts! The correct number was ${correctNumber}.`;
        input.value = "";
        Swal.fire({
            icon: "error",
            title: "Out of attempts!",
            text: `The correct number was ${correctNumber}. Try again.`,
        });
        Reset();
    } else if (guess > secretNumber) {
        message.innerText = "Too high! Try a lower number.";
        Swal.fire({
            icon: "info",
            title: "Too high!",
            text: "Try a lower number.",
        });
    } else {
        message.innerText = "Too low! Try a higher number.";
        Swal.fire({
            icon: "info",
            title: "Too low!",
            text: "Try a higher number.",
        });
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

// let getSum = (num1, num2) => {
//     return num1+num2;
// }

// console.log(getSum(10,20));


// Step 04 --------------------------------------

// let sample = txtValue =>{
//     return txtValue;
// }

// console.log(sample("Hi saman"));

// Step 05 -----------------------------------------

// let getSum = (num1, num2) => num1+num2;


// console.log(getSum(10,20));


// Step 06 --------------------------------------

// let sample = txtValue => txtValue;


// console.log(sample("Hi saman"));


const productsList = [
    { name: "bun", inStock: true },
    { name: "car", inStock: false },
    { name: "bat", inStock: true },
    { name: "van", inStock: false },
];



// for(product of productsList){
//     console.log(product);
// }


productsList.forEach(product => console.log(product));
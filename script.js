'use strict'


let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value); //after taking guess value converting it to a number 

    if (!guess) {
        //it will print no number is message field if no number is Enter by user
        document.querySelector('.message').textContent = "No Number!"
    } else if (guess === secretNumber) {
        displayMessage("correct Number")
        document.querySelector("body").style.backgroundColor = "#32CD32";
        document.querySelector(".number").style.width = "30rem";


        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore
        }
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "too high" : " to low")
            score--;
            document.querySelector('.score').textContent = score
        } else {
            displayMessage("you Lost!")
            document.querySelector('.score').textContent = 0;
        }
    }

    //instead of writing lot of code for wrong guess we can simply write above code
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = "too high";
    //         score--;
    //         document.querySelector('.score').textContent = score
    //     } else {
    //         document.querySelector('.message').textContent = "You Lost";
    //         document.querySelector('.score').textContent = 0;
    //     }


    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = "too low";
    //         score--;
    //         document.querySelector('.score').textContent = score

    //     }
    //     else {
    //         document.querySelector('.message').textContent = "You Lost";
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
}
)

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
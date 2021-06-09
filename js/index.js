const body = document.querySelector('body');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('.btn');
const gameStart = document.querySelector('.game-start');
const gameInfo = document.querySelector('.game-info');
const gameView = document.querySelector('.game-view');
const resetBtn = document.querySelector('.reset')

let computerWins = 0;
let playerWins = 0;
let round = 1;

const options = ['Rock', 'Scissors', 'Paper']

let result;

buttons.forEach(btn => {
    btn.addEventListener('click', playGame);
})

resetBtn.addEventListener('click', resetGame);

function playGame(event) {
    changeView()
    //setup player's selection
    let playerSelection = event.target.innerText;

    //setup computer's selection
    let randomNumber = Math.floor(Math.random() * 3);
    let computerSelection = options[randomNumber];

    checkWinner(playerSelection, computerSelection);

    showComputerSelection(computerSelection);
    showPlayerSelection(playerSelection);

    message.classList.remove('hidden');
    message.innerText = `${result}`;

    setTimeout(() => {
        message.classList.add('hidden');
    }, 2000)

    if (computerWins === 3 || playerWins === 3) {
        showResetButton()
        showFinalMessage()
    }
}

function showComputerSelection(selection) {
    let cSelection = gameView.querySelector('.computer-option');

    if (selection === 'Rock') {
        cSelection.style.backgroundPosition = '0 0';
    }

    if (selection === 'Paper') {
        cSelection.style.backgroundPosition = '-200px 0';
    }

    if (selection === 'Scissors') {
        cSelection.style.backgroundPosition = '-400px 0';
    }

}

function showPlayerSelection(selection) {
    let pSelection = gameView.querySelector('.player-option');

    if (selection === 'Rock') {
        pSelection.style.backgroundPosition = '0 0';
    }

    if (selection === 'Paper') {
        pSelection.style.backgroundPosition = '-200px 0';
    }

    if (selection === 'Scissors') {
        pSelection.style.backgroundPosition = '-400px 0';
    }
}

function changeView() {
    gameStart.classList.add('hidden');
    gameInfo.classList.remove('hidden');
    gameInfo.querySelector('.round').innerText = `Round: ${round}`;
    gameInfo.querySelector('.score').innerText = `${computerWins} : ${playerWins}`
    gameView.classList.remove('hidden');
}


function checkWinner(player, computer) {
    if (player === computer) {
        result = 'Draw';
        return;
    }

    if (player === 'Rock') {
        if (computer === 'Paper') {
            result = `Round ${round}\n${player} vs. ${computer}\nYou've LOST!`;
            computerWins += 1;
            score.innerText = `${computerWins} : ${playerWins}`
            round++;
        } else {
            result = `Round ${round}\n${player} vs. ${computer}\nYou've WON!`;
            playerWins += 1;
            score.innerText = `${computerWins} : ${playerWins}`
            round++;
        }
    }

    if (player === 'Paper') {
        if (computer === 'Scissors') {
            result = `Round ${round}\n${player} vs. ${computer}\nYou've LOST!`;
            computerWins += 1;
            score.innerText = `${computerWins} : ${playerWins}`
            round++;
        } else {
            result = `Round ${round}\n${player} vs. ${computer}\nYou've WON!`;
            playerWins += 1;
            score.innerText = `${computerWins} : ${playerWins}`
            round++;
        }
    }

    if (player === 'Scissors') {
        if (computer === 'Rock') {
            result = `Round ${round}\n${player} vs. ${computer}\nYou've LOST!`;
            computerWins += 1;
            score.innerText = `${computerWins} : ${playerWins}`
            round++;
        } else {
            result = `Round ${round}\n${player} vs. ${computer}\nYou've WON!`;
            playerWins += 1;
            score.innerText = `${computerWins} : ${playerWins}`
            round++;
        }
    }
}

function showResetButton() {
    buttons.forEach(btn => {
        btn.classList.add('hidden');
    })
    resetBtn.classList.remove('hidden');
}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    gameInfo.classList.add('hidden');
    gameStart.classList.remove('hidden');
    gameView.classList.add('hidden');
    resetBtn.classList.add('hidden');
    buttons.forEach(btn => {
        btn.classList.remove('hidden');
    })
    let msg = document.querySelector('.final-msg');
    msg.remove();
}

function showFinalMessage() {
    let msg = document.createElement('p');
    if (playerWins > computerWins) {
        msg.innerText = `Congratulations!\nYou have won with score ${playerWins} : ${computerWins}`
    } else {
        msg.innerText = `Sadly!\nYou have lost with score ${computerWins} : ${playerWins}`
    }
    msg.classList.add('final-msg');
    body.append(msg);
}

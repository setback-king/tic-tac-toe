
let gameboard = [];
const board = document.querySelector('.board')
const box = document.querySelectorAll('.box')
const game = document.getElementById('game')
const targetDiv = document.getElementById("game");
const gameSetup = document.getElementById('gameSetup');
const humanForm = document.getElementById('human');
const computerForm = document.getElementById('computer');
const playerOneInput = document.querySelector('.playerOne');
const playerTwoInput = document.querySelector('.playerTwo');
const playerOneInputAi = document.querySelector('.playerOneAI');
const playerTwoInputAi = document. querySelector('.playerTwoAI');
const playerOne =  document.querySelector('.playerOneName');
const playerTwo = document.querySelector('.playerTwoName');
const turnOne = document.querySelector('.playersOne');
const turnTwo = document.querySelector('.playersTwo');
const winner = document.querySelector('.results');
const results = document.getElementById('results')
const gameOptions = document.querySelector('.gameOptions')
let turn = 'playerOne'


function createGame(array) {
    for (let i = 0; i < box.length; i++) {
        box[i].setAttribute('dataset', i);
        box[i].textContent = array[i];
    }
} 

function updateHumanPlayers(){
    playerOne.textContent = playerOneInput.value;
    playerTwo.textContent = playerTwoInput.value;
}

function updateComputerPlayers(){
    playerOne.textContent = playerOneInputAi.value;
    playerTwo.textContent = playerTwoInputAi.value;
}


createGame(gameboard)

function startGame() {
    if (gameSetup.style.display === "none") {
        gameSetup.style.display = 'flex';
        targetDiv.style.display = 'none';
        gameOptions.style.display = 'none';
        playerOneInput.value = '';
        playerTwoInput.value = '';
        turn = 'playerOne'
    }
     else {
    targetDiv.style.display = "flex";
    gameSetup.style.display = "none";
    }
};

humanForm.addEventListener('click', (e) => {
    if (!e.target.matches('button')) {
        return;
      }
      else if (playerOneInput.value.length === 0 || playerTwoInput.value.length === 0) {
        alert("Please enter names for both players")
        return
      }
    
    startGame();
    updateHumanPlayers()
})

computerForm.addEventListener('click', (e) =>{
    if (!e.target.matches('button')) {
        return;
      }
      else if (playerOneInputAi.value.length === 0) {
        alert("Please enter a name for Player One")
        return
      }
    
    startGame();
    updateComputerPlayers()
})


function restartGame() {
    gameboard = [];
    createGame(gameboard);
    winner.textContent = "";
    results.style.display = "none";
    gameOptions.style.display = 'flex'
    turn = 'playerOne';
    turnOne.style.border = 4 + 'px' + ' solid black';
    turnTwo.style.border = 'none';


}

function winGame() {
    if ((gameboard[0] === 'x' && gameboard[1] === 'x' && gameboard[2] === 'x') || (gameboard[0] === 'x' && gameboard[4] === 'x' && gameboard[8] === 'x') ||
    (gameboard[0] === 'x' && gameboard[3] === 'x' && gameboard[6] === 'x') || (gameboard[3] === 'x' && gameboard[4] === 'x' && gameboard[5] === 'x') ||
    (gameboard[6] === 'x' && gameboard[7] === 'x' && gameboard[8] === 'x') || (gameboard[1] === 'x' && gameboard[4] === 'x' && gameboard[7] === 'x') ||
    (gameboard[2] === 'x' && gameboard[5] === 'x' && gameboard[8] === 'x') || (gameboard[2] === 'x' && gameboard[4] === 'x' && gameboard[6] === 'x')) {
        gameOptions.style.display = 'none';
        results.style.display = "flex";
        winner.textContent = "Player 1 wins the game!";
        turn = 'playerOne';
      
    }
        else if ((gameboard[0] === 'o' && gameboard[1] === 'o' && gameboard[2] === 'o') || 
    (gameboard[0] === 'o' && gameboard[4] === 'o' && gameboard[8] === 'o') || (gameboard[0] === 'o' && gameboard[3] === 'o' && gameboard[6] === 'o') || 
    (gameboard[3] === 'o' && gameboard[4] === 'o' && gameboard[5] === 'o') || (gameboard[6] === 'o' && gameboard[7] === 'o' && gameboard[8] === 'o') || 
    (gameboard[1] === 'o' && gameboard[4] === 'o' && gameboard[7] === 'o') || (gameboard[2] === 'o' && gameboard[5] === 'o' && gameboard[8] === 'o') || 
    (gameboard[2] === 'o' && gameboard[4] === 'o' && gameboard[6] === 'o')) {
        gameOptions.style.display = 'none';
        results.style.display = "flex";
        winner.textContent = "Player 2 wins the game!"
        turn = 'playerOne';
    
    } 
   
}


game.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        restartGame();
        turn = 'playerOne';
    }
        else if (e.target.classList.contains('box')) {
            if (turn === 'playerOne' && e.target.textContent === '') {
            e.target.textContent = "x";
            gameboard[e.target.getAttribute('dataset')] = 'x';
            turn = 'playerTwo';
            turnTwo.style.border = 4 + 'px' + ' solid black';
            turnOne.style.border = 'none';
            winGame();
            return
            }
            else if (turn === 'playerTwo' && e.target.textContent === '') {
                e.target.textContent = 'o';
                gameboard[e.target.getAttribute('dataset')] = 'o';
                turn = 'playerOne';
                turnOne.style.border = 4 + 'px' + ' solid black';
                turnTwo.style.border = 'none';
                winGame();
                return
            }
        }


    return
    
});


let gameboard = [];
const board = document.querySelector('.board')
const box = document.querySelectorAll('.box')
const game = document.getElementById('game')
const targetDiv = document.getElementById("game");
const gameSetup = document.getElementById('gameSetup');
const humanForm = document.getElementById('human');
const computerForm = document.getElementById('computer');
const playerOneInput = document.getElementsByName('playerOne')[0];
const playerTwoInput = document.getElementsByName('playerTwo')[0];
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
        playerOneInputAi.value = '';
        turn = 'playerOne';    
        location.reload();
 
    }
     else {
    targetDiv.style.display = "flex";
    gameSetup.style.display = "none";
    }
};


game.addEventListener('click', (e) => {
        if (e.target.matches('button')) {
            restartGame();
            turn = 'playerOne';
        }
    })

humanForm.addEventListener('click', (e) => {
    if (!e.target.matches('button')) {
        return;
    }
    else if (playerOneInput.value.length === 0 || playerTwoInput.value.length === 0) {
        alert("Please enter names for both players")
        return
    }
    
    startGame();
    updateHumanPlayers();
    humanPlay();

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
    gamePlayAI();
    
    // run code here for AI algorithm
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
        winner.textContent = `${playerOne.textContent} wins the game!`
        turn = 'playerOne';
      
    }
        else if ((gameboard[0] === 'o' && gameboard[1] === 'o' && gameboard[2] === 'o') || 
    (gameboard[0] === 'o' && gameboard[4] === 'o' && gameboard[8] === 'o') || (gameboard[0] === 'o' && gameboard[3] === 'o' && gameboard[6] === 'o') || 
    (gameboard[3] === 'o' && gameboard[4] === 'o' && gameboard[5] === 'o') || (gameboard[6] === 'o' && gameboard[7] === 'o' && gameboard[8] === 'o') || 
    (gameboard[1] === 'o' && gameboard[4] === 'o' && gameboard[7] === 'o') || (gameboard[2] === 'o' && gameboard[5] === 'o' && gameboard[8] === 'o') || 
    (gameboard[2] === 'o' && gameboard[4] === 'o' && gameboard[6] === 'o')) {
        gameOptions.style.display = 'none';
        results.style.display = "flex";
        winner.textContent = `${playerTwo.textContent} wins the game!`
        turn = 'playerOne';
    } 
    else if (gameboard[0] !== undefined && gameboard[1] !== undefined && gameboard[2] !== undefined && gameboard[3] !== undefined && gameboard[4] !== undefined
        && gameboard[5] !== undefined && gameboard[6] !== undefined && gameboard[7] !== undefined && gameboard[8] !== undefined) {
        gameOptions.style.display = 'none';
        results.style.display = "flex";
        winner.textContent = "Tie! Nobody won the game.";
        turn = 'playerOne';
    }

   
}

function humanPlay() {
if (true) {
  game.addEventListener('click', (e) => {
  if (e.target.classList.contains('box')) {
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
}
}

function computerPlay(){
    let i = ~~(Math.random() * 9)
    if (gameboard[i] === undefined) {
       return gameboard[i] = 'o';
       
    }
        else if (gameboard[i] !== undefined) {
            computerPlay();
        }
}



function gamePlayAI () {
    if (turn === 'playerOne') {
        game.addEventListener('click', (e) => {
            if (e.target.classList.contains('box')) {
                        if (e.target.textContent === '') {
                        e.target.textContent = "x";
                        gameboard[e.target.getAttribute('dataset')] = 'x';
                        turn = 'playerTwo'
                        turnTwo.style.border = 4 + 'px' + ' solid black';
                        turnOne.style.border = 'none';
                        winGame();
                        gamePlayAI();
                        return
                        }
                    }
                    
                })
                
         }  
        else if (turn === 'playerTwo') {

                computerPlay();
                setTimeout(createGame(gameboard), 1000);
                turn = 'playerOne';
                turnOne.style.border = 4 + 'px' + ' solid black';
                turnTwo.style.border = 'none';
                winGame();
                return
           }   
          
}
               



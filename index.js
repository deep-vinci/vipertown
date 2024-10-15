const gameBoard = document.querySelector(".game-board");

let currentInput = "w";
let initViper = [5,10];

for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.id = `${i+1},${j+1}`;    

        gameBoard.appendChild(cell)
    }

}

// while (true) {
    
// }
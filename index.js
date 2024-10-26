import { colorScheme } from "./data/colors.js";

const gameBoard = document.querySelector(".game-board");
const score = document.querySelector(".score span");

const restartGame = document.querySelector(".restart-game")

let input = {
    up: "w",
    down: "s",
    left: "a",
    right: "d",
    none: null
};

let viper, viperFood, width = 20, lastLocation = [0, 0], currentInput = null;

gameBoard.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
gameBoard.style.gridTemplateRows = `repeat(${width}, 1fr)`;
gameBoard.style.gap = "1px";

for(let i = 0; i < width; i++) {
    for(let j = 0; j < width; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.id = `${j},${i}`;    

        gameBoard.appendChild(cell)
    }

}

const generateArrayOfTwoRandomInt = () => {
        return [
            Math.floor(Math.random() *  20), 
            Math.floor(Math.random() *  20)
        ];
}

const ateFood = () => {
    document.getElementById(viperFood.toString()).style.backgroundColor = colorScheme.viper;

    viperFood = generateArrayOfTwoRandomInt();
}

const paintViper = (viper) => {
    viper.forEach(viperCell => {
        document.getElementById(viperCell.toString()).style.backgroundColor = colorScheme.viper;
    })
} 

const removeViperTrail = (viper) => {
    viper.forEach(viperCell => {  
        document.querySelectorAll(".cell").forEach(element => {
            element.style.backgroundColor = colorScheme.board;
        })
    })
    document.getElementById(viperFood.toString()).style.backgroundColor = colorScheme.food;

}

const paintFood = () => {
    viperFood = generateArrayOfTwoRandomInt();

    document.getElementById(viperFood.toString()).style.backgroundColor = colorScheme.food;

}

const updateScoreOnFoodEat = () => {
    score.textContent = `${Number(score.textContent) + 1}`;
}

const checkIfFoodPresent = (viperHead, viperFood) => {
    if (JSON.stringify(viperHead) == JSON.stringify(viperFood)) {
        console.log("food")
        ateFood();
        viper = [
            ...viper,
            lastLocation
        ]
        return true;
    }

    return false;
}

paintFood();
viper = [generateArrayOfTwoRandomInt()];

const interval = setInterval(() => {
    

    let viperHead = viper[0];
    let viperHeadCoordinates = viperHead.toString().split(",");

    if (checkIfFoodPresent(viperHead, viperFood)) {
        updateScoreOnFoodEat();
    }
    
    if (currentInput == input.up) {

        viper = [ 
            [ 
                Number(viperHeadCoordinates[0]), Number(viperHeadCoordinates[1]) - 1    
            ] ,
            ...viper
        ]
        viper.pop();
    } else if (currentInput == input.left) {
        viper = [ 
            [ 
                Number(viperHeadCoordinates[0]) - 1, Number(viperHeadCoordinates[1])
            ] ,
            ...viper
        ]
        viper.pop();

    } else if (currentInput == input.down) {
        viper = [ 
            [ 
                Number(viperHeadCoordinates[0]), Number(viperHeadCoordinates[1]) + 1
            ],
            ...viper
        ]
        viper.pop();
    } else if (currentInput == input.right) {
        viper = [ 
            [
                Number(viperHeadCoordinates[0]) + 1, Number(viperHeadCoordinates[1])
            ],
            ...viper
        ]
        viper.pop();
    } else if (currentInput == input.none) {
        viper = [ 
            [
                Number(viperHeadCoordinates[0]), Number(viperHeadCoordinates[1])
            ],
            ...viper
        ]
        // console.log(viper)

        viper.pop();
    }
    console.log(viperHeadCoordinates)

    lastLocation = viper[viper.length - 1];
    if (viperHeadCoordinates[0] < 0 || viperHeadCoordinates[1] < 0 || viperHeadCoordinates[0] > 19 || viperHeadCoordinates[1] > 19) {
        console.log("end");
        clearInterval(interval);
    }

    removeViperTrail(viper);
    paintViper(viper);

}, 200)

document.addEventListener("keydown", (event) => {
    if (event.key == "w" || event.key == "ArrowUp") {
        currentInput = "w";
    } else if (event.key == "a" || event.key == "ArrowLeft") {
        currentInput = "a";
    } else if (event.key == "s" || event.key == "ArrowDown") {
        currentInput = "s";
    } else if (event.key == "d" || event.key == "ArrowRight") {
        currentInput = "d";
    }
})

restartGame.addEventListener("click", () => {
    location.reload()
})
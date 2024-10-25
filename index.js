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

paintFood();
viper = [generateArrayOfTwoRandomInt()];

setInterval(() => {
    
    removeViperTrail(viper);
    paintViper(viper);

    let viperHead = viper[0];
    let viperHeadCoordinates = viperHead.toString().split(",");

    if (JSON.stringify(viperHead) == JSON.stringify(viperFood)) {
        console.log("food")
        ateFood();
        viper = [
            ...viper,
            lastLocation
        ]

        score.textContent = `${Number(score.textContent) + 1}`;
    }
    
    // if (viperHead[0] == 0 || viperHead[1] == 19) {
    //     alert("stop")
    // }

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
        console.warn(viper)

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
        viper.pop();
    }

    lastLocation = viper[viper.length - 1];
    console.log(viper)

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
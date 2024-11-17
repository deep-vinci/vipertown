import { colorScheme } from "./data/colors.js";

const homeTab = document.querySelector(".home-tab");
const gameTab = document.querySelector(".game-tab");
const settingsTab = document.querySelector(".settings-tab");

const playGameButton = document.querySelector(".play-game");
const settingsButton = document.querySelector(".settings");
const settingsBackButton = document.querySelector(".settings-back-button");
const gameBackButton = document.querySelector(".game-back-button");

const gameBoard = document.querySelector(".game-board");
const score = document.querySelector(".score span");
const topScore = document.querySelector(".top-score span")

const restartGame = document.querySelector(".restart-game")

let input = {
    up: "w",
    down: "s",
    left: "a",
    right: "d",
    none: null
};

let settingsConfig = {
    difficulty: "x05"
}

let difficultyConfig = {
    x05: 100,
    x1: 500,
    x15: 200,
}

let viper, viperFood, width = 27, lastLocation = [0, 0], currentInput = null;

gameBoard.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
gameBoard.style.gridTemplateRows = `repeat(${width}, 1fr)`;
gameBoard.style.gap = "2px";

restartGame.style.display = "none";

homeTab.style.display = "block";
settingsTab.style.display = "none";
gameTab.style.display = "none";

// homeTab.style.display = "none";

if (localStorage.getItem("topScore")) {
    topScore.textContent = localStorage.getItem("topScore");
} else {
    localStorage.setItem("topScore", 0)
}

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
            Math.floor(Math.random() *  width), 
            Math.floor(Math.random() *  width)
        ];
}

const ateFood = () => {
    document.getElementById(viperFood.toString()).style.backgroundColor = colorScheme.viper;

    viperFood = generateArrayOfTwoRandomInt();
}

const paintViper = (viper) => {
    viper.forEach(viperCell => {
        // let v = document.createElement("div");
        // v.setAttribute("id", `${viperCell.toString()}_`);
        // v.classList.add("viper")
        // let c = document.getElementById(viperCell.toString());
        // c.appendChild(v);

        document.getElementById(viperCell.toString()).style.backgroundColor = colorScheme.viper;
    })
} 

const removeViperTrail = () => {
    document.querySelectorAll(".cell").forEach(element => {
        element.style.backgroundColor = colorScheme.board;
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
        // console.log("food")
        ateFood();
        viper = [
            ...viper,
            lastLocation
        ]
        // console.log(viper)
        return true;
    }

    return false;
}

// const stopGameIfCollisionOccurs 

paintFood();
viper = [generateArrayOfTwoRandomInt()];

const interval = setInterval(() => {


    // console.log(viper)

    let viperHead = viper[0];
    let viperHeadCoordinates = viperHead.toString().split(",");

    if (checkIfFoodPresent(viperHead, viperFood)) {
        updateScoreOnFoodEat();
    }
    

    // spaghetti code :p can can be refactored to remove same collision checks but i am too lazy to come up with elegant solutions
    if (currentInput == input.up) {
        if (Number(viperHeadCoordinates[1]) == 0) {
            clearInterval(interval);
            restartGame.style.display = "block"
            if (Number(localStorage.getItem("topScore")) < Number(score.textContent)) {
                localStorage.setItem("topScore", score.textContent)
            }
            return
        }

        viper = [ 
            [ 
                Number(viperHeadCoordinates[0]), Number(viperHeadCoordinates[1]) - 1    
            ] ,
            ...viper
        ]
        viper.pop();
    } else if (currentInput == input.left) {
        if (Number(viperHeadCoordinates[0]) == 0) {
            clearInterval(interval);
            restartGame.style.display = "block"
            if (Number(localStorage.getItem("topScore")) < Number(score.textContent)) {
                localStorage.setItem("topScore", score.textContent)
            }

            return
        }

        viper = [ 
            [ 
                Number(viperHeadCoordinates[0]) - 1, Number(viperHeadCoordinates[1])
            ] ,
            ...viper
        ]
        viper.pop();

    } else if (currentInput == input.down) {
        if (Number(viperHeadCoordinates[1]) == width - 1) {
            clearInterval(interval);
            restartGame.style.display = "block"
            if (Number(localStorage.getItem("topScore")) < Number(score.textContent)) {
                localStorage.setItem("topScore", score.textContent)
            }
            return
        }

        viper = [ 
            [ 
                Number(viperHeadCoordinates[0]), Number(viperHeadCoordinates[1]) + 1
            ],
            ...viper
        ]
        viper.pop();
    } else if (currentInput == input.right) {
        if (Number(viperHeadCoordinates[0]) == width - 1) {
            clearInterval(interval);
            restartGame.style.display = "block"
            if (Number(localStorage.getItem("topScore")) < Number(score.textContent)) {
                localStorage.setItem("topScore", score.textContent)
            }
            return
        }

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

    // array of last coord to add to viper when it eats food so it increases its length
    lastLocation = viper[viper.length - 1];
    
    removeViperTrail(viper);
    paintViper(viper);


}, difficultyConfig[settingsConfig.difficulty])

console.log(difficultyConfig[settingsConfig.difficulty])
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

playGameButton.addEventListener("click", () => {
    gameTab.style.display = "block";
    homeTab.style.display = "none";
})

settingsButton.addEventListener("click", () => {
    gameTab.style.display = "none";
    homeTab.style.display = "none";
    settingsTab.style.display = "block";
})

settingsBackButton.addEventListener("click", () => {
    gameTab.style.display = "none";
    homeTab.style.display = "block";
    settingsTab.style.display = "none";
})

gameBackButton.addEventListener("click", () => {
    gameTab.style.display = "none";
    homeTab.style.display = "block";
    settingsTab.style.display = "none";
})

// settings config code


let choiceOfSpeedButton = document.querySelector(`#${settingsConfig.difficulty}`);
let speedButtons = document.querySelectorAll(".speed-buttons");

Object.assign(choiceOfSpeedButton.style, {
    backgroundColor: "#708742",
    color: "white"
})

speedButtons.forEach(e => {
    e.addEventListener("click", () => {
        let currentSpeedChoice = document.querySelector(`#${e.id}`);
        settingsConfig.difficulty = e.id;
        // clearInterval(interval)
        speedButtons.forEach(k => {
            Object.assign(k.style, {
                backgroundColor: "white",
                color: "#708742"
            })
        })
        Object.assign(currentSpeedChoice.style, {
            backgroundColor: "#708742",
            color: "white"
        })
    })
})

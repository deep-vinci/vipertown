const gameBoard = document.querySelector(".game-board");

let currentInput = "w";
let viper = [[7,9], [8,9], [9,9]];

for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.id = `${i},${j}`;    

        gameBoard.appendChild(cell)
    }

}

const paintViper = () => {
    viper.forEach(viperCell => {
        document.getElementById(viperCell.toString()).style.backgroundColor = "#e96969"
    })
} 

setInterval(() => {
    paintViper();
    if (currentInput == "w") {

        let viperHead = viper[0];

        viper = [ 
            [Number(viper[0].toString().split(",")[0]) - 1,
            Number(viper[0].toString().split(",")[1])],
            ...viper
        ]
        viper.pop();

        //repaint map
        document.querySelectorAll(".cell").style.backgroundColor = "pink";
        console.log(viper)
        // viper.forEach((viperCell, i) => {
        //     if (i != 0) {
                
        //     }
        // })
        // document.getElementById(viperCell.toString()).style.backgroundColor = "#e96969"
        

        // console.log(Number(viper[0].toString().split(",")[0]) - 1)
        // console.log(viper)
    }
}, 1000)
// window height
const height = window.innerHeight;

// window width
const width = window.innerWidth;

console.log(height, width); // 711 1440

let backgroundCanvas = document.querySelector(".background-home");
let cellBg = document.querySelector(".cell-bg");

let backgroundCanvasWidth = 40;
for(let i = 0; i < backgroundCanvasWidth; i++) {
    for(let j = 0; j < backgroundCanvasWidth; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell-bg");
        cell.id = `${j},${i}-bg`;    

        backgroundCanvas.appendChild(cell)
    }

}

backgroundCanvas.style.gridTemplateColumns = `repeat(${backgroundCanvasWidth}, 1fr)`;
backgroundCanvas.style.gridTemplateRows = `repeat(${backgroundCanvasWidth}, 1fr)`;


    // cellBg.style.width = `40px`;
    // cellBg.style.height = `40px`;

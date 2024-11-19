const height = window.innerHeight;
const width = window.innerWidth;


let backgroundCanvas = document.querySelector(".background-home");
let cellBg = document.querySelector(".cell-bg");
let style = document.querySelector("style");

let backgroundCanvasWidth = 40;
for(let i = 0; i < backgroundCanvasWidth; i++) {
    for(let j = 0; j < backgroundCanvasWidth; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell-bg");
        cell.id = `${j},${i}-bg`;    
        cell.style.backgroundColor = `rgba(218, 237, 181, ${Math.random().toFixed(1)})`
        
        style.textContent += `
        .cell-bg:hover {
            background-color: red;
        }
        `
        backgroundCanvas.appendChild(cell)
    }

}

backgroundCanvas.style.gridTemplateColumns = `repeat(${backgroundCanvasWidth}, 1fr)`;
backgroundCanvas.style.gridTemplateRows = `repeat(${backgroundCanvasWidth}, 1fr)`;

const backgroundGame = () => {
    
}
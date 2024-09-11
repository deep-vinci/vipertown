const createSketchArea = (numberOfBoxes) => {
    let sketchArea = document.querySelector(".sketch-area");
    let boxCountButton = document.querySelector(".controls > button");

    boxCountButton.textContent = `${getBoxCountEachWays(numberOfBoxes) ** 2} Blocks`;

    for(let i = 0; i < getBoxCountEachWays(numberOfBoxes) **2; i++) {
        let box = document.createElement("div");
        box.classList.add("box");

        box.style.flex = `0 0 ${100/getBoxCountEachWays(numberOfBoxes)}%`;
        changeBoxRadius(i, box);
        sketchArea.appendChild(box)

        box.addEventListener("mouseover", (event) => {
            if (!event.ctrlKey) {
                console.log("mouse over")
            event.target.style.backgroundColor = `rgb(${randomColorValue()}, ${0}, ${0})`;
            }
            
        })
    
    }
}


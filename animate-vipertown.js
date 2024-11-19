const vipertownName = document.querySelector(".vipertown");
const vipertown = "Vipertown";

vipertown.split("").forEach(e => {
    let charOfViperTown = document.createElement("span");
    charOfViperTown.classList.add("char-of-vipertown")

    charOfViperTown.textContent = e;
    vipertownName.appendChild(charOfViperTown)
})
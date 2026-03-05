const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clear-btn");

function createGrid(size) {
    
    container.innerHTML = "";

    const containerSize = 480;
    const squareSize = containerSize / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        container.appendChild(square);
    }
}
createGrid(16);

clearBtn.addEventListener("click", () => {
    const size = Number(prompt("Enter number of squares per side:"));

    if(!size || size > 100 || size < 1) {
        alert("Please enter a number between 1 and 100.");
        return;
    }
    createGrid(size);
});


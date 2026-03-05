const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clear-btn");

function createGrid(size) {
    // Removes the old grid
    container.innerHTML = "";

    // Determine the size of each square so the grid always fits in 480px
    const containerSize = 480;
    const squareSize = containerSize / size;

    // This for loop creates the squares using the input(size) as an argument
    for (let i = 0; i < size * size; i++) {
        // Each loop creates one <div>
        const square = document.createElement("div");
        square.classList.add("square");

        // Make it so the grid fits the same space
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        container.appendChild(square);
    }
}
// A default grid when the page loads
createGrid(16);

// Button Event to clear the grid
clearBtn.addEventListener("click", () => {
    const size = Number(prompt("Enter number of squares per side:"));

    // Input validation
    if(!size || size > 100 || size < 1) {
        alert("Please enter a number between 1 and 100.");
        return;
    }
    createGrid(size);
});


const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clear-btn");

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

clearBtn.addEventListener("click", () => {
    const size = Number(prompt("Enter number of squares per side:"));

    if(!size || size > 100 || size < 1) {
        alert("Please enter a number between 1 and 100.");
        return;
    }
    console.log(size);
});


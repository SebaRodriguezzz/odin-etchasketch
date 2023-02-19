const grid = document.querySelector('#grid');

function createGrid(rows, columns){
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++){
            const square = document.createElement('div');
            square.classList.add("grid-square");
            grid.appendChild(square);
        }
    }
}

createGrid(16, 16);
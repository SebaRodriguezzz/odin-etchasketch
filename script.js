const grid = document.querySelector('#grid');
const gridRows = document.createElement('div');
const gridColumns = document.createElement('div');
gridRows.classList.add("grid-rows");
gridColumns.classList.add("grid-columns");
grid.appendChild(gridRows);
gridRows.appendChild(gridColumns);

function createGrid(rows, columns){
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++){
            const square = document.createElement('div');
            square.classList.add("grid-square");
            gridColumns.appendChild(square);
        }
    }
}

createGrid(16, 16);
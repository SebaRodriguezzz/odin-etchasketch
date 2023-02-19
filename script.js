const grid = document.querySelector('#grid');

function createGrid(rows, columns){
    let size = getSquareSize(rows)
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++){
            const square = document.createElement('div');
            square.classList.add("grid-square");
            square.style.width =`${(size)}px`;
            square.style.height =`${(size)}px`;
            grid.appendChild(square);
        }
    }
}

function getSquareSize(size){
    return 544 / size - 2;
}

createGrid(16, 16);

const squares = document.querySelectorAll('.grid-square');

squares.forEach(function(square){
    square.addEventListener('mouseover', () => {
        square.classList.add("hover");
})});
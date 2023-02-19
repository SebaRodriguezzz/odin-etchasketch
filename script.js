const grid = document.querySelector('#grid');

function createGrid(size){
    let squareSize = getSquareSize(size)
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            const square = document.createElement('div');
            square.classList.add("grid-square");
            square.style.width =`${(squareSize)}px`;
            square.style.height =`${(squareSize)}px`;
            grid.appendChild(square);
        }
    }
    addHoverEffect();
}

function getSquareSize(size){
    return 544 / size - 2;
}

createGrid(16);


function deleteGrid(){
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(function(square){
        grid.removeChild(square);
    }
)};   

function addHoverEffect(){
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(function(square){
        let opa = 0.2;
        square.addEventListener('mouseover', () => {      
            square.style.backgroundColor = 'rgba(0,0,0)';
            square.style.opacity = `${opa}`;
            opa += 0.2;

    })});
}

const changeSizeButton = document.querySelector('.change-size');

changeSizeButton.addEventListener('click', () =>{
    let value = prompt("How many squares per side do you want?\nPD: The max is 100");
    if (value > 100){
        alert("I told you! The max is 100 >:(");
    } else if (value <= 0 || !Number.isInteger(parseInt(value, 10))){
        alert("Incorrect amount!");
    } else {
        deleteGrid();
        createGrid(value);
    }
});


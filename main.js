let gridSize = 0; 
let gridElement = 0;
const grid = document.querySelector('.grid')

let squares = document.getElementsByClassName('square');

let element;

function createGrid() {
    gridSize = 16;
    gridElement = gridSize*gridSize;
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (i=0; i < gridElement; i++) {
        squareID = "square-" + i;
        element = createElement();
        // element.setAttribute('id', `${squareID}`)
        // elementID = document.getElementById(`${squareID}`);
        element.setAttribute('onmouseover', `style.backgroundColor = 'black'`)
    }

}


function createElement() {
    element = grid.appendChild(document.createElement('div'));
    // console.log(`Primer log, ${element}`);
    element.classList.add('square');
    // console.log(`Clase añadida, ${element}`);
    // console.log(`Listener añadido, ${element}`);
    // console.log(element);
    return element;
}

createGrid();

function changeGrid() {
    gridSize = 0;
    gridElement = 0;

    for (i = squares.length - 1; i >= 0; i--) {
        squares[i].remove()
    }

    grid.style.gridTemplateColumns = `null`;
    grid.style.gridTemplateRows = `null`;
    
    do {
        gridSize = parseInt(window.prompt('Introduzca el tamaño del grid (máximo 100)'));
    } while (gridSize > 100)
    
    gridElement = gridSize*gridSize;
    
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    
    for (i=0; i < gridElement; i++) {
        // squareID = "square-" + i;
        element = createElement();
        // element.setAttribute('id', `${squareID}`)
        // elementID = document.getElementById(`${squareID}`);
        element.setAttribute('onmouseover', `style.backgroundColor = 'black'`);
    }

}

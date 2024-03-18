/* --- CONSTANTS --- */
const helpBtn = document.querySelector('#helpButton')
const helpInst = document.querySelector('#instructions')
const gameGrid = document.querySelector('.doorGrid')


/* --- VARIABLES --- */
let gridArray = []

/* --- EVENT LISTENERS --- */
helpBtn.addEventListener('click', toggleHelp)


/* --- FUNCTIONS --- */
helpInst.style.display = 'none';
function toggleHelp() {
    console.log(helpInst.style.display)
    helpInst.style.display === 'none' ? 
        helpInst.style.display = 'block' :
        helpInst.style.display = 'none';
}

function renderSquares() {
    // Create gridArray
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            gridArray[row] ? null : gridArray[row] = []
            gridArray[row][col] ? null : gridArray[row][col] = 0
        }
    }
    // Drop in Monsters
    for ( let mon = 10; mon > 0; mon--) {
        const randomN1 = Math.floor(Math.random() * 5)
        const randomN2 = Math.floor(Math.random() * 5)
        gridArray[randomN1][randomN2] === 1 ? mon++ :
            gridArray[randomN1][randomN2] = 1
        // console.log(gridArray)
    }
    // Use gridArray to designate monster cells
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
        const cell = document.createElement('div');
        cell.classList.add('cell')
        gameGrid.appendChild(cell)
        cell.dataset.cellID = `${row}-${col}`
        
        cell.addEventListener('click', selectSquare)
        
        gridArray[row][col] === 1 ? // set monster cell
            cell.dataset.monster = true : null
        
        let numAdj = checkAdjacentSquares(row, col)
        if (cell.dataset.monster) {
            cell.textContent = 'M'
        } else if (numAdj) {
            cell.dataset.number = checkAdjacentSquares(row, col)
            cell.textContent = cell.dataset.number
        }

        }
    }

}

function checkAdjacentSquares(row, col) {
    let numTotal = 0
    console.log(row, col)
    //horizontal
    if (row !== 0 && gridArray[row - 1][col] === 1) numTotal++
    if (row !== 8 && gridArray[row + 1][col] === 1) numTotal++
    //vertical
    if (col !== 0 && gridArray[row][col - 1] === 1) numTotal++
    if (col !== 8 && gridArray[row][col + 1] === 1) numTotal++
    // diagonals
    if (row !== 0 && col !== 0 && gridArray[row-1][col-1] === 1) numTotal++
    if (col !== 0 && row !== 8 && gridArray[row+1][col-1] === 1) numTotal++
    if (row !== 0 && col !== 8 && gridArray[row-1][col+1] === 1) numTotal++
    if (row !== 8 && col !== 8 && gridArray[row+1][col+1] === 1) numTotal++
    
    return numTotal
}

renderSquares()

function selectSquare(event) {
    const tCell = event.target
    tCell.dataset.monster ? 
        tCell.style.backgroundColor = 'red':
        tCell.style.backgroundColor = 'grey'
    
}
/* --- CONSTANTS --- */
const helpBtn = document.querySelector('#helpButton')
const helpInst = document.querySelector('#instructions')
const gameGrid = document.querySelector('.doorGrid')
const flagBtn = document.querySelector('#flagButton')
const flagStyle = document.querySelector('.material-symbols-outlined')
const flagTemplate = document.querySelector('#flag')
/* --- VARIABLES --- */
let gridArray = []
let numRows = 9
let numCols = 9
let numMonsters = 10
let flagging = false

/* --- EVENT LISTENERS --- */
helpBtn.addEventListener('click', toggleHelp)
flagBtn.addEventListener('click', toggleFlagging)


/* --- FUNCTIONS --- */
helpInst.style.display = 'none';
function toggleHelp() {
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
    for ( let mon = numMonsters; mon > 0; mon--) {
        const randomN1 = Math.floor(Math.random() * numRows)
        const randomN2 = Math.floor(Math.random() * numCols)
        gridArray[randomN1][randomN2] === 1 ? mon++ :
            gridArray[randomN1][randomN2] = 1
    }
    // Use gridArray to designate monster cells
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
        const cell = document.createElement('div');
        cell.classList.add('cell')
        cell.id = `${row}-${col}`
        gameGrid.appendChild(cell)
        cell.dataset.cellID = `${row}-${col}`
        
        cell.addEventListener('click', selectSquare)
        cell.addEventListener('auxclick', flagSquare)
        
        gridArray[row][col] === 1 ? // set monster cell
            cell.dataset.monster = true : null
        
        // set number cell data
        let numAdj = checkAdjacentSquares(row, col) 
        if (!cell.dataset.monster && numAdj) {
            cell.dataset.number = numAdj
        } else if (!cell.dataset.monster) {
            gridArray[row][col] = null
        }

        }
    }
    console.log(gridArray)
}

function checkAdjacentSquares(row, col) {
    let numTotal = 0
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
    const tCell = this
    flagging ? flagSquare(tCell) : revealSquare(tCell)
}

function revealSquare(tCell) {

    if (tCell.dataset.monster) {
        tCell.style.backgroundColor = 'red'
        tCell.textContent = 'M'
    } else if (tCell.dataset.number) {
        tCell.style.backgroundColor = 'grey'
        tCell.textContent = tCell.dataset.number
    } else {
        tCell.style.backgroundColor = 'grey'
        tCell.dataset.revealed = true
        revealAdjBlanks(tCell)
    }
}

function revealAdjBlanks(tCell) {
    const splitId = tCell.dataset.cellID.split('-')
    const row = Number(splitId[0])
    const col = Number(splitId[1])

    //vertical
    if (row > 0 && !gridArray[row - 1][col] 
        && !fetchElement((row-1), col).dataset.revealed) {
            revealSquare(fetchElement(row-1, col))
    }
    if (row < 8 && !gridArray[row + 1][col]
        && !fetchElement((row+1), col).dataset.revealed) {
            revealSquare(fetchElement(row+1, col))
    }
    //horizontal
    if (col > 0 && !gridArray[row][col - 1]
        && !fetchElement(row, col-1).dataset.revealed) {
            revealSquare(fetchElement(row, col-1))
    }
    if (col < 8 && !gridArray[row][col + 1]
        && !fetchElement(row, col+1).dataset.revealed) {
            revealSquare(fetchElement(row, col+1))
    }
    //diagonal
    if (row > 0 && col > 0 && !gridArray[row - 1][col - 1]
        && !fetchElement(row-1, col-1).dataset.revealed) {
            revealSquare(fetchElement(row-1, col-1))
    }
    if (row < 8 && col < 8 && !gridArray[row+1][col + 1]
        && !fetchElement(row+1, col+1).dataset.revealed) {
            revealSquare(fetchElement(row+1, col+1))
    }
    if (row < 8 && col > 0 && !gridArray[row+1][col - 1]
        && !fetchElement(row+1, col-1).dataset.revealed) {
            revealSquare(fetchElement(row+1, col-1))
    }
    if (row > 0 && col < 8 && !gridArray[row-1][col + 1]
        && !fetchElement(row-1, col+1).dataset.revealed) {
            revealSquare(fetchElement(row-1, col+1))
    }
}

function fetchElement(mrow, mcol) {
    return document.getElementById(`${mrow}-${mcol}`)
}

function flagSquare(event) {
    const element = event.target
    element.dataset.flagged = true

    if(element.dataset.flagged) {
        element.textContent = ''
        element.addEventListener('click', selectSquare)
    } else {
        element.textContent = '?'
        element.removeEventListener('click', selectSquare)
    }
}

function toggleFlagging() {
    flagging ? flagging = false : flagging = true
    flagging ? flagStyle.style.color = 'red' :
        flagStyle.style.color = 'black'
}

function flagSquare(tCell) {
    const miniFlag = flagTemplate.cloneNode(true)
    miniFlag.style.fontSize = '20px'

    tCell.firstChild ? 
        tCell.removeChild(tCell.firstChild) :
        tCell.appendChild(miniFlag)
}
/* --- CONSTANTS --- */
// const helpBtn = document.querySelector('#helpButton')
const helpInst = document.querySelector('#instructions')
const gameGrid = document.querySelector('.doorGrid')
const flagBtn = document.querySelector('#flagButton')
const flagStyle = document.querySelector('.material-symbols-outlined')
const flagTemplate = document.querySelector('#flag')
const resetButton = document.querySelector('#play-reset')
const policeLights = document.querySelectorAll('.policeLight')
const welcomeAgent = document.querySelector('#welcomeAgent')
const initStart = document.querySelector('#initialStart')

/* --- VARIABLES --- */
let gridArray = []
let numRows = 9
let numCols = 9
let numMonsters = 10
let flagging = false

/* --- EVENT LISTENERS --- */
// helpBtn.addEventListener('click', toggleHelp)
flagBtn.addEventListener('click', toggleFlagging)
resetButton.addEventListener('click', resetGame)
initStart.addEventListener('click', resetGame)

/* --- FUNCTIONS --- */
// helpInst.style.display = 'none';
// function toggleHelp() {
//     helpInst.style.display === 'none' ? 
//         helpInst.style.display = 'block' :
//         helpInst.style.display = 'none';
// }

// SETTING UP THE BOARD

function resetGame() {
    gameGrid.classList.remove('hide')
    welcomeAgent.classList.add('hide')
    resetButton.classList.remove('hide')
    flagBtn.classList.remove('hide')

    resetButton.textContent = 'Reset'
    clearBoard()
    renderSquares()
    policeLights.forEach(el => el.classList.add('hide'))
}
// resetGame()
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
        cell.classList.add('wrapper')
        cell.id = `${row}-${col}`
        gameGrid.appendChild(cell)
        const door = document.getElementById('door1').cloneNode(true)
        door.style.display = 'block'
        cell.appendChild(door)
        cell.dataset.cellID = `${row}-${col}`
        
        cell.addEventListener('click', selectSquare)
        
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

function clearBoard() {
    gridArray = []
    while (gameGrid.firstChild) {
        gameGrid.removeChild(gameGrid.firstChild)
    }
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


// BOARD EVENTS

function selectSquare(event) {
    const tCell = this
    flagging ? flagSquare(tCell) : revealSquare(tCell)
}

function revealSquare(tCell) {
    tCell.removeChild(tCell.firstChild)
    if (tCell.dataset.monster) {
        tCell.style.backgroundColor = 'blue'
        insertMonster(tCell)
        gameOver()
    } else if (tCell.dataset.number) {
        tCell.textContent = tCell.dataset.number
    } else {
        tCell.dataset.revealed = true
        revealAdjBlanks(tCell)
    }
}

function insertMonster(tCell) {
    const monster = document.getElementById('mikeW').cloneNode()
    monster.style.display = 'block'
    tCell.appendChild(monster)
}

function gameOver() {
    for (let i = 0; i < gameGrid.childNodes.length; i++) {
        gameGrid.childNodes[i].removeEventListener('click', selectSquare)
    }
    console.log(policeLights)
    policeLights.forEach(el => el.classList.remove('hide'))
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

function toggleFlagging() {
    flagging ? flagging = false : flagging = true
    flagging ? flagStyle.style.color = 'red' :
        flagStyle.style.color = 'black'
}

function flagSquare(tCell) {
    const miniFlag = flagTemplate.cloneNode(true)
    miniFlag.style.fontSize = '20px'

    console.log(tCell)
    tCell.removeChild(tCell.firstChild)
    console.log(tCell.dataset.flagged)

    if (tCell.dataset.flagged === "true") {
        const door = document.getElementById('door1').cloneNode(true)
        door.style.display = 'block'
        tCell.appendChild(door)
        tCell.dataset.flagged = "false"
    } else {
        tCell.appendChild(miniFlag)
        tCell.dataset.flagged = "true"
    }

}
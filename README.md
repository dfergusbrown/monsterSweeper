- **Title**: 'CDA: Junior Detector' (Child Detection Agency)
- **Description**:
    In the style of the classic, 'minesweeper', this build is set in the universe of a popular unnamed film.  Try to mark each door with caution tape (flag) that has a child behind it or open up every door that doesn't. As in minesweeper, each number revealed indicates how many mines (or children in this instance) lay await one/some of the 8 surrounding squares.

    Minesweeper is a great solitaire-style game that can test your ability for logic and deduction. Seeing the analagous elements between minesweeper and the concept of children and doors in the monster universe inspired me to build this browser game.

- **Technologies Used**: HTML, Javascript, CSS

- **Getting Started**: 
    Deployed on vercel: https://monster-sweeper.vercel.app/
    Instructions:
        1. Click on the CDA agent's suit to start
        2. Click any random square until blanks are revealed
        3. Click the flag button to place flags on suspected dangerous squares
        4. Click the reset button if you make a mistake

- **WireFrames**: see screenshots [here](developer/wireframes/Monster%20Sweeper%20wireframe.pdf)
- **Screenshots**: see screenshots of gameplay 
    - [landing page](developer/gameplay/coverpage.png)
    - [game start](developer/gameplay//gamestart.png)
    - [game over](developer/gameplay/2319gameover.png)
    - [game win screen](developer/gameplay/winscreen.png)

- **Timeline**: 
| Day        |   | Task                               | Blockers | Notes/ Thoughts |
|------------|---|------------------------------------|----------|-----------------|
| Sunday     |   | Create and present proposal        |          |                 |
| Monday     |   | Create HTML elements for UI        |          |                 |
| Tuesday    |   | Attach HTML elements to constants  |          |                 |
| Wednesday  |   | Create Functions                   |          |                 |
| Thursday   |   |                                    |          |                 |
| Friday     |   | Polish and Test                    |          |                 |
| Saturday   |   | Work on stretch goals              |          |                 |
| Sunday     |   | Work on icebox items if applicable |          |                 |
| Monday     |   | Presentation Day!                  |          |                 |
|            |   |                                    |          |                 |
1. Sunday - Proposal created
2. Monday
    - Project proposal was revamped and readjusted to adjust scope and expectations for current time allotted
    - Basic HTML elements created
    - Attached elements to constants
    - styled elements only to the extent that they became functional for developement
    - render grid function created
    - created function to generate numbered squares (counting adjacent mine squares)
3. Tuesday
    - created function to cascade and reveal adjacent blank squares created (when player clicks on a blank square, they should have adjacent blank squares revealed and one row(i.e. layer) of numbered squares)
    - updated cascade function to include diagonally adjacent squares
    - built the ability to flag a square and to toggle that function on and off
        - a lot of troubleshooting was needed for this.  I discovered that the .dataset property does not read booleans once they are set.  They become strings. so dataset.flagged = true had to be changed to dataset.flagged = 'true' for this to work
    - some additional icons added like the mike monster icon
4. Wednesday
    - the reset function was created and a button added to the page
    - A lot of styling added including the CDA agent icon, the siren icon, imported fonts, and responsiveness updates to the grid at two breakpoints
5. Thursday
    - A game over function and a function to check for a win were added
    - A game win message was added - mike telling a joke
6. Friday
    - Responsiveness updates
7. Sunday
    - A glitch was noted - after losing once, the game didn't recognize the win condition.  This was resolved by re-initializing the array of cells (cellArray) used to check for the win.  Old, unrevealed cells had remained thus preventing the desired win condition
    - Another glitch pointed out by a colleague -> players could still select and reveal a flagged square if the toggled flagging off. This was resolved by nesting this condition within the selectSquare function conditional

- **Attributions**: 
<a target="_blank" href="https://icons8.com/icon/940CTAVgtzko/monsters%2C-inc---sulley">Monsters, Inc - Sulley</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

<a target="_blank" href="https://icons8.com/icon/5cSPmCGi6Itm/monsters%2C-inc---mike">Monsters, Inc - Mike</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

<a href='https://dryicons.com/free-icons/monster'> Icon by Dryicons </a>

<a target="_blank" href="https://icons8.com/icon/95479/steven-universe">Steven Universe</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

<a target="_blank" href="https://icons8.com/icon/R8s6gQ1oAQPH/police-car-light">Police Car Light</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

- **Next Steps**: Planned future enhancements (icebox items).
- Your **`README.md`** file must be grammatically correct and free of spelling errors.












# Project Proposal - Monster Sweeper

## Project Choice (Tell us which project you're doing!)

- [ ] minesweeper variation

## Project Description 

This project is a minesweeper variation via the world of Monsters Inc.  The player presses the play button and then opens one of the doors by clicking a square.  This square will reveal either a blank space or a number which would indicate how many monsters lying in wait there are in directly adjacent squares.  As the player goes along, they can flag a door when they believe there's a monster behind it or open a door to guess that there isn't until they run into one monster (game over) or all non-monster squares have been revealed (win-con).

## Wire Frames

![image](./wireframe/Monster%20Sweeper%20wireframe.pdf)

## User Stories

#### MVP Goals

- As a player, I want my game to have some instructions directing how to play the game (left click reveal, right click = flag)
- As a player, I want the gameboard to be randomized each time so that the monster configurations are different
- As a player, I want the game to recognize clicks for revealing squares and flagging squares
- As a player, I want the game to recognize win and lose conditions
- As a player, I want the game to reveal some adjacent blank squares when I find a blank square
\*\*

#### Stretch Goals

- As a player, I would like to see some kind of animation when the door is opened, a monster is found, and upon winning
- As a player, I would like to hear game sounds for the same aforementioned events
- As a player, I would like to enter in different grid dimensions to play a custom game
- mobile friendly

#### Notionboard Template
Notionboard template for building projects ( You can use this for any project )
https://www.notion.so/GA-Unit-3-Tunr-Lab-da2c82fafd4e4a7aa654676732db9ee3

#### Timeline - Daily Accountability
Example of a Timeline to keep organized and on task for hitting goals every single day you’re on the sprint for your project.

Create your own table using this markdown table generator website:
https://www.tablesgenerator.com/markdown_tables

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


PSEUDOCODE

1) Define the required variables used to track the state of the game
    - numMonsters
    - initialize customizable variables:
        - (numMonsters)
        - row / col (determine grid size)
2) Store cached element references
    - help button / help instructions
    - gridArea
    - reference squares by the id assigned them in render
3) Create Render function - renders the gridarea through a nested loop
    - assigns each grid square an id analagous to the below referenced matrix
    - copies grid layout information to a matrix (nested array) for easy manipulation and reference later
    - set event listeners
4) randomize monster location and places them in the reference grid
5) check adjacent squares for monsters, calculates, and places numbers (per minesweeper game logic)
6) Handles a player clicking on a square depending on whether or not they have toggled the flag button (flags or reveals the square)
7) Create Reset function
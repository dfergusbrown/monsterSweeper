# Project Proposal - Monster Sweeper

## Project Choice (Tell us which project you're doing!)

- [ ] minesweeper variation

## Project Description 

This project is a minesweeper variation via the world of Monsters Inc.  The player presses the play button and then opens one of the doors by clicking a square.  This square will reveal either a blank space or a number which would indicate how many monsters lying in wait there are in directly adjacent squares.  As the player goes along, they can flag a door when they believe there's a monster behind it or open a door to guess that there isn't until they run into one monster (game over) or all non-monster squares have been revealed (win-con).

## Wire Frames

(see /wireframe/Monster Sweeper.pdf)

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


Necessary elements
1. UI
    - Door Grid
        - clickable door elements
    - Play / Reset game button

2. constants
    - each door
    - grid matrix
3. Function
    - randomizeMonsterLocation
    - calculateAdjMonsters
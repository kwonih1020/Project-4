# Project-4 "T.Ick-Tac-Toe"

## Technologies Used:

    1. HTML
    2. CSS
    3. JavaScript
    4. jQuery

## Installation Instructions:

    1. Add <script src="scripts/jquery-3.2.1.min.js"></script>
    2. Add <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> for jQuery.

## Approach Taken:

    Always wanted to code more basic HTML, CSS, and JavaScript during WDI. I felt like I need to practice more on JavaScript or jQuery, so I choose to make flash game by using HTML, CSS and JavaScript for my last Project at GA.

    I started with sketch outline for design, and sketch out for main function for basic tic tac toe game.

    My approach was to make a grid of HTMl <tr> and <td> elements with separated IDs, as a result, that user can click on each <td>. Made two separated HTML file, one for normal mode, and another for AI mode. Also created two separated JavaScript file and CSS file for separated function and visual.

    For normal mode, created checkForDraw(), checkForWinner(), alterPlayer(), reset() and count point logic. The checkForDraw() logic was a challenge for me at the end, spend few hours to get it work properly. Also, I added fadeIn and fadeOut animation for showing which player won each game.

    For AI mode, the only difference between normal mode and AI mode is setup randomValue(), and checkRowsAI() and aiTurn() logic for setting up automatically play against actual player.

    It was really good opportunity to practice JavaScript with jQuery, and also for CSS. I designed my game as simple as possible because it is more important to build something impressive that does one thing well.

## Unsolved Problem:

    1. DRY code.
    2. Selection for Player X or O for both Normal and AI mode.
    3. Level of difficulty: Low, Medium, High.
    4. More CSS OR jQuery animation.
    5. Function that not allow to click on the square which already taken.

## User Stories:
    1. As a user, I should be able to start with first move.
    2. As a user, I should be able to reset game.
    3. As a user, I should be able to play against random computer.
    4. As a user, I should be able to see the game points.
    5. As a user, I should be able to play normal or AI mode.
    6. As a user, I should be able to know which player wins the game.
    7. As a user, I should be able to know player X or O is playing.

## Deliverables:

    MVP: Normal mode with draw, winner, and point count function.

    Sliver: Add AI mode applied same function as normal mode.

    Gold: Make two player play each other through separated device by using socket.io method.



## Screenshot:

![ScreenShot](http://i.imgur.com/BE4eM5L.png "Normal Mode")

"Screenshot for AI Mode"

![ScreenShot](http://i.imgur.com/N7EFN6z.png "AI Mode")

"Screenshot for Normal Mode"

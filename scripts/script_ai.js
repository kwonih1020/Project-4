$(document).ready(function () {

  // Game Varables
  var turns = 0;
  var symbol;
  var rand;
  var win = false;
  var aiMove = null;
  var counter_X = 0;
  var counter_O = 0;

  // Board variables
  var t1 = $('#t1');
  var t2 = $('#t2');
  var t3 = $('#t3');
  var m1 = $('#m1');
  var m2 = $('#m2');
  var m3 = $('#m3');
  var b1 = $('#b1');
  var b2 = $('#b2');
  var b3 = $('#b3');

  // Board reset
  function reset() {
    $("#board td").text("");
    $("#board td").removeClass('o x taken');
      turns = 0;
      win = false;
  };

  function checkRowsAI(symbol) {

    // check if 2 tables in a row are filled in and go in missiing table.

    if (t1.hasClass(symbol) && t2.hasClass(symbol) && !t3.hasClass('taken')) {
      aiMove = t3;
    } else if (t1.hasClass(symbol) && t3.hasClass(symbol) && !t2.hasClass('taken')) {
      aiMove = t2;
    } else if (t2.hasClass(symbol) && t3.hasClass(symbol) && !t1.hasClass('taken')) {
      aiMove = t1;
    }

    else if (m1.hasClass(symbol) && m2.hasClass(symbol) && !m3.hasClass('taken')) {
      aiMove = m3;
    } else if (m1.hasClass(symbol) && m3.hasClass(symbol) && !m2.hasClass('taken')) {
      aiMove = m2;
    } else if (m2.hasClass(symbol) && m3.hasClass(symbol) && !m1.hasClass('taken')) {
      aiMove = m1;
    }

    else if (b1.hasClass(symbol) && b2.hasClass(symbol) && !b3.hasClass('taken')) {
      aiMove = b3;
    } else if (b1.hasClass(symbol) && b3.hasClass(symbol) && !b2.hasClass('taken')) {
      aiMove = b2;
    } else if (b2.hasClass(symbol) && b3.hasClass(symbol) && !b1.hasClass('taken')) {
      aiMove = b1;
    }

    else if (t1.hasClass(symbol) && m1.hasClass(symbol) && !b1.hasClass('taken')) {
      aiMove = b1;
    } else if (t1.hasClass(symbol) && b1.hasClass(symbol) && !m1.hasClass('taken')) {
      aiMove = m1;
    } else if (m1.hasClass(symbol) && b1.hasClass(symbol) && !t1.hasClass('taken')) {
      aiMove = t1;
    }

    else if (t2.hasClass(symbol) && m2.hasClass(symbol) && !b2.hasClass('taken')) {
      aiMove = b2;
    } else if (t2.hasClass(symbol) && b2.hasClass(symbol) && !m2.hasClass('taken')) {
      aiMove = m2;
    } else if (m2.hasClass(symbol) && b2.hasClass(symbol) && !t2.hasClass('taken')) {
      aiMove = t2;
    }

    else if (t3.hasClass(symbol) && m3.hasClass(symbol) && !b3.hasClass('taken')) {
      aiMove = b3;
    } else if (t3.hasClass(symbol) && b3.hasClass(symbol) && !m3.hasClass('taken')) {
      aiMove = m3;
    } else if (m3.hasClass(symbol) && b3.hasClass(symbol) && !t3.hasClass('taken')) {
      aiMove = t3;
    }

    else if (t1.hasClass(symbol) && m2.hasClass(symbol) && !b3.hasClass('taken')) {
      aiMove = b3;
    } else if (t1.hasClass(symbol) && b3.hasClass(symbol) && !m2.hasClass('taken')) {
      aiMove = m2;
    } else if (m2.hasClass(symbol) && b3.hasClass(symbol) && !t1.hasClass('taken')) {
      aiMove = t1;
    }

    else if (t3.hasClass(symbol) && m2.hasClass(symbol) && !b1.hasClass('taken')) {
      aiMove = b1;
    } else if (t3.hasClass(symbol) && b1.hasClass(symbol) && !m2.hasClass('taken')) {
      aiMove = m2;
    } else if (m2.hasClass(symbol) && b1.hasClass(symbol) && !t3.hasClass('taken')) {
      aiMove = t3;
    }
  }

  function randomValue() {

    // spot array for random value

    squares = [t1, t2, t3,
               m1, m2, m3,
               b1, b2, b3]
    rand = squares[Math.floor(Math.random() * squares.length)];
      return rand;
  }

  function compMove() {
    aiMove.addClass('o taken').text('o');
    symbol = 'o';
    turns++;
    checkWinner(symbol);
  }

  function aiTurn() {

    // AI turn

    aiMove = null;

    // check for two player "o" in a row.

    checkRowsAI('o');
      if (aiMove === null) {

        // check for two player "x" in a row

        checkRowsAI('x');
      if (aiMove === null) {

        // choose random square

        do {
            randomValue();
        }
        while (rand.hasClass('taken') && turns != 9);
            aiMove = rand;
            compMove();
        } else {

          // AI pick

            compMove();
          }
        } else {

          // AI pick

            compMove();
        }
  }

  function checkWinner(symbol) {

    // check if 3 same "x" of "o" in a row

    if (t1.hasClass(symbol) && t2.hasClass(symbol) && t3.hasClass(symbol) ||
        m1.hasClass(symbol) && m2.hasClass(symbol) && m3.hasClass(symbol) ||
        b1.hasClass(symbol) && b2.hasClass(symbol) && b3.hasClass(symbol) ||
        t1.hasClass(symbol) && m1.hasClass(symbol) && b1.hasClass(symbol) ||
        t2.hasClass(symbol) && m2.hasClass(symbol) && b2.hasClass(symbol) ||
        t3.hasClass(symbol) && m3.hasClass(symbol) && b3.hasClass(symbol) ||
        t1.hasClass(symbol) && m2.hasClass(symbol) && b3.hasClass(symbol) ||
        t3.hasClass(symbol) && m2.hasClass(symbol) && b1.hasClass(symbol)) {

          // pop up messages

          $('#messages').html(symbol + " is the Winner!").fadeIn().delay(3000).fadeOut(function () {
              win = true;
                if (symbol == 'x') {
                  counter_X ++;
                  counterX();
                } else {
                  counter_O ++;
                  counterO();
                }
          });
        } else if (turns == 9) {
            $('#messages').html("Draw!").fadeIn().delay(3000).fadeOut();
            counter_X ++;
            counter_O ++;
            counterX();
            counterO();
          }
  }

    // reset click events

    $('#reset').on('click', function () {
        reset();
    });

    // Player turn

    $('#board td').on('click', function () {
        if ($(this).hasClass('taken')) {
            $('#messages').html("square already taken").fadeIn().delay(3000).fadeOut();
        } else {
            symbol = 'x';
            $(this).text('x').addClass('x taken');
            turns++;
            checkWinner(symbol);
            aiTurn();
        }
    });

    // Points counter

  function counterX () {
    $('.player_x').text(counter_X);
  };

  function counterO () {
    $('.player_o').text(counter_O);
  };
});

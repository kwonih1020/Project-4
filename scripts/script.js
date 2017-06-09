$(document).ready(function(){

  // Game variables
  var move = 1;
  var play = true;
  var lastMove = 'X';
  var counter_X = 0;
  var counter_O = 0;


// start the game, click events

$(".board tr td").click(function() {

  var space1 = $(".board #0").text();
  var space2 = $(".board #1").text();
  var space3 = $(".board #2").text();
  var space4 = $(".board #3").text();
  var space5 = $(".board #4").text();
  var space6 = $(".board #5").text();
  var space7 = $(".board #6").text();
  var space8 = $(".board #7").text();
  var space9 = $(".board #8").text();

    if ($(this).text()=="" && play) {
      if ((move%2)==1) { $(this).text("X")
    }
      else { $(this).text("O") }
        move ++;

      let winner = checkForWinner();
      let draw = checkForDraw();

      if (winner != -1 && winner != "") {

        // if player "x" wins
	     if (winner == "X") {
         // pop up messgae
          $('#messages').html("Player X Wins!").fadeIn().delay(3000).fadeOut(function(){
            counter_X ++;
            counterX();
          })
       }
       // if player "o" wins
        else if (winner == "O") {
          // pop up messgae
          $("#messages").html("Player O Wins!").fadeIn().delay(3000).fadeOut(function() {
            counter_O ++;
            counterO();
          })
        }
      }
    };
    alterPlayer();
  });

  function checkForWinner() {
    let result = checkForWinnerInternal();
    console.log("result", result);
    return result;
  }

  // function to check tie Game

  function checkForDraw() {
    var space1 = $(".board #0").text();
    var space2 = $(".board #1").text();
    var space3 = $(".board #2").text();
    var space4 = $(".board #3").text();
    var space5 = $(".board #4").text();
    var space6 = $(".board #5").text();
    var space7 = $(".board #6").text();
    var space8 = $(".board #7").text();
    var space9 = $(".board #8").text();

        if (   (!!space1) && (!!space2) &&
           (!!space3) && (!!space4) &&
           (!!space5) && (!!space6) &&
           (!!space7) && (!!space8) &&
           (!!space9) ) {
             $("#messages").html("Draw!").fadeIn().delay(3000).fadeOut();
             counter_X ++;
             counter_O ++;
             counterX();
             counterO();
           }
  }

  // function to check winner
  function checkForWinnerInternal() {
    var space1 = $(".board #0").text();
    var space2 = $(".board #1").text();
    var space3 = $(".board #2").text();
    var space4 = $(".board #3").text();
    var space5 = $(".board #4").text();
    var space6 = $(".board #5").text();
    var space7 = $(".board #6").text();
    var space8 = $(".board #7").text();
    var space9 = $(".board #8").text();

    if      (!!space1 && (space1==space2) && (space2==space3)) { return space3; }
    else if (!!space4 && (space4==space5) && (space5==space6)) { return space6; }
    else if (!!space7 && (space7==space8) && (space8==space9)) { return space9; }

    else if (!!space1 && (space1==space4) && (space4==space7)) { return space7; }
    else if (!!space2 && (space2==space5) && (space5==space8)) { return space8; }
    else if (!!space3 && (space3==space6) && (space6==space9)) { return space9; }

    else if (!!space1 && (space1==space5) && (space5==space9)) { return space9; }
    else if (!!space3 && (space3==space5) && (space5==space7)) { return space7; }

    return -1;
  };

  // function to clear the board

  $('#reset').click(function(){
          var space1 = $(".board #0").text('');
          var space2 = $(".board #1").text('');
          var space3 = $(".board #2").text('');
          var space4 = $(".board #3").text('');
          var space5 = $(".board #4").text('');
          var space6 = $(".board #5").text('');
          var space7 = $(".board #6").text('');
          var space8 = $(".board #7").text('');
          var space9 = $(".board #8").text('');
        });

  // function to alternate the player

  function alterPlayer () {
    if(lastMove === 'X') {
      lastMove = 'O';
        $('.name').text('O');
    }
    else {
      lastMove = 'X';
        $('.name').text('X');
    }
  };


  // function to show points

  function counterX () {
    $('.player_x').text(counter_X);
  };

  function counterO () {
    $('.player_o').text(counter_O);
  };

})

$(document).ready(function(){

  var move = 1;
  var play = true;
  var lastMove = 'X';
  var counter_X = 0;
  var counter_O = 0;

  $("#board tr td").click(function() {
    if ($(this).text()=="" && play) {
      if ((move%2)==1) { $(this).append("X");
    }
      else { $(this).append("O"); }
        move++;

      if (checkForWinner()!=-1 && checkForWinner()!="") {
	     if (checkForWinner()=="X") { alert("Player X Wins!");
          counter_X ++;
          counterX();
      }
        else { alert("Player O Wins!");
          counter_O ++; //<--- Add +1 to the counter variable
          counterO(); //<--- Add +1 to the counter display
        }
        play = true;
      };
    };
      alterPlayer();
  });

  function checkForWinner() {
    var space1 = $("#board tr:nth-child(1) td:nth-child(1)").text();
    var space2 = $("#board tr:nth-child(1) td:nth-child(2)").text();
    var space3 = $("#board tr:nth-child(1) td:nth-child(3)").text();
    var space4 = $("#board tr:nth-child(2) td:nth-child(1)").text();
    var space5 = $("#board tr:nth-child(2) td:nth-child(2)").text();
    var space6 = $("#board tr:nth-child(2) td:nth-child(3)").text();
    var space7 = $("#board tr:nth-child(3) td:nth-child(1)").text();
    var space8 = $("#board tr:nth-child(3) td:nth-child(2)").text();
    var space9 = $("#board tr:nth-child(3) td:nth-child(3)").text();

    if      ((space1==space2) && (space2==space3)) { return space3; }
    else if ((space4==space5) && (space5==space6)) { return space6; }
    else if ((space7==space8) && (space8==space9)) { return space9; }

    else if ((space1==space4) && (space4==space7)) { return space7; }
    else if ((space2==space5) && (space5==space8)) { return space8; }
    else if ((space3==space6) && (space6==space9)) { return space9; }

    else if ((space1==space5) && (space5==space9)) { return space9; }
    else if ((space3==space5) && (space5==space7)) { return space7; }

    return -1;
  };

  $('#reset').click(function(){
          var space1 = $("#board tr:nth-child(1) td:nth-child(1)").html('');
          var space2 = $("#board tr:nth-child(1) td:nth-child(2)").html('');
          var space3 = $("#board tr:nth-child(1) td:nth-child(3)").html('');
          var space4 = $("#board tr:nth-child(2) td:nth-child(1)").html('');
          var space5 = $("#board tr:nth-child(2) td:nth-child(2)").html('');
          var space6 = $("#board tr:nth-child(2) td:nth-child(3)").html('');
          var space7 = $("#board tr:nth-child(3) td:nth-child(1)").html('');
          var space8 = $("#board tr:nth-child(3) td:nth-child(2)").html('');
          var space9 = $("#board tr:nth-child(3) td:nth-child(3)").html('');
        });

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

  function counterX () {
    $('.player_x').text(counter_X);
  };
  function counterO () {
    $('.player_o').text(counter_O);
  };
  
})

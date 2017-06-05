var player = 'x';
var ai = 'o';
var aiMove;
var move = 0;
var counter_X = 0;
var counter_O = 0;

var tableCheck;
var t1;
var t2;
var t3;
var m1;
var m2;
var m3;
var b1;
var b2;
var b3;

var checkForWinner;
var xWin = false;
var oWin = false;

var newGame;
var clearBoard;

var newGame = function () {
    $('td').one('click', function (event) {
        if (move == 0) {
            $(this).text(player);
            tableCheck();
            move == 1;
            aiMove();
            tableCheck();
            checkForWinner();
        }
    });
};

$(document).ready(function () {
    newGame();
});

var aiMove = function () {
    if (t1 == "" && ((t3 == "x" && t2 == "x") || (b3 == "x" && m2 == "x") || (b1 == "x" && m1 == "x"))) {
        $('#t1').text("o");
        move = 0;
    } else {
      if (t2 == "" && ((t1 == "x" && t3 == "x") || (b2 == "x" && m2 == "x"))) {
        $('#t2').text("o");
        move = 0;
        }
        else{
        if (t3 == "" && ((t1 == "x" && t2 == "x") || (b1 == "x" && m2 == "x") || (b3 == "x" && m3 == "x"))) {
            $('#t3').text("o");
            move = 0;
        }
            else{
            if (b3 == "" && ((b1 == "x" && b2 == "x") || (t1 == "x" && m2 == "x") || (t3 == "x" && m3 == "x"))) {
                $('#b3').text("o");
                move = 0;
        }
                else{
                if (b1 == "" && ((b3 == "x" && b2 == "x") || (t3 == "x" && m2 == "x") || (t1 == "x" && m1 == "x"))) {
                    $('#b1').text("o");
                    move = 0;
        }
                    else{
                    if (b2 == "" && ((b3 == "x" && b1 == "x") || (t2 == "x" && m2 == "x"))) {
                        $('#b2').text("o");
                        move = 0;
        }
                        else{
                        if (m1 == "" && ((m3 == "x" && m2 == "x") || (t1 == "x" && b1 == "x"))) {
                            $('#m1').text("o");
                            move = 0;
        }
                            else{
                            if (m3 == "" && ((t3 == "x" && b3 == "x") || (m2 == "x" && m1 == "x"))) {
                                $('#m3').text("o");
                                move = 0;
        }
                                else{
                                if (m2 == "" && ((t3 == "x" && b1 == "x") || (b3 == "x" && t1 == "x") || (m3 == "x" && m1 == "x") || (b2 == "x" && t2 == "x"))) {
                                    $('#m2').text("o");
                                    move = 0;
        }
                                   else{
                                    if (m2 == "") {
                                        $('#m2').text("o");
                                        move = 0;

                                    }
                                        else{
                                        if (t1 == "") {
                                            $('#t1').text("o");
                                            move = 0;

                                    }
                                            else{
                                            if (b3 == "") {
                                            $('#b3').text("o");
                                            move = 0;

                                    }
                                                else {
                                                if (b2 == "") {
                                            $('#b2').text("o");
                                            move = 0;

                                    }
                                                    else{
                                                    if (m1 == "") {
                                            $('#m1').text("o");
                                            move = 0;

                                    }
                                                    }
                                                }
                                            }


                                        }
                                   }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

tableCheck = function () {
    t1 = $('#t1').html();
    t2 = $('#t2').html();
    t3 = $('#t3').html();
    m1 = $('#m1').html();
    m2 = $('#m2').html();
    m3 = $('#m3').html();
    b1 = $('#b1').html();
    b2 = $('#b2').html();
    b3 = $('#b3').html();
};

checkForWinner = function () {
    if ((t1 == t2 && t1 == t3 && (t1 == "x")) ||
    (m1 == m2 && m1 == m3 && (m1 == "x")) ||
    (b1 == b2 && b1 == b3 && (b1 == "x")) ||
    (t1 == m1 && t1 == b1 && (t1 == "x")) ||
    (t2 == m2 && t2 == b2 && (t2 == "x")) ||
    (t3 == m3 && t3 == b3 && (t3 == "x")) ||
    (t1 == m2 && t1 == b3 && (t1 == "x")) ||
    (t3 == m2 && t3 == b1 && (t3 == "x"))
    ) {
        xWin = true;
        alert("Player X Wins!");
        counter_X ++;
        counterX();
    }
    else {
        if ((t1 == t2 && t1 == t3 && (t1 == "o")) ||
        (m1 == m2 && m1 == m3 && (m1 == "o")) ||
        (b1 == b2 && b1 == b3 && (b1 == "o")) ||
        (t1 == m1 && t1 == b1 && (t1 == "o")) ||
        (t2 == m2 && t2 == b2 && (t2 == "o")) ||
        (t3 == m3 && t3 == b3 && (t3 == "o")) ||
        (t1 == m2 && t1 == b3 && (t1 == "o")) ||
        (t3 == m2 && t3 == b1 && (t3 == "o"))
        ) {
            oWin = true;
            alert("Player AI Wins!");
            counter_O ++;
            counterO();
        }
        else {
            if (((t1 == "x") || (t1 == "o")) && ((m1 == "x") || (m1 == "o")) && ((b1 == "x") || (b1 == "o")) && ((t2 == "x") || (t2 == "o")) && ((m2 == "x") || (m2 == "o")) && ((b2 == "x") || (b2 == "o")) && ((t3 == "x") || (t3 == "o")) && ((m3 == "x") || (m3 == "o")) && ((b3 == "x") || (b3 == "o"))) {
                alert("Draw!");
            }
        }
    }
};

var clearBoard = $('#reset').click(function () {
    a1 = $("#board tr:nth-child(1) td:nth-child(1)").html("");
    b1 = $("#board tr:nth-child(1) td:nth-child(2)").html("");
    c1 = $("#board tr:nth-child(1) td:nth-child(3)").html("");
    a2 = $("#board tr:nth-child(2) td:nth-child(1)").html("");
    b2 = $("#board tr:nth-child(2) td:nth-child(2)").html("");
    c2 = $("#board tr:nth-child(2) td:nth-child(3)").html("");
    a3 = $("#board tr:nth-child(3) td:nth-child(1)").html("");
    b3 = $("#board tr:nth-child(3) td:nth-child(2)").html("");
    c3 = $("#board tr:nth-child(3) td:nth-child(3)").html("");
    xWin = false;
    oWin = false;
    newGame();
});

function counterX () {
  $('.player_x').text(counter_X);
};
function counterO () {
  $('.player_o').text(counter_O);
};

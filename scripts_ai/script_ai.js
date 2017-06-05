var player = 'x';
var ai = 'o';
var aiMove;
var turn = 0;
var lastMove = 'X';
var counter_X = 0;
var counter_O = 0;

var boardCheck;
var t1;
var t2;
var t3;
var m1;
var m2;
var m3;
var b1;
var b2;
var b3;

var checkWin;
var xWin = false;
var oWin = false;
var winAlert;

var newGame;
var clearBoard;

var newGame = function () {
    $('td').one('click', function (event) {
        if (turn == 0) {
            $(this).text(player);
            boardCheck();
            checkWin();
            turn == 1;
            aiMove();
            boardCheck();
            checkWin();
        }
    });
};

$(document).ready(function () {
    newGame();
});

var aiMove = function () {
    if (t1 == "" && ((t3 == "x" && t2 == "x") || (b3 == "x" && m2 == "x") || (b1 == "x" && m1 == "x"))) {
        $('#t1').text("o");
        turn = 0;
    } else {
      if (t2 == "" && ((t1 == "x" && t3 == "x") || (b2 == "x" && m2 == "x"))) {
        $('#t2').text("o");
        turn = 0;
        }
        else{
        if (t3 == "" && ((t1 == "x" && t2 == "x") || (b1 == "x" && m2 == "x") || (b3 == "x" && m3 == "x"))) {
            $('#t3').text("o");
            turn = 0;
        }
            else{
            if (b3 == "" && ((b1 == "x" && b2 == "x") || (t1 == "x" && m2 == "x") || (t3 == "x" && m3 == "x"))) {
                $('#b3').text("o");
                turn = 0;
        }
                else{
                if (b1 == "" && ((b3 == "x" && b2 == "x") || (t3 == "x" && m2 == "x") || (t1 == "x" && m1 == "x"))) {
                    $('#b1').text("o");
                    turn = 0;
        }
                    else{
                    if (b2 == "" && ((b3 == "x" && b1 == "x") || (t2 == "x" && m2 == "x"))) {
                        $('#b2').text("o");
                        turn = 0;
        }
                        else{
                        if (m1 == "" && ((m3 == "x" && m2 == "x") || (t1 == "x" && b1 == "x"))) {
                            $('#m1').text("o");
                            turn = 0;
        }
                            else{
                            if (m3 == "" && ((t3 == "x" && b3 == "x") || (m2 == "x" && m1 == "x"))) {
                                $('#m3').text("o");
                                turn = 0;
        }
                                else{
                                if (m2 == "" && ((t3 == "x" && b1 == "x") || (b3 == "x" && t1 == "x") || (m3 == "x" && m1 == "x") || (b2 == "x" && t2 == "x"))) {
                                    $('#m2').text("o");
                                    turn = 0;
        }
                                   else{ // IF NO OPP TO BLOCK A WIN, THEN PLAY IN ONE OF THESE SQUARES
                                    if (m2 == "") {
                                        $('#m2').text("o");
                                        turn = 0;

                                    }
                                        else{
                                        if (t1 == "") {
                                            $('#t1').text("o");
                                            turn = 0;

                                    }
                                            else{
                                            if (b3 == "") {
                                            $('#b3').text("o");
                                            turn = 0;

                                    }
                                                else {
                                                if (b2 == "") {
                                            $('#b2').text("o");
                                            turn = 0;

                                    }
                                                    else{
                                                    if (m1 == "") {
                                            $('#m1').text("o");
                                            turn = 0;

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
    alterPlayer();
};

boardCheck = function () {
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

checkWin = function () {
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
        winAlert();
        counter_X ++;
        counterX();

    } else {
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
            winAlert();
            counter_O ++;
            counterO();

        } else {
            if (((t1 == "x") || (t1 == "o")) && ((m1 == "x") || (m1 == "o")) && ((b1 == "x") || (b1 == "o")) && ((t2 == "x") || (t2 == "o")) && ((m2 == "x") || (m2 == "o")) && ((b2 == "x") || (b2 == "o")) && ((t3 == "x") || (t3 == "o")) && ((m3 == "x") || (m3 == "o")) && ((b3 == "x") || (b3 == "o"))) {
                alert("Draw!");
            }
        }
    }
};

var winAlert = function () {
    if (xWin == true) {
        alert("Player X won!");
    } else {
        if (oWin == true) {
            alert("Player AI won!");
        }
    }
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
        xWin = false;
        oWin = false;
        newGame();
        location.reload();
});

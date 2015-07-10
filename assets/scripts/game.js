'use strict'


var board = [null, null, null, null, null, null, null, null, null];

var turn = "X";

var winCountX = 0;

var winCountO = 0;

var turnCounter = 0;

var changeTile = function($dom) {
  board[$dom.attr('id')] = turn;
};

var changePiece = function($dom) {
  if (turn === "X") {
    $dom.html("<div class='piece'>X</div>");
  } else {
    $dom.html("<div class='piece'>O</div>");
  }
};

var changeColor = function($dom) {
  var color = "red";
  if (turn === "O") {
    color = "blue";
  }
  $dom.css("background-color", color);
};

var boardReset = function reset(){
  $(".tiles").html('');
  $(".tiles").css('background-color', '#8AC007');
  for (var i = 0; i < 9; i++) {
  board[i] = null;
  }
}

var changeTurn = function() {
  turn = (turn === "X" ? "O" : "X");
};
var counter = 0;

var getTie = function() {
  if (turnCounter === 9) {
    alert("TIE!");
    boardReset();
    turnCounter = 0;
  }
};

// var getWinnerX = function() {
//   if (((board[0] === "X" && board[1] === "X" && board[2] === "X") ||
//        (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
//        (board[6] === "X" && board[7] === "X" && board[8] === "X")) ||
//       ((board[0] === "X" && board[3] === "X" && board[6] === "X") ||
//        (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
//        (board[2] === "X" && board[5] === "X" && board[8] === "X")) ||
//       ((board[0] === "X" && board[4] === "X" && board[8] === "X") ||
//        (board[2] === "X" && board[4] === "X" && board[6] === "X"))) {
//     winCountX++;
//     $('#scoreboardX').html("Player X Score: " + winCountX);
//     alert("Congratulations Player X, you've won!");
//     boardReset();
//     turnCounter = 0;
//   }
// }

// var getWinnerO = function() {
//   if (((board[0] === "O" && board[1] === "O" && board[2] === "O") ||
//       (board[3] === "O" && board[4] === "O" && board[5] === "O") ||
//       (board[6] === "O" && board[7] === "O" && board[8] === "O")) ||
//      ((board[0] === "O" && board[3] === "O" && board[6] === "O") ||
//       (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
//       (board[2] === "O" && board[5] === "O" && board[8] === "O")) ||
//      ((board[0] === "O" && board[4] === "O" && board[8] === "O") ||
//       (board[2] === "O" && board[4] === "O" && board[6] === "O"))) {
//     winCountO++;
//     $('#scoreboardO').html("Player O Score: " + winCountO);
//     alert("Congratulations Player O, you've won!");
//     boardReset();
//     turnCounter = 0;
//   }
// }

// isWinner("O")
var isWinner = function(player) { //player will be either "O" or "X"
  if (((board[0] === player && board[1] === player && board[2] === player) ||
      (board[3] === player && board[4] === player && board[5] === player) ||
      (board[6] === player && board[7] === player && board[8] === player)) ||
     ((board[0] === player && board[3] === player && board[6] === player) ||
      (board[1] === player && board[4] === player && board[7] === player) ||
      (board[2] === player && board[5] === player && board[8] === player)) ||
     ((board[0] === player && board[4] === player && board[8] === player) ||
      (board[2] === player && board[4] === player && board[6] === player))) {
    if (player === "O") {
      winCountO++;
      $('#scoreboardO').html("Player O Score: " + winCountO);
      alert("Congratulations Player O, you've won!");
    } else {
      winCountX++;
      $('#scoreboardX').html("Player X Score: " + winCountX);
      alert("Congratulations Player X, you've won!");
    }
    boardReset();
    turnCounter = 0;
  }
}

var tileClick = function () {
  var $tile = $(this);
  var arrayIdentifier = $tile.attr('id')
  if (board[arrayIdentifier] === null) {
    changePiece($tile);
    changeColor($tile);
    changeTile($tile);
    isWinner("X");
    isWinner("O");
    changeTurn();
    turnCounter++;
    getTie();
  } else {
    alert("FUCK OFF")
  }
};

$(document).ready(function(){
  $('#board').hide();
  var $tiles = $(".tiles");
  var $PlayerOne = $('#playerone').val();
  var $playerTwo = $('#playertwo').val();

  $tiles.on("click", tileClick);

  $('#start').on("click", function() {
    $('#board').show();
    $('#inputs').hide();
  });

  $('#scoreboardX').html("Player One: " + winCountX);
  $('#scoreboardO').html("Player Two: " + winCountO);
  $(function() {
    'use strict';
    var gameWatcher;
    // var sa = '//localhost:3000';
    // var sa = 'https://young-citadel-2431.herokuapp.com';
    var sa = 'https://young-citadel-2431.herokuapp.com';

    $('#register').on('click', function(e) {
      $.ajax(sa + '/register', {
        contentType: 'application/json',
        processData: false,
        data: JSON.stringify({
          credentials: {
            email: $('#email').val(),
            password: $('#password').val(),
            password_confirmation: $('#password').val()
          }
        }),
        dataType: 'json',
        method: 'POST'
      }).done(function(data, textStatus, jqxhr){
        $('#result').val(JSON.stringify(data));
      }).fail(function(jqxhr, textStatus, errorThrown){
        $('#result').val('registration failed');
      });
    });

    $('#login').on('click', function(e) {
      $.ajax(sa + '/login', {
        contentType: 'application/json',
        processData: false,
        data: JSON.stringify({
          credentials: {
            email: $('#email').val(),
            password: $('#password').val()
          }
        }),
        dataType: 'json',
        method: 'POST'
      }).done(function(data, textStatus, jqxhr){
        $('#token').val(data.token);
      }).fail(function(jqxhr, textStatus, errorThrown){
        $('#result').val('login failed');
      });
    });

    $('#list').on('click', function(e) {
      $.ajax(sa + '/games', {
        dataType: 'json',
        method: 'GET',
        headers: {
          Authorization: 'Token token=' + $('#token').val()
        }
      }).done(function(data, textStatus, jqxhr){
        $('#result').val(JSON.stringify(data));
      }).fail(function(jqxhr, textStatus, errorThrown){
        $('#result').val('list failed');
      });
    });

    $('#create').on('click', function(e) {
      $.ajax(sa + '/games', {
        contentType: 'application/json',
        processData: false,
        data: JSON.stringify({}),
        dataType: 'json',
        method: 'POST',
        headers: {
          Authorization: 'Token token=' + $('#token').val()
        }
      }).done(function(data, textStatus, jqxhr){
        $('#result').val(JSON.stringify(data));
      }).fail(function(jqxhr, textStatus, errorThrown){
        $('#result').val('create failed');
      });
    });

    $('#show').on('click', function(e) {
      $.ajax(sa + '/games/' + $('#id').val(), {
        dataType: 'json',
        method: 'GET',
        headers: {
          Authorization: 'Token token=' + $('#token').val()
        }
      }).done(function(data, textStatus, jqxhr){
        $('#result').val(JSON.stringify(data));
      }).fail(function(jqxhr, textStatus, errorThrown){
        $('#result').val('show failed');
      });
    });

    $('#join').on('click', function(e){
      $.ajax(sa + '/games/' + $('#id').val(), {
        contentType: 'application/json',
        processData: false,
        data: JSON.stringify({}),
        dataType: 'json',
        method: 'PATCH',
        headers: {
          Authorization: 'Token token=' + $('#token').val()
        }
      }).done(function(data, textStatus, jqxhr){
        $('#result').val(JSON.stringify(data));
      }).fail(function(jqxhr, textStatus, errorThrown){
        $('#result').val('game joined');
      });
    });

    $('#move').on('click', function(e){
      $.ajax(sa + '/games/' + $('#id').val(), {
        contentType: 'application/json',
        processData: false,
        data: JSON.stringify({
          game: {
            cell: {
              index: +$('#index').val(),
              value: $('#value').val()
            }
          }
        }),
        dataType: 'json',
        method: 'PATCH',
        headers: {
          Authorization: 'Token token=' + $('#token').val()
        }
      }).done(function(data, textStatus, jqxhr){
        $('#result').val(JSON.stringify(data));
      }).fail(function(jqxhr, textStatus, errorThrown){
        $('#result').val('move failed');
      });
    });

    $('#watch').on('click', function(){
      console.log("Waiting for other player to move.");
      gameWatcher = resourceWatcher(sa + '/games/' + $('#id').val() + '/watch', {
          Authorization: 'Taken token=' + $('#token').val()
      });
      gameWatcher.on('change', function(data){
        debugger;
        var parsedData = JSON.parse(data);
        //
        var gameData = parsedData.game;
        var cell = gameData.cell;
        $('#index').val(cell.index);
        $('#value').val(cell.value);
       });
      gameWatcher.on('error', function(e){
        console.log(e);
      });
    });
  });


});

// Problems:
//   Can't get the X's and O's off the board
//   Scoreboard doesn't work
//   Don't know how to integrate Anton's platform

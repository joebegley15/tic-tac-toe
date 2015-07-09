'use strict'

var board = [null, null, null, null, null, null, null, null, null];

var turn = "X";

var changeBoard = function($dom) {
  if (turn === "X" && $dom.attr('id') === "tl") {
      board[0] = "X";
  }
  if (turn === "X" && $dom.attr('id') === "tc") {
      board[1] = "X";
  }
  if (turn === "X" && $dom.attr('id') === "tr") {
      board[2] = "X";
  }
  if (turn === "X" && $dom.attr('id') === "cl") {
      board[3] = "X";
  }
  if (turn === "X" && $dom.attr('id') === "cc") {
      board[4] = "X";
  }
  if (turn === "X" && $dom.attr('id') === "cr") {
      board[5] = "X";
  }
  if (turn === "X" && $dom.attr('id') === "bl") {
      board[6] = "X";
  }
  if (turn === "X" && $dom.attr('id') === "bc") {
      board[7] = "X";
  }
  if (turn === "X" && $dom.attr('id') === "br") {
      board[8] = "X";
  }
  if (turn === "O" && $dom.attr('id') === "tl") {
      board[0] = "O";
  }
  if (turn === "O" && $dom.attr('id') === "tc") {
      board[1] = "O";
  }
  if (turn === "O" && $dom.attr('id') === "tr") {
      board[2] = "O";
  }
  if (turn === "O" && $dom.attr('id') === "cl") {
      board[3] = "O";
  }
  if (turn === "O" && $dom.attr('id') === "cc") {
      board[4] = "O";
  }
  if (turn === "O" && $dom.attr('id') === "cr") {
      board[5] = "O";
  }
  if (turn === "O" && $dom.attr('id') === "bl") {
      board[6] = "O";
  }
  if (turn === "O" && $dom.attr('id') === "bc") {
      board[7] = "O";
  }
  if (turn === "O" && $dom.attr('id') === "br") {
      board[8] = "O";
  }
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

var changeTurn = function() {
  turn = (turn === "X" ? "O" : "X");
};

var getWinner = function() {

  if (((board[0] === "X" && board[1] === "X" && board[2] === "X") || (board[3] === "X" && board[4] === "X" && board[5] === "X") || (board[6] === "X" && board[7] === "X" && board[8] === "X")) || ((board[0] === "X" && board[3] === "X" && board[6] === "X") || (board[1] === "X" && board[4] === "X" && board[7] === "X") || (board[2] === "X" && board[5] === "X" && board[8] === "X")) || ((board[0] === "X" && board[4] === "X" && board[8] === "X") || (board[2] === "X" && board[4] === "X" && board[6] === "X")))
    alert("Congratulations Player X, you've won!")
  }

var clickHandler = function () {
  var $tile = $(this);

  changePiece($tile);
  changeColor($tile);
  changeBoard($tile);
  changeTurn();
  getWinner();
};

$(document).ready(function(){
  var $tiles = $(".tiles");

  $tiles.on("click", clickHandler);

//   $("#tc").on("click", function(){
//     board[0] = "X"
//   });
//   $("#tr").on("click", function(){
//     board[0] = "X"
//   });
//   $("#cl").on("click", function(){
//     board[0] = "X"
//   });
//   $("#cc").on("click", function(){
//     board[0] = "X"
//   });
//   $("#cr").on("click", function(){
//     board[0] = "X"
//   });
});

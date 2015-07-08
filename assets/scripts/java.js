'use strict'

var board = [null, null, null, null, null, null, null, null, null];

var turn = "X";

var changeBoard = function($dom) {
  if (turn === "X" && $dom.attr('id') === "tl") {
      board[0] = "X";
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

var clickHandler = function () {
  var $tile = $(this);

  changePiece($tile);
  changeColor($tile);
  changeBoard($tile);
  changeTurn();
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

import "./styles.css";

// This is the fixed version of my previous submission from winter course I did not finish.

var turn = 1;
var gameOver = 0;

var field = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""]
];

// THIS IS STRAIGHT FROM LECTURE EXAMPLE
if (document.readyState !== "loading") {
  // Document ready, executing
  console.log("Document ready, executing");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function() {
    // Document was not ready, executing when loaded
    console.log("Document ready, executing after a wait");
    initializeCode();
  });
}

// BASED ON LECTURE EXAMPLE
function initializeCode() {
  console.log("Initializing");
  document.getElementById("info").innerHTML = "<h2>P1:x P2:o</h2>";
  document.getElementById("turn").innerHTML = "<h2>Turn of Player 1 (x)</h2>";
  const boardi = document.getElementById("board");

  // Create table (logic influenced by internet sources)
  for (var i = 0; i <= 4; i++) {
    // table row TR
    var row = document.createElement("TR");
    for (var j = 0; j <= 4; j++) {
      // table TD with textnode
      var cell = document.createElement("TD");
      var cellTxtNode = document.createTextNode("");
      cell.setAttribute("height", "40");
      cell.setAttribute("width", "40");
      cell.setAttribute("align", "center");
      // Attribute for each cell
      cell.setAttribute("id", i + "" + j);
      // Event listener for clicks
      cell.addEventListener("click", move);
      cell.appendChild(cellTxtNode);
      //TD append to TR
      row.appendChild(cell);
    }
    //TR append to TABLE, border needed also
    boardi.appendChild(row);
    boardi.setAttribute("border", "1");
  }
}

function move() {
  // ADDING a move to TABLE and Array
  //
  if (gameOver === 0 && turn === 1 && this.innerHTML === "") {
    this.innerHTML = "x";
    field[parseInt(this.id[0], 10)][parseInt(this.id[1], 10)] = "x";
    document.getElementById("turn").innerHTML = "<h2>Turn of Player 2 (o)</h2>";
    turn = 2;
    checkWinner();
  } else if (gameOver === 0 && turn === 2 && this.innerHTML === "") {
    this.innerHTML = "o";
    field[parseInt(this.id[0], 10)][parseInt(this.id[1], 10)] = "o";
    document.getElementById("turn").innerHTML = "<h2>Turn of Player 1 (x)</h2>";
    turn = 1;
    checkWinner();
  }
}

var checkWinner = function() {
  // DUCT TAPE AND CHEWING GUM FOR CHECKING WINNER
  // Checks ROWS, COLUMNS and 2 DIAGONAL possibilities
  var p1 = 0;
  var p2 = 0;

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if (field[i][j] === "x") {
        p1++;
      } else if (field[i][j] === "o") {
        p2++;
      }
      if (p1 === 5) {
        document.getElementById("turn").innerHTML =
          "<h2>Player 1 (x) wins!</h2>";
        alert("Player 1 won!");
        gameOver = 1;
        //return "player 1 won";
      } else if (p2 === 5) {
        document.getElementById("turn").innerHTML =
          "<h2>Player 2 (o) wins!</h2>";
        alert("Player 2 won!");
        gameOver = 1;
        //return "player 2 won";
      }
    }
    p1 = 0;
    p2 = 0;
  }
  for (var j = 0; j < 5; j++) {
    for (var i = 0; i < 5; i++) {
      if (field[i][j] === "x") {
        p1++;
      } else if (field[i][j] === "o") {
        p2++;
      }
      if (p1 === 5) {
        document.getElementById("turn").innerHTML =
          "<h2>Player 1 (x) wins!</h2>";
        alert("Player 1 won!");
        gameOver = 1;
        //return "player 1 won";
      } else if (p2 === 5) {
        document.getElementById("turn").innerHTML =
          "<h2>Player 2 (o) wins!</h2>";
        alert("Player 2 won!");
        gameOver = 1;
        //return "player 2 won";
      }
    }
    p1 = 0;
    p2 = 0;
  }
  for (var j = 0; j < 5; j++) {
    if (field[j][j] === "x") {
      p1++;
    } else if (field[j][j] === "o") {
      p2++;
    }
    if (p1 === 5) {
      document.getElementById("turn").innerHTML = "<h2>Player 1 (x) wins!</h2>";
      alert("Player 1 won!");
      gameOver = 1;
      //return "player 1 won";
    } else if (p2 === 5) {
      document.getElementById("turn").innerHTML = "<h2>Player 2 (o) wins!</h2>";
      alert("Player 2 won!");
      gameOver = 1;
      //return "player 2 won";
    }
  }
  p1 = 0;
  p2 = 0;
  for (var k = 0; k < 5; k++) {
    if (field[4 - k][0 + k] === "x") {
      p1++;
    } else if (field[4 - k][0 + k] === "o") {
      p2++;
    }
    if (p1 === 5) {
      document.getElementById("turn").innerHTML = "<h2>Player 1 (x) wins!</h2>";
      alert("Player 1 won!");
      gameOver = 1;

      //return "player 1 won";
    } else if (p2 === 5) {
      document.getElementById("turn").innerHTML = "<h2>Player 2 (o) wins!</h2>";
      alert("Player 2 won!");
      gameOver = 1;
      //return "player 2 won";
    }
  }
  p1 = 0;
  p2 = 0;

  return "no winner";
};

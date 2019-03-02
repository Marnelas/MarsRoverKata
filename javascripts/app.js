// Rover Object Goes Here
// ======================
var ActRover = { direction: "N" };
var contador = null;
var x = 0;
var y = 0;

// ======================
function turnLeft(rover) {
  console.log("turnLeft was called!");
  contador++;
}

function turnRight(rover) {
  console.log("turnRight was called!");
  contador = 2;
}

function moveForward(rover) {
  console.log("moveForward was called");
  contador = 0;
}
switch (ActRover.direction) {
  case "N":
    if (contador == 1) {
      ActRover.direction("W");
      x--;
    } else if (contador == 2) {
      ActRover.direction("E");
      x++;
    }
    break;
  case "E":
    if (contador == 1) {
      ActRover.direction("N");
      y++;
    } else if (contador == 2) {
      ActRover.direction("S");
      y--;
    }
    break;
  case "S":
    if (contador == 1) {
      ActRover.direction("E");
      x++;
    } else if (contador == 2) {
      ActRover.direction("W");
      x--;
    }
    break;
  case "W":
    if (contador == 1) {
      ActRover.direction("S");
      y--;
    } else if (contador == 2) {
      ActRover.direction("N");
      y++;
    }
    break;
}

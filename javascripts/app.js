// Rover Object Goes Here
// ======================
var rover = { direction: "N" };
var contador = null;
var x = 0;
var y = 0;


// ======================
function turnLeft(rover) {
  console.log("turnLeft was called!");
position(1)
console.log(x + ", " + y)
}

function turnRight(rover) {
  console.log("turnRight was called!");
position(2)
}

function moveForward(rover) {
  console.log("moveForward was called");
position(0)
}
function position(contador) {
  switch (rover.direction) {
    case "N":
      if (contador == 1) {
        rover.direction("W");
        x--;
        contador = 0;
      } else if (contador == 2) {
        rover.direction("E");
        x++;
        contador = 0;
      } else {
        y++;
      }
      break;
    case "E":
      if (contador == 1) {
        rover.direction("N");
        y++;
        contador = 0;
      } else if (contador == 2) {
        rover.direction("S");
        y--;
        contador = 0;
      } else {
        x++;
      }
      break;
    case "S":
      if (contador == 1) {
        rover.direction("E");
        contador = 0;
        x++;
      } else if (contador == 2) {
        rover.direction("W");
        contador = 0;
        x--;
      } else {
        y--;
      }
      break;
    case "W":
      if (contador == 1) {
        rover.direction("S");
        contador = 0;
        y--;
      } else if (contador == 2) {
        rover.direction("N");
        contador = 0;
        y++;
      } else {
        x--;
      }
      break;
  }
  function comandlist(list) {
    var list = ["R","F","F","R","F","F","L","F","R","F","F"];
for(var i = 0;i < list.length;i++){
  switch(list[i]){
case 'R':
turnRight();
break;
case 'L':
turnLeft();
break;
case 'F':
moveForward();
break;

  } 
}
  }
 
}

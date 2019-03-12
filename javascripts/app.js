// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x : 0,
  y : 0,
  arraycommand : []
};
console.log("ingrese moveNorth,moveEast,moveWest, moveSouth o otra letra para resetear rover")




function moveNorth(rover){
  rover.direction = "N";
  y++;
  moveResult(rover);

}
function moveEast(rover){
  rover.direction = "E";
  x++;
  moveResult(rover)
}
function moveSouth(rover){
  rover.direction = "S";
  y--;
  moveResult(rover)
}
function moveWest(rover){
  rover.direction = "W";
  x--;
  moveResult(rover)
}
function moveResult(rover){

  switch (rover.direction){
    case 'N':
    rover.arraycommand[i] = "N"
    break;
    case 'S':
    rover.arraycommand[i] = "S"
    break;
    case 'W':
    rover.arraycommand[i] = "W"
    break;
    case 'E':
    rover.arraycommand[i] = "E"
    break;
    default:
    "reseteando a rover"
    rover.arraycommand = [];
    rover.x = 0;
    rover.y = 0;
    rover.direction = "N"
  }
  }


// ======================
/*function turnLeft(rover) {
  console.log("turnLeft was called!");
  position(1);
  console.log(x + ", " + y);
}

function turnRight(rover) {
  console.log("turnRight was called!");
  position(2);
}

function moveForward(rover) {
  console.log("moveForward was called");
  position(0);
}*/



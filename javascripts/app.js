// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x : 0,
  y : 0,
  arraycommand : []
};
var command = 0;
function movecommand(command){
switch(command){
  case 'f':
  moveNorth();
  break;
  case 'b':
  moveSouth();
  break;
  case 'l':
  moveEast();
  break;
  case 'r':
  moveWest();
  break;
}
  
  
}



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
  if(tablelimit() == null){
  moveResult(rover)
  }
}
function tablelimit(rover){
  if(rover.direction == 10 || rover.direction == 10){
    return true;
  }
  return null;
}
function moveResult(rover){
  var i = 0;
  switch (rover.direction){
    
    case 'N':
    rover.arraycommand[i] = "N";
    i++;
    break;
    case 'S':
    rover.arraycommand[i] = "S"
    i++;
    break;
    case 'W':
    rover.arraycommand[i] = "W"
    i++;
    break;
    case 'E':
    rover.arraycommand[i] = "E"
    i++;
    break;
    default:
    "reseteando a rover"  
    rover.arraycommand = [];
    rover.x = 0;
    rover.y = 0;
    i = 0;
    rover.direction = "N"
  }
  }



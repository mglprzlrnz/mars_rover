var myRover = {
  position: [0,0],
  direction: 'N'
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }

  /*console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  console.log("New Roger direction is " + rover.direction);*/
}



function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--;
      break;
    case 'E':
      rover.position[1]--;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[1]++;
      break;
  }

  /*console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  console.log("New Roger direction is " + rover.direction);*/
}



function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = "E";
      break;
    case 'E':
      rover.direction = "S";
      break;
    case 'S':
      rover.direction = "W";
      break;
    case 'W':
      rover.direction = "N";
      break;
    }
    /*console.log("New Roger direction is " + rover.direction);
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");*/
}

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = "W";
      break;
    case 'E':
      rover.direction = "N";
      break;
    case 'S':
      rover.direction = "E";
      break;
    case 'W':
      rover.direction = "S";
      break;
    }
    /*console.log("New Roger direction is " + rover.direction);
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");*/
}

var roverCommand = prompt("Rover is in Position [0,0] Direction: N. Please, enter the command to move Rover:");
  //console.log (roverCommand);

for (var i = 0; i <= roverCommand.length - 1; i ++) {
      if (roverCommand [i] === "f") {
      goForward(myRover);
      }
      else if (roverCommand [i] === "b") {
      goBackward(myRover);
      }
      else if (roverCommand [i] === "r") {
      turnRight(myRover);
      }
      else if (roverCommand [i] === "l") {
      turnLeft(myRover);
      }
      else {
        console.log("This is not a right command. We continue to the next command.");
      }
}


console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
console.log("New Roger direction is " + myRover.direction);


  //f: goForward(myRover);
  //b: goBackward(myRover);
  //r: turnRight(myRover);
  //l: turnLeft(myRover);

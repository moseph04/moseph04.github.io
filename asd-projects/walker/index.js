/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  $(document).on('keydown', handleKeyDown); 
  $(document).on('keyup', handleKeyUp);                     // change 'eventType' to the type of event you want to handle
  var KEY = {
    "LEFT": 37,
    "RIGHT": 39,
    "UP": 38,
    "DOWN": 40,
  };
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);

  //TODO2//
 
  var xLocation = 0;
  var yLocation = 0;
  var xSpeed = 0;
  var ySpeed = 0;

  function newFrame() {
    repositionGameItem();
    redrawGameItem();
  }

  function handleKeyDown(event) {
    console.log('yo');
    if (event.which === KEY.DOWN) {
      console.log("down pressed");
      ySpeed = 5;
    } else if (event.which === KEY.UP) {
      console.log("up pressed");
      ySpeed = -5;
    } else if (event.which === KEY.LEFT) {
      console.log("left pressed");
      xSpeed = -5;
    } else if (event.which === KEY.RIGHT) {
      console.log("right pressed");
      xSpeed = 5;
    }
  };

  function handleKeyUp(event) {
    if (event.which === KEY.DOWN) {
      ySpeed = 0;
    } else if (event.which === KEY.UP) {
      ySpeed = 0;
    } else if (event.which === KEY.LEFT) {
      xSpeed = 0;
    } else if (event.which === KEY.RIGHT) {
      xSpeed = 0;
    }
  };

  
    //HELPER FUNCTIONS//

    function repositionGameItem() {
      xLocation += xSpeed;
      yLocation += ySpeed;
    };

    function redrawGameItem() {
      $("#walker").css("left", xLocation);
      $("#walker").css("top", yLocation);
    };

    

    function endGame() {
      clearInterval(interval);

      $(document).off();
    };
}

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
  $(document).on('keyup', handleKeyUp);                   
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
    outOfBounds();
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
      return xLocation;
    };

    function redrawGameItem() {
      $("#walker").css("left", xLocation);
      $("#walker").css("top", yLocation);
    };

      //Cirlce cannot go past 400 or behind 6 on the X axis//
    function outOfBoundsX() {
      if (xLocation >= 400) {
        xLocation = 400;
      } else if (xLocation <= 6){
        xLocation = 6;
      }
    };
      //Circle cannot go past 400 or behind 6 on the Y axis//
    function outOfBoundsY(){
      if (yLocation >= 400) {
        yLocation = 400;
      } else if (yLocation <= 6) {
        yLocation = 6;
      }
    };
    //handles the circle passing 400 or 6 on either axis//
    function outOfBounds(){
      outOfBoundsX();
      outOfBoundsY();
    };

    function endGame() {
      clearInterval(interval);

      $(document).off();
    };
}

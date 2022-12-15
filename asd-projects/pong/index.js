/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  $(document).on('keyup', handleKeyUp); 
  $(document).on('keydown', handleKeyDown);   
  var KEY = {
    UPLR: 87,
    DOWNLR: 83,
    UPRR: 38,
    DOWNRR: 40,
  };
 // const BOARD_WIDTH = $("#board").width();
 // const BOARD_HEIGHT = $("#board").height();
  
  
  // Game Item Objects
  function ObjectMaker(id){ //THE id ARGUMENT WILL BE IN THE FORM OF "#id"
    let item = {};
    item.id = id;
    item.x = parseFloat($(id).css("left"));
    item.y = parseFloat($(id).css("top"));
    item.width = $(id).css("width");
    item.height = $(id).css("height");
    item.speedX = 0;
    item.speedY = 0;
    console.log(item);
    return item;
  }
  
  var ball = ObjectMaker("#ball");
  var leftRacket = ObjectMaker("#leftRacket");
  var rightRacket = ObjectMaker("#rightRacket");

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on();                           // change 'eventType' to the type of event you want to handle
  //startBall();
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    startBall();
    wallCollision("#ball");
  }
  
  /* 
  Called in response to events.
  */

  function handleKeyUp(){
    if(event.which === KEY.DOWNLR){
      leftRacket.speedY = 0;
      console.log("S released");
    } else if(event.which === KEY.DOWNRR){
      rightRacket.speedY = 0;
      console.log("down arrow released");
    } else if (event.which === KEY.UPLR){
      leftRacket.speedY = 0;
      console.log("W released");
    } else if(event.which === KEY.UPRR){
      rightRacket.speedY = 0; 
      console.log("up arrow released");
    }
  } 
 
  function handleKeyDown(){
    if(event.which === KEY.DOWNLR){
      console.log("S pressed");
      leftRacket.speedY = 5;
    } else if(event.which === KEY.DOWNRR){
      console.log("down arrow pressed");
      rightRacket.speedY = 5;
    } else if (event.which === KEY.UPLR){
      console.log("W pressed");
      leftRacket.speedY = -5;
    } else if(event.which === KEY.UPRR){
      console.log("up arrow pressed");
      rightRacket.speedY = -5; 
    }
  } 
 
  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function startBall(){ //NOT WORKING 
    /*ball.speedX = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
    ball.speedY = Math.random() * 400;
    ball.x = $("#ball").css("left", ball.speedX);
    ball.y = $("#ball").css("top", ball.speedY)*/
    repositionBall();
    redrawBall();
  }

  function repositionBall(){ // having everything in the startBall function wasn't working, trying seperate functions
    ball.x += ball.speedX;
    ball.y += ball.speedY;
    return ball.x;
  }

  function redrawBall(){
    ball.speedX = (Math.random() * 5 + 2) //* (Math.random() > 0.5 ? -1 : 1);
    ball.speedY = Math.random() * 2
    $("#ball").css("left", ball.x);
    $("#ball").css("top", ball.y);
  }

  function wallCollision(gameItem){
    if(gameItem === "#ball"){
      if(ball.x >= 870){
        ball.x = 870;
        ball.x = 450; //ball bounces back to center
        ball.y = 220;
      }
      if(ball.y >= 410){
        ball.y = 410;
        ball.x = 450; //ball bounces back to center
        ball.y = 220;
      }
    }
  }

  //Trouble
    function moveObject(){

    }

  



  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}

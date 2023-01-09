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
    //item.text = $(id).text();
    console.log(item);
    return item;
  }
  //making objects
  var ball = ObjectMaker("#ball");
  var leftRacket = ObjectMaker("#leftRacket");
  var rightRacket = ObjectMaker("#rightRacket");
  //var board = ObjectMaker("#board");
  //var gameOver = ObjectMaker("#gameOver");
  const BOARD_WIDTH = $("#board").width();
  const BOARD_HEIGHT = $("#board").height();
  var rightScore = $("rightBox").text();
  var leftScore =  $("leftBox").text();

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  startBall();
  
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionBall();
    wallCollision("#ball");
    racketMover(rightRacket, "#rightRacket", rightRacket);
    racketMover(leftRacket, "#leftRacket", leftRacket);
    wallCollision("#rightRacket");
    wallCollision("#leftRacket");
  }
  
  /* 
  Called in response to events.
  */

  function handleKeyUp(event){
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
 
  function handleKeyDown(event){
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
 
  
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function startBall(){ 
    ball.x = Math.random() * 200 + 100; 
    ball.y = Math.random() * 200 + 100; 
    ball.speedX = (10) * Math.random() > .5 ? 3 : -3; 
    ball.speedY = (10) * Math.random() > .5 ? 3 : -3; 
  }

  function repositionBall(){ 
    ball.x += ball.speedX;
    ball.y += ball.speedY;
    $(ball.id).css("left", ball.x); // updates the ball's x position
    $(ball.id).css("top", ball.y);  // updates the ball's y position
  }

  ///// RACKET STUFF /////
  function repositionRacket(item){
    item.y += item.speedY;
    return item.y;
  }

  function redrawRacket(id, racket){ //id should be in form of "#id"
    $(id).css("top", racket.y);
  }

  function racketMover(item, id, racket){
    repositionRacket(item);
    redrawRacket(id, racket);
  }
  ////////////////////////

  function wallCollision(gameItem){
    if(gameItem === "#ball"){
      /* if(overlap = true){
        ball.speedX *= -1;       //THIS IS THE CALL TO overlap
      } if(overlap = false){ */
      if(ball.x >= BOARD_WIDTH){
        score(leftScore, "#leftBox");
        ball.speedX *= -1;
      }
      if(ball.y >= BOARD_HEIGHT){
        ball.speedY *= -1;
      }
      if (ball.x <= 0) {
        score(rightScore, "#rightBox");
        ball.speedX *= -1;
      } 
      if (ball.y <= 0){ 
      ball.speedY *= -1; 
     } /* } */   //HERE IS overlap's CLOSING BRACKET
    }
    //rackets
    if(gameItem === "#rightRacket" || "#leftRacket"){
      if(rightRacket.y >= 340){
        rightRacket.y = 340;
      } else if(rightRacket.y <= 6){
        rightRacket.y = 6;
      }
      if(leftRacket.y >= 340){
        leftRacket.y = 340;
      } else if(leftRacket.y <= 6){
        leftRacket.y = 6;
      }
    }
  }
  //overlaping function
  function overlap(){
    if(ball.x + ball.width >= rightRacket.x){
      console.log("collided");
      return true;
    } else if(ball.x <= leftRacket.x + leftRacket.width){
      console.log("collided");
      return true;
    } else{
      return false;
    }
  }

  //scoring function
  function score(scoreID, itemID){
   scoreID = scoreID + 1;
   $(itemID).text(scoreID);
   startBall();
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}

// TODO 4: add a param for your game lib last //
(function (window, createjs, opspark, claudius) {
  console.log('index.js initialized!');

  const
    assets = opspark.assets,
    engine = opspark.V6().activateResize(),
    canvas = engine.getCanvas(),
    stage = engine.getStage(),
    textfield = assets.makeTextfield('Degrees: ');

  stage.addChild(textfield);
  console.log({ stage });
  console.log(assets);


  // try a different hex color if you want //
  const ship1 = assets.makeShip('#4286f3');
  const ship2 = assets.makeShip('#A01CF1');
  const ship3 = assets.makeShip('#A21010');
  const ship4 = assets.makeShip('#27F638');
  const ship5 = assets.makeShip('#F985E5');
  
  console.log(ship1);

  const randomColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

  //randomly positions a ship
  function randomShip(ship) {
    ship.x = Math.floor(Math.random() * (800 - 0 + 1) + 0);
    ship.y = Math.floor(Math.random() * (800 - 0 + 1) + 0);
    stage.addChild(ship);
    return ship;
  }
  //Calling 5 ships 
  randomShip(ship1);
  randomShip(ship2);
  randomShip(ship3);
  randomShip(ship4);
  randomShip(ship5);
  
  



  // TODO 5: Center the ship on the stage //
  // ship1.y = canvas.height / 2;
  //  ship1.x = canvas.offsetWidth / 2; 

  // TODO 6: Add the ship to the stage //

  // stage.children.push(ship1);

  function update(event) {
    /*
     * TODO 7: Use your game lib's getAngleDegrees to get 
     * the degrees of the angle between the ship and the 
     * mouse position, and assign it to a const called
     * degrees.
     *
     * Remember, the (x, y) location of the mouse is available
     * stage.mouseX and stage.mouseY, BUT, your getAngleDegrees()
     * method takes two points. What do you need to do to translate
     * these values such that they're packed into a point?
     */
    var mouseCenter = {
      x: stage.mouseX,
      y: stage.mouseY
    };

    function shipAngleDegrees(ship) {
      
    }


    // TODO 8: Set the ship's rotation property to the degrees //

    // ship.rotation = degrees

    /*
     * TODO 9: Uncomment the line below to update the textfield  
     * with the current angle degrees. Degrees will be a value 
     * between π and -π, or, 180 and -180.
     */
   //assets.updateText(textfield, `Degrees: ${degrees.toFixed(3)}°`, canvas);
  }

  engine
    .addTickHandlers(update)
    .activateTick();

  // TODO 3: pass your game lib last with, window.my-game-lib //
}(window, window.createjs, window.opspark, window.claudius));

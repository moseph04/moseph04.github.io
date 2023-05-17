(function(opspark, createjs, draw, _) {
  const
    button = opspark.factory.component.button,
    layout = opspark.factory.component.layout;
  
  // MENU //
  // create a namespace for the menu //
  _.set(opspark, 'factory.menu', 
  /**
   * Creates and returns the menu view.
   */
  function(game) {
    const
      canvas = game.canvas,
      width = 293,
      asset = new createjs.Container(),
      btnPlay = button('PLAY', '#5cb85c', '#4cae4c'),
      // SETTINGS BUTTON //
      // btnSettings = button('SETTINGS', '#5cb85c', '#4cae4c'),

      // = '#5cb85c', colorOver = '#4cae4c
      btnRed = button('RED', 'red', 'darkred'),
      btnGreen = button('GREEN', 'green', 'darkgreen'),
      btnYellow = button('YELLOW', 'yellow', '#9e8a06'),
      p1ctext = draw.textfield('Choose player 1 color', 'bold 20px Calibri', 'black', 'left', 'baseline', '0', '100'),
      p2ctext = draw.textfield('Choose player 2 color', 'bold 20px Calibri', 'black',),
      btnQuit = button('QUIT', '#d9534f', '#d43f3a', true);
  
      p1ctext.padding = '50px';
    function render() {
      asset.x = -width - 10;
      asset.y = 10;
      
      // roundRect: function (width, height, radius, color, strokeColor, strokeStyle, xOffset, yOffset, onShape) {
      const
        background = draw.roundRect(
          width,
          canvas.height - 20,
          4,
          '#FFF',
          '#CCC',
          1);
      asset.addChild(background);

      const controls = layout({children: [btnPlay, p1ctext, btnRed, btnGreen, btnYellow, p2ctext]});
      asset.addChild(controls);
      
      if(game.getStateName() === 'paused') {
        btnQuit.x = 10;
        btnQuit.y = background.height - btnQuit.getBounds().height - 10;
        asset.addChild(btnQuit);
      }
      
      game.stage.update();
    }

    asset.on('added', onAdded);
    function onAdded() {
      asset.off('added', onAdded);
      console.log('menu view added to stage');
      render();
    }

    return {
      asset,
      render,
      btnPlay,
      p1ctext,
      // btnSettings,
      btnRed,  
      btnGreen,
      btnYellow,   
      p2ctext,
      btnQuit,
      open() {
        return createjs.Tween.get(asset, { loop: false })
          .to({ x: 10, alpha: 1 }, 700, createjs.Ease.getPowInOut(4));
      },
      close() {
        return createjs.Tween.get(asset, { loop: false })
          .to({ x: -width - 10, alpha: 1 }, 400, createjs.Ease.getPowInOut(4));
      },
    };
  });
}(window.opspark, window.createjs, window.opspark.draw, window._));

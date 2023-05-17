(function (opspark, _) {
  // create a namespace for the lobbyMediator //
  _.set(opspark, 'playa.lobbyMediator',
    /**
     * Creates and returns the lobby mediator.
     */
    function (view, game, data) {
      const
        asset = view.asset,
        menu = view.menu;

      function onPlayClicked() {
        menu.btnPlay.off('click', onPlayClicked);
        // call init() when the menu-close Tween ends //
        menu.close().call(game.play);
        if (window.playerColor === undefined){
          window.playerColor = 'blue';
        }
      }
      // SETTINGS //
      // menu.btnSettings.on('click', onSettingsClicked);
      // function onSettingsClicked() {

      //   // window.playerColor = prompt('color?'); // WORKS //
      //   //HERE make buttons appear to choose color for ship//
      // }

      menu.btnRed.on('click', onRedClicked);
      function onRedClicked() {
          window.playerColor = 'red';


      }

      menu.btnGreen.on('click', onGreenClicked);
      function onGreenClicked() {
        window.playerColor = 'green';


      }

      menu.btnYellow.on('click', onYellowClicked);
      function onYellowClicked() {
        window.playerColor = 'yellow';


      }

      
      /*
       * Return the mediator API: Each mediator must expose its view,
       * a liquify() method used for repositioning components on screen 
       * resize, a destroy() method used to clean up any references, and 
       * methods enter(), exit(), which must return a Promise that 
       * resolves when the enter or exit sequence is complete.
       */
      return {
        view,
        liquify() {
          return view.liquify();
        },
        enter() {
          return new Promise(function (resolve, reject) {
            // see: https://createjs.com/docs/easeljs/classes/Stage.html#method_enableMouseOver 
            game.stage.enableMouseOver(20);
            game.view.addChild(asset);
            menu.open();
            view.open();
            menu.btnPlay.on('click', onPlayClicked);

            resolve();
          });
        },
        exit() {
          return new Promise(function (resolve, reject) {
            view.close()
            resolve();
          });
        },
        destroy() {
          game.view.removeChild(asset);
        }
      };
    });
}(window.opspark, window._));

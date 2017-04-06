var MarioBros = MarioBros || {}; // Namespace pattern  

MarioBros.BootState = {


  //initiate game settings
  init: function() { //built in function

    console.log('boot state running!');


    //adapt to screen size, fit all the game   // this will need to be changed depending on our game

    // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // this.scale.pageAlignHorizontally = true;
    // this.scale.pageAlignVertically = true;

    this.game.physics.startSystem(Phaser.Physics.ARCADE); // sets the physics model phaser uses


    this.game.cursors = this.game.input.keyboard.createCursorKeys(); // sets up cursors for keyboard input


    // these settings will need to be adjusted 
    this.game.physics.arcade.gravity.y = 1000;

    this.game.RUNNING_SPEED = 180;
    this.game.JUMPING_SPEED = 550;

    this.game.world.setBounds(0,0,360,700);  
  },

  preload: function() { //built in function
  	this.load.spritesheet('preloadSquares', 'assets/images/squares_spritesheet.png', 120, 120, 20);
  },
  create: function() { //built in function
  	this.game.stage.backgroundColor = '#111';
  	MarioBros.game.state.start('PreloadState', true, false);  // load up next state
  }

};
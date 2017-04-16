var MarioBros = MarioBros || {};

MarioBros.GameState = {
	

  //executed after everything is loaded
  create: function() { //built in function
           
    console.log(this.game)    
    // load level data from json 
  
      //  this.game.load.text('level', 'assets/data/level-1.json'); 
      //  //parse the file

      //  this.levelData = JSON.parse(this.game.cache.getText('level'));  
    

    // ad platforms obstacles etc

    // add our player
    this.player = this.add.sprite(100, 100, 'mario');
    this.player.anchor.setTo(0.5);
    this.player.scale.setTo(2);

    // create animation from spritesheet - key [frames], framerate, loop
    this.player.animations.add('walk', [0, 1, 2, 3], 15, true);
    this.player.play('walk');

    this.game.physics.enable(this.player);

    this.player.body.collideWorldBounds = true;
    // add enemies

    console.log(this.player)

    this.player.body.bounce.y = 0.8;

    this.enemy = this.add.sprite(150, 100, 'goomba');
    this.enemy.anchor.setTo(0.5);
    this.enemy.scale.setTo(2);

    // set up camera to follow player 



    this.createOnscreenControls();
  }, 
  
  update: function() { //built in function

    //do all our updates and collision detection in here
  
    console.log('updating...')
  },

  createOnscreenControls: function() { // an example of a custom function

    console.log('create on screen controls');
               
  },
  killPlayer: function(player, enemy) { // another example of a custom function
    player.kill()
  },

};
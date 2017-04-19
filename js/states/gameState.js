var MarioBros = MarioBros || {};

MarioBros.GameState = {
	

  //executed after everything is loaded
  create: function() { //built in function
           
    console.log(this.game)    
    // load level data from json 
  

      //  //parse the file
    this.levelData = JSON.parse(this.game.cache.getText('level'));  
    
    console.log(this.levelData);
      //  this.levelData = JSON.parse(this.game.cache.getText('level'));  
    

    // add platforms obstacles etc
    this.platforms = this.add.group();
    this.platforms.enableBody = true;
     this.levelData.platformData.forEach(function(element){
      for(var i = 0; i < element.n; i++) {
       this.platforms.create(element.x + (i * 32) , element.y, element.key).scale.setTo(2);
      }
     }, this);
    // this.platforms.scale.setTo(2);
    this.platforms.setAll('body.immovable', true);
    this.platforms.setAll('body.allowGravity', false);         


    // add our player
    this.player = this.add.sprite(this.levelData.playerStart.x, this.levelData.playerStart.y, 'mario');
    this.player.anchor.setTo(0.5);
    this.player.scale.setTo(2);

    // create animation from spritesheet - key [frames], framerate, loop
    this.player.animations.add('walk', [0, 1, 2, 3], 15, true);
    this.player.play('walk');
    this.player.enableBody = true;

    this.game.physics.enable(this.player);

    this.player.body.collideWorldBounds = true;
    // add enemies

    console.log(this.player)

    this.player.body.bounce.y = 0.8;

    this.enemy = this.add.sprite(150, 100, 'goomba');
    this.enemy.anchor.setTo(0.5);
    this.enemy.scale.setTo(2);

    // Set enemy to be affected by gravity, bounds, and bounce
    this.game.physics.enable(this.enemy);
    this.enemy.body.collideWorldBounds = true;
    console.log(this.enemy);
    this.enemy.body.velocity.setTo(500, 200);
    this.enemy.body.bounce.setTo(1, 0);

    // set up camera to follow player 



    this.createOnscreenControls();
  }, 
  
  update: function() { //built in function

    //do all our updates and collision detection in here
  

  },

  render: function() { // allows us to see the debug info  
    // this.game.debug.body(this.player); // comment these out hide
    // this.game.debug.body(this.enemy);  // comment these out hide

    // this.game.debug.bodyInfo(this.enemy, 0, 20); // comment these out yo hide    
  },

  createOnscreenControls: function() { // an example of a custom function

    console.log('create on screen controls');
               
  },
  killPlayer: function(player, enemy) { // another example of a custom function
    player.kill()
  },

};
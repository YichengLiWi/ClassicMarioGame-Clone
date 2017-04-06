var MarioBros = MarioBros || {};

MarioBros.GameState = {
	

  //executed after everything is loaded
  create: function() { //built in function
           
    
    // load level data from json 
  
      //  this.game.load.text('level', 'assets/data/level-1.json'); 
      //  //parse the file

      //  this.levelData = JSON.parse(this.game.cache.getText('level'));  
    

    // ad platforms obstacles etc

    // add our player
    
    // add enemies


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
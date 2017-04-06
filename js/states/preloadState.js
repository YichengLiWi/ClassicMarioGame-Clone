var MarioBros = MarioBros || {}; // Namespace pattern  

MarioBros.PreloadState = {
  //load the game assets before the game starts images / audio etc
   
  preload: function() { //built in function

    console.log('preload state running!');



    // preloader animation possibly not working ?
  	this.preloadAnim = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadSquares', 1);
  	this.preloadAnim.animations.add('loading');
  	this.preloadAnim.play('loading', 20, true);
  	this.preloadAnim.anchor.setTo(0.5);
  	this.load.setPreloadSprite(this.preloadAnim);

    this.load.image('home', 'assets/images/super-mario-bros-e-european-cover.jpg');  // load an image for our home state 



         
	},
	create: function() { //built in function

		MarioBros.game.state.start('HomeState');

	}
};
var MarioBros = MarioBros || {}; // Namespace pattern  

MarioBros.HomeState = {
	
	create: function() { //built in function
		console.log('we are at the home state!')
		var background = this.game.add.sprite(0,0, 'home');
		background.inputEnabled = true;

		background.events.onInputDown.add(function(){ // touch or click starts the actual game

			this.state.start('GameState');
		}, this);
	}
};
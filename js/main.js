// create a variable called Platformer if that already exists then use if not then start with a new object.
var MarioBros = MarioBros || {}; // Namespace pattern  

//initiate the a game 360px by 592 with Phaser framework  
MarioBros.game = new Phaser.Game(592, 360, Phaser.AUTO, 'ld29', null, false, false); /// the last false disables anti-alias which is best for retro pixelated graphics

// these states are for different stages of game 
MarioBros.game.state.add('GameState', MarioBros.GameState);  // the actual game
MarioBros.game.state.add('HomeState', MarioBros.HomeState);  // the home page instruction from which you start game
MarioBros.game.state.add('PreloadState', MarioBros.PreloadState);  // preloads all our assets graphics / audio etc
MarioBros.game.state.add('BootState', MarioBros.BootState);
MarioBros.game.state.start('BootState');

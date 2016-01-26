function Game(){
	this.scripts = [
		'board',
		'pawn',
		'die',
		'play'
	];
	this.styles = [
		'board',
		'pawn',
		'die'
	];
}

Game.prototype.init = function(){
	this.addScripts();
	this.addStyles();
};

Game.prototype.addScripts = function(){
	for(var i in this.scripts){
		var elm = document.createElement('script');
		elm.type = 'text/javascript';
		elm.src = this.scripts[i] + '.js';
		document.head.appendChild(elm);
	}
}

Game.prototype.addStyles = function(){
	for(var i in this.styles){
		var elm = document.createElement('link');
		elm.rel = "stylesheet"; 
		elm.type="text/css";
		elm.href= this.styles[i] + '.css';
		document.head.appendChild(elm);
	}
}

game = new Game();
game.init();

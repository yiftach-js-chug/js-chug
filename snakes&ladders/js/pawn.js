function Pawn(color, board){
	this.color = color;
	this.element = null;
	this.board = board;
	this.spot = 0;
}

Pawn.prototype.init = function() {
	this.element = document.createElement('div');
	this.element.className = 'pawn ' + this.color;
	this.board.startPawn(this.element);
};

Pawn.prototype.move = function(amount) {
	this.spot += amount;
	this.board.placePawn(this.element, this.spot);
};


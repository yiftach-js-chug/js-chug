function Board(){
	this.rows = 10;
	this.cols = 10;
	this.table = document.createElement('table');
};

Board.prototype.build = function(){
	for(var row = 1; row <= this.rows; row++){
		var tr = document.createElement('tr');
		for(var col = 1; col <= this.cols; col++){
			var td = document.createElement('td');
			tr.appendChild(td);
		}
		this.table.appendChild(tr);
	}

	document.body.appendChild(this.table);
}

Board.prototype.startPawn = function(pawnElement) {
	this.table.getElementsByTagName('tr')[0].getElementsByTagName('td')[0].appendChild(pawnElement);
};

Board.prototype.placePawn = function(pawnElement, spot) {
	var row = Math.floor(spot / this.rows);
	var col = spot % this.cols;
	this.table.getElementsByTagName('tr')[row].getElementsByTagName('td')[col].appendChild(pawnElement);
};
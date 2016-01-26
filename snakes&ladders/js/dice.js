function Die(){
	this.element = null;
	this.number = null;
}

Die.prototype.init = function() {
	this.element = document.createElement('div');
	this.element.className = 'Die';
	this.roll();
	document.appendChild(this.element);
};

Die.prototype.roll = function() {
	this.number = Math.floor(Math.random() * 6) + 1;
	this.element.innerHtml = this.number;
};
function GuanYu() {
	this.s = new Sagittarius();
}

GuanYu.prototype.a = function() {
	this.s.b();
}

GuanYu.prototype.b = function() {
	this.s.a();
}

GuanYu.prototype.c = function() {
	this.s.c();
}

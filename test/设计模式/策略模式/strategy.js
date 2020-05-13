function Strategy() {

}
Strategy.prototype.tatics = function() {
	console.log("基础战术策略");
}

function StrategyA() {

}
//继承strategy
StrategyA.prototype = Object.create(Strategy.prototype);
StrategyA.prototype.tatics = function() {
	console.log("战术策略A");
}

function StrategyB() {

}
StrategyB.prototype = Object.create(Strategy.prototype);
StrategyB.prototype.tatics = function() {
	console.log("战术策略B");
}

var Calc = function(start) {
	this.add = function (x) {
		start = start + x;
		return this;
	};

	this.multiply = function (x) {
		start = start * x;
		return this;
	};

	this.equals = function(callback) {
		callback(start);
		return this;
	}
}

new Calc(0).add(2).add(3).multiply(3).equals(function(result) {
	console.log(result);
})
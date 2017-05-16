//instance - екземпляр
//Inheritance - наслідування
//classical prototypal programing
//

// classical pattern inheritance instantiation
// var Person = function() { ... }
// var john = new Person()''
//
function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};


var Person = function(name) {
	this.name = name;
}

Person.prototype.sayName = function() {
	console.log( "My name is " + this.name);
};

var john = new Person("John");
var bobby = new Person("Bobby");

john.sayName();


// new Obj
var Musician = function(name, instument) {
	//Person.call(this, name)
	Musician.super_ .call(this, name);
	this.instrument = instument;
}

inherits(Musician, Person);

//new Method for Musician obj  
Musician.prototype.getInstrument = function() {
	console.log(this.instrument);
};

var julia = new Musician("julia", "trombone");
julia.sayName();
julia.getInstrument();
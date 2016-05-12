/**
 * 继承
 */
var DP = require("./DesignPattern.js");
/*类继承
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
}
function Author(name, books) {
  Author.superclass.constructor.call(this, name);
  this.books = books;
}
DP.Extend(Author, Person);
Author.prototype.getBooks = function () {
  return this.books;
};
Author.prototype.getName = function () {
  var name = Author.superclass.getName.call(this);
  return name + ', Author of ' + this.getBooks().join(', ');
};

var hugo = new Author('hugo', ['Notre-Dame de Paris']);
console.log(hugo.getName());
console.log(hugo.getBooks());
//*/


/*原型继承
var Person = {
  name: '默认值',
  getName: function () {
    return this.name;
  }
}

var Author = DP.Clone(Person);
Author.books = []; // Default value.
Author.getBooks = function() {
  return this.books;
}
hugo = DP.Clone(Author);
hugo.name = 'hugo';
hugo.books =['Notre-Dame de Paris'];
console.log(hugo.getName());
console.log(hugo.getBooks());

//*/

/*掺元继承
var Mixin = function() {};
Mixin.prototype = {
  serialize: function() {
    var output = [];
    for(key in this) {
      output.push(key + ': ' + this[key]);
    }
    return output.join(', ');
  }
};

function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
}

DP.Augment(Person, Mixin,'serialize');
var hugo = new Person('hugo');
console.log(hugo.serialize());

//*/
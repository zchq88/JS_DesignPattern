/**
 * 继承
 */

///*类继承
function extend(subClass, superClass) {
  var F = function () {
  };
  F.prototype = superClass.prototype;
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass;

  subClass.superclass = superClass.prototype;
  if (superClass.prototype.constructor == Object.prototype.constructor) {
    superClass.prototype.constructor = superClass;
  }
}

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
extend(Author, Person);
Author.prototype.getBooks = function () {
  return this.books;
};
Author.prototype.getName = function () {
  var name = Author.superclass.getName.call(this);
  return name + ', Author of ' + this.getBooks().join(', ');
};

var hugo = new Author('hugo', ['Notre-Dame de Paris']);
hugo.getName();
hugo.getBooks()
//*/


/*原型继承

function clone(object) {
  function F() {
  }

  F.prototype = object;
  return new F;
}

var Person = {
  name: '默认值',
  getName: function () {
    return this.name;
  }
}

var Author = clone(Person);
Author.books = []; // Default value.
Author.getBooks = function() {
  return this.books;
}
hugo = clone(Author);
hugo.name = 'hugo';
hugo.books =['Notre-Dame de Paris'];
hugo.getName();
hugo.getBooks()

//*/

/*掺元继承
function augment(receivingClass, givingClass) {
  if(arguments[2]) { // Only give certain methods.
    for(var i = 2, len = arguments.length; i < len; i++) {
      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
    }
  }
  else { // Give all methods.
    for(methodName in givingClass.prototype) {
      if(!receivingClass.prototype[methodName]) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName];
      }
    }
  }
}

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

augment(Person, Mixin,'serialize');
var hugo = new Person('hugo');
hugo.serialize();

//*/
/**
 * 链式调用
 */

/*get不用callback
function Person(name) {
  var _name = name;
  this.setName = function (name) {
    _name = name;
    return this;
  };
  this.getName = function () {
    return _name
  };
}
var jordan = new Person('jordan1');
console.log(jordan.getName())
console.log(jordan.setName('Meow1').getName());
//*/

/*get用callback
function Person(name) {
  var _name = name;
  this.setName = function (name) {
    _name = name;
    return this;
  };
  this.getName = function (callback) {
    callback.call(this, _name);
    return this
  };
}

var jordan = new Person('jordan');
jordan.getName(console.log).setName('Meow').getName(console.log);
//*/
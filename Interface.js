/**
 *   接口
 */
var Interface = function (object, methods) {
  for (var i = 0, len = methods.length; i < len; i++) {
    if (typeof methods[i] !== 'string') {
      throw new Error('Interface constructor expects method names to be passed in as a string.');
    }
    object[methods[i]] = function () {
      throw new Error(this.constructor.name + ' Interface function is undefined');
    };
  }
};
function Person(name) {
  this.name = name;
  this.sayjob = function () {
    console.log('say');
    this.job();
  };
  this.sayage = function () {
    console.log('say');
    this.age();
  };
}
function creatPerson(name) {
  var object = new Person(name);
  Interface(object, ['job', 'age']);
  return object;
}
function Student(name) {
  this.__proto__ = creatPerson(name);
  this.job = function () {
    console.log('job is student');
  };
}
function creatStudent(name) {
  var object = new Student(name);
  return object;
}
var b = creatStudent('b');
b.job();
//b.age();
b.sayjob();
//b.sayage();
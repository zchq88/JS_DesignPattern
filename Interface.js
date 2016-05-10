/**
 *   接口 (增加链式调用)
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
    return this;
  };
  this.sayage = function () {
    console.log('say');
    this.age();
    return this;
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
    return this;
  };
}
function creatStudent(name) {
  var object = new Student(name);
  return object;
}
var b = creatStudent('b');

b.job()//.age();
b.sayjob()//.sayage();
//b.sayjob().sayjob();
/**
 *   接口 (增加链式调用)
 */
var DP = require("./DesignPattern.js");
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
  DP.Interface(this, ['job', 'age']);
}

function Student(name) {
  this.__proto__ = new Person(name);
  this.job = function () {
    console.log('job is student');
    return this;
  };
}

var b = new Student('b');

b.job()//.age();
b.sayjob()//.sayage();
//b.sayjob().sayjob();
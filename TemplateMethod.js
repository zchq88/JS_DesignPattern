/**
 * 模板方法
 */
var DP = require("./DesignPattern.js");

var AbstractCheck = (function () {

  _check = function () {
    this.startup();
    this.speeup();
    this.checkspeed();
    this.brake();
    this.stop();
  }
  return function AbstractCheck() {
    DP.Interface(this, ['startup', 'speeup', 'brake', 'stop']);
    this.checkspeed = function () {
      console.log("默认不检测速度");
    };
    this.check = _check;
  }
})();
function Porsche911() {
  this.__proto__ = new AbstractCheck();
  this.startup = function () {
    console.log("检测911启动");
  };
  this.speeup = function () {
    console.log("检测911加速");
  };
  this.brake = function () {
    console.log("检测911刹车");
    //检测方法标准
    console.log("911刹车合格");
  };
  this.stop = function () {
    console.log("检测911熄火");
  }
}
function Porsche781() {
  this.__proto__ = new AbstractCheck();
  this.startup = function () {
    console.log("检测781启动");
  };
  this.speeup = function () {
    console.log("检测781加速");
  };
  this.brake = function () {
    console.log("检测781刹车");
    //检测方法标准
    console.log("781刹车合格");
  };
  this.stop = function () {
    console.log("检测781熄火");
  };
  this.checkspeed = function () {
    console.log("检测781速度");
  };
}

var porsche911 = new Porsche911();
var porsche781 = new Porsche781();

porsche911.check();
porsche781.check();
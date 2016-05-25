/**
 * 策略模式
 */

var DP = require("./DesignPattern.js");
function Strategy() {
  DP.Interface(this, ['calPrice']);
}

function Nodiscount() {
  this.__proto__ = new Strategy();
  this.calPrice = function (price, num) {
    return price * num;
  }
}

function Disount1() {
  this.__proto__ = new Strategy();
  this.calPrice = function (price, num) {
    return price * num * 0.95;
  }
}

function Context(strategy) {
  var _strategy=strategy;
  this.calPrice = function (price, num) {
    return _strategy.calPrice(price, num)
  }
}

var nodiscount = new Nodiscount();
var disount1 = new Disount1();

var nodiscountContext = new Context(nodiscount);
console.log("Nodiscount策略购买3辆总金额: " + nodiscountContext.calPrice(10000,3));
var disount1Context = new Context(disount1);
console.log("disount1策略购买3辆总金额: " + disount1Context.calPrice(10000,3));
/**
 * 装饰着模式
 */

var DP = require("./DesignPattern.js");

function Icoffee() {
  DP.Interface(this, ['showCoffee', 'getPrice']);
}

function Coffee(name, price) {
  this.__proto__ = new Icoffee();
  var _name, _price;
  _name = name;
  _price = price;
  this.showCoffee = function () {
    console.log(_name + 'coffee');
  }
  this.getPrice = function () {
    return _price;
  }
}

function Decorator(Coffee) {
  var _coffee;
  _coffee = Coffee;
  this.showCoffee = function () {
    _coffee.showCoffee();
  }
  this.getPrice = function () {
    return _coffee.getPrice();
  }
}

function Sugar(Coffee) {
  this.__proto__ = new Decorator(Coffee);
  this.showCoffee = function () {
    console.log('加糖');
    this.__proto__.showCoffee();
  }
  this.getPrice = function () {
    return this.__proto__.getPrice() + 5;
  }
}

function Milk(Coffee) {
  this.__proto__ = new Decorator(Coffee);
  this.showCoffee = function () {
    console.log('加牛奶');
    this.__proto__.showCoffee();
  }
  this.getPrice = function () {
    this.__proto__.getPrice();
    return this.__proto__.getPrice() + 5;
  }
}

var coffee = new Coffee("拿铁", 20);

var sugar = new Sugar(coffee);
sugar.showCoffee();
console.log(sugar.getPrice());
console.log('--------------------------------------------');
var milk = new Milk(coffee);
milk.showCoffee();
console.log(milk.getPrice());
console.log('--------------------------------------------');
var sugarmilk = new Milk(sugar);
sugarmilk.showCoffee();
console.log(sugarmilk.getPrice());
console.log('--------------------------------------------');
var sugarmilkmilk = new Milk(sugarmilk);
sugarmilkmilk.showCoffee();
console.log(sugarmilkmilk.getPrice());
/**
 * 工厂模式
 */
var DP = require("./DesignPattern.js");

function CarFactory() {
  this.run = function () {
    console.log(this.productCar()+'启动');
  }
  DP.Interface(this, ['productCar']);
}

function PorscheFactory() {
  this.__proto__ = new CarFactory();
  this.productCar = function () {
    return '保时捷';
  }
}

function TractorFactory() {
  this.__proto__ = new CarFactory();
}

var Porsche = new PorscheFactory();
Porsche.run();


var Tractor = new TractorFactory();
Tractor.run();
/**
 * 建造者模式
 */

var DP = require("./DesignPattern.js");

function Car() {
  var _frame, _engine, _wheel;
  this.setFrame = function (val) {
    _frame = val;
  };
  this.setEngine = function (val) {
    _engine = val;
  };
  this.setWheel = function (val) {
    _wheel = val;
  };
  this.getFrame = function () {
    return _frame
  };
  this.getEngine = function () {
    return _engine
  };
  this.getWheel = function () {
    return _wheel
  };
  this.check = function () {
    console.log(_frame + '检查完毕');
    console.log(_engine + '检查完毕');
    console.log(_wheel + '检查完毕');
  };
}

//抽象生产者
function Builder() {
  DP.Interface(this, ['buildFrame', 'buildEngine', 'buildWheel', 'buildCar'])
}

//指导者,产品生产流程规范
function Director(Builder) {
  //传入具体制造者
  var _builder = Builder;
  this.build = function () {
    _builder.buildFrame();
    _builder.buildEngine();
    _builder.buildWheel();
    return _builder.buildCar();
  };
}

function Builder911() {
  this.__proto__ = new Builder();
  var _car = new Car();
  this.buildFrame = function () {
    console.log('制造911骨架');
    _car.setFrame('911骨架');
  };
  this.buildEngine = function () {
    console.log('制造911引擎');
    _car.setEngine('911引擎');
  };
  this.buildWheel = function () {
    console.log('制造911轮子');
    _car.setWheel('911轮子');
  };
  this.buildCar = function () {
    console.log('911汽车各部组装完毕');
    return _car;
  };
}

function BuilderCayma() {
  this.__proto__ = new Builder();
  var _car = new Car();
  this.buildFrame = function () {
    console.log('制造Cayma骨架');
    _car.setFrame('Cayma骨架');
  };
  this.buildEngine = function () {
    console.log('制造Cayma引擎');
    _car.setEngine('Cayma引擎');
  };
  this.buildWheel = function () {
    console.log('制造Cayma轮子');
    _car.setWheel('Cayma轮子');
  };
  this.buildCar = function () {
    console.log('Cayma汽车各部组装完毕');
    return _car;
  };
}

var builder911 = new Builder911();
var director911 = new Director(builder911);
var car911 = director911.build();
car911.check();

var builderCayma = new BuilderCayma();
var directorCayma = new Director(builderCayma);
var Cayma = directorCayma.build();
Cayma.check();
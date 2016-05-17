/**
 * 抽象工厂模式
 */

var DP = require("./DesignPattern.js");

function CPUFactory() {
  DP.Interface(this, ['createCPU']);
}

function IntelCPU() {
  this.__proto__ = new CPUFactory();
  this.createCPU = function () {
    console.log('Intel CPU');
  };
}

function AMDCPU() {
  this.__proto__ = new CPUFactory();
  this.createCPU = function () {
    console.log('AMD CPU');
  };
}

function Provider() {
  DP.Interface(this, ['createCPUFactory']);
}
function InterCPUFactory() {
  this.__proto__ = new Provider();
  this.createCPUFactory = function () {
    return new IntelCPU();
  };
}

function AMDCPUFactory() {
  this.__proto__ = new Provider();
  this.createCPUFactory = function () {
    return new AMDCPU();
  };
}

var cpufactory = new InterCPUFactory();
var IntelCpu = cpufactory.createCPUFactory();
IntelCpu.createCPU();

cpufactory = new AMDCPUFactory();
var AmdCpu = cpufactory.createCPUFactory();
AmdCpu.createCPU();
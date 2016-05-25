/**
 * 观察者模式
 */

var DP = require("./DesignPattern.js");

function Factory() {
  DP.Interface(this, ['attach', 'detach', 'nofityObserver', 'fire'])
  //添加火灾报警器
  //移除火灾报警器
  //通知报警器
  //发生火灾
}
function FireAlarm(name) {
  var _name=name
  this.rang=function(){
    console.log(_name+'：发生工厂火灾了,鸣笛');
  }
}
function PorscheFactory() {
  this.__proto__ = new Factory();
  var _alarms = [];
  this.attach = function (alarm) {
    _alarms.push(alarm);
  }
  this.detach = function (alarm) {
    _alarms.splice(_alarms.indexOf(alarm),1);
  }
  this.nofityObserver = function () {
    _alarms.forEach(function(alarm){
      alarm.rang()
    })
  }
  this.fire=function(){
    console.log('工厂着火了');
    this.nofityObserver();
  }
}

var f=new PorscheFactory();
var fireAlarm1=new FireAlarm('门卫报警器');
var fireAlarm2=new FireAlarm('消防局报警器');
var fireAlarm3=new FireAlarm('门卫报警器');
f.attach(fireAlarm1);
f.attach(fireAlarm2);
f.attach(fireAlarm3);
f.fire();
console.log('--------------------------------------');
f.detach(fireAlarm3);
f.fire();
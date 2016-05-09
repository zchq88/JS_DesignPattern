/**
 * 单体
 */
var os = require("os");
Singleton = (function () {
  var uniqueInstance; // 单例实体
  constructor = function () { // 单例初始化
    return function Singleton () {
      var count = 10;
      function initCount(){
        count = 10;
      }
      this.getCount = function () {
        return count;
      }
      this.setCount = function (value) {
        count = value;
      };
      this.init=function(){
        initCount();
      }
    };
  }();

  return {
    getInstance: function () {
      if (!uniqueInstance) { // 判断是否初始化过
        uniqueInstance = new constructor();
      }
      return  (os.type()==='Windows_NT')?uniqueInstance:undefined;//单例分支使单例有更高的兼容性
    }
  }
})();
var S=Singleton .getInstance();//懒加载，在这里开始加载和创建实例。
console.log(S.count);
console.log(S.getCount());
S.setCount(550);
console.log(S.getCount());
//S.initCount();
S.init();
console.log(S.getCount());
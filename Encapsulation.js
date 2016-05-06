/**
 *   封装
 */

var Person = (function () {
  // 静态变量
  var PersonCount = 0;
  // 静态方法
  function checkage(age) {
    var r = /^\+?[1-9][0-9]*$/;   //正整数
    return r.test(age);
  }

  return function (name, age) {
    // 私有属性.
    var name, age;
    this.getName = function () {
      return name;
    }
    this.getAge = function () {
      return age;
    }
    this.setName = function (name) {
      name = name || 'No Name';
    };
    this.setAge = function (age) {
      if (!checkage(age)) throw new Error('年龄不是一个正整数');
      age = age;
    }
    PersonCount++;
    if (PersonCount > 50) throw new Error('一个只能创建50个人');
    this.setName(name);
    this.setAge(age);
  }
})();
//测试静态变量
/*
 var Persons = [];
 for (var i = 0; i < 51; i++) {
 Persons[i] = new Person(i, i + 1);
 console.log('name:' + Persons[i].getName() + 'age:' + Persons[i].getName());
 }
 //*/
//测试封装效果
/*
 var Test = new Person("111", "1");
 console.log(Test.name);
 //*/
//测试静态函数checkage
//var TestAge =new Person("111","asd");

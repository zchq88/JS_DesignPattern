/**
 * 设计模式公用代码
 */
exports.Interface = function (object, methods) {
  for (var i = 0, len = methods.length; i < len; i++) {
    if (typeof methods[i] !== 'string') {
      throw new Error('Interface constructor expects method names to be passed in as a string.');
    }
    object[methods[i]] = function () {
      throw new Error(this.constructor.name + ' Interface function is undefined');
    };
  }
};

exports.Extend = function (subClass, superClass) {
  var F = function () {
  };
  F.prototype = superClass.prototype;
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass;

  subClass.superclass = superClass.prototype;
  if (superClass.prototype.constructor == Object.prototype.constructor) {
    superClass.prototype.constructor = superClass;
  }
}

exports.Clone = function (object) {
  function F() {
  }

  F.prototype = object;
  return new F;
}

exports.Augment = function (receivingClass, givingClass) {
  if (arguments[2]) { // Only give certain methods.
    for (var i = 2, len = arguments.length; i < len; i++) {
      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
    }
  }
  else { // Give all methods.
    for (methodName in givingClass.prototype) {
      if (!receivingClass.prototype[methodName]) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName];
      }
    }
  }
}

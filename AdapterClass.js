/**
 * 适配器模式
 */

function ChargingCord(name) {
  var _name = name || '默认：无接口'
  this.work = function () {
    console.log('使用' + _name + '接口');
  }
  this.getName = function () {
    return _name;
  }
  this.check = function (target) {
    return _name == target.getName();
  }
}

function MicroUSB() {
  this.__proto__ = new ChargingCord('MicroUSB');
}

function USBTypec() {
  this.__proto__ = new ChargingCord('USBTypec');
}

function Car(name, chargingCord) {
  var _name = name || '默认：车'
  var _chargingCord = chargingCord || new ChargingCord();
  this.getName = function () {
    return _name;
  };
  this.charge = function (target) {
    if (_chargingCord.check(target.getChargingCord())) {
      console.log(this.getName());
      _chargingCord.work();
      console.log('充电');
      target.charging();
    }
    else {
      console.log(this.getName()+"的"+_chargingCord.getName());
      console.log(target.getName()+"的"+target.getChargingCord().getName());
      console.log('接口不对无法充电');
    }
  }
}

function Porsche911() {
  this.__proto__ = new Car('Porsche911', new USBTypec());
}

function Porsche781() {
  this.__proto__ = new Car('Porsche781', new MicroUSB());
}

function Phone(name, chargingCord) {
  var _name = name || '默认：手机'
  var _chargingCord = chargingCord || new ChargingCord();
  this.getChargingCord = function () {
    return _chargingCord;
  };
  this.getName = function () {
    return _name;
  };
  this.charging = function () {
    console.log(_name);
    _chargingCord.work();
    console.log('接收');
  }
}

function IPhone() {
  this.__proto__ = new Phone('IPhone', new USBTypec());
}

function MIPhone() {
  this.__proto__ = new Phone('MIPhone', new MicroUSB());
}

function PhoneUSBTypecToMicroUSB(Phone) {
  var _USBTypec = new ChargingCord('USBTypec');
  var _MicroUSB = new ChargingCord('MicroUSB');
  if (_USBTypec.check(Phone.getChargingCord())) {
    Phone.charging = function () {
      console.log(this.getName());
      _USBTypec.work();
      console.log('转接');
      _MicroUSB.work();
      console.log('接收');
    }
    Phone.getChargingCord = function () {
      return _MicroUSB;
    };
    return Phone;
  }
  else {
    console.log('接口不对无法转换');
  }
}

function PhoneMicroUSBToUSBTypec(Phone) {
  var _USBTypec = new ChargingCord('USBTypec');
  var _MicroUSB = new ChargingCord('MicroUSB');
  if (_MicroUSB.check(Phone.getChargingCord())) {
    Phone.charging = function () {
      console.log(this.getName());
      _MicroUSB.work();
      console.log('转接');
      _USBTypec.work();
      console.log('接收');
    }
    Phone.getChargingCord = function () {
      return _USBTypec;
    };
    return Phone;
  }
  else {
    console.log('接口不对无法转换');
  }
}

function PhoneDeleteInterface(Phone){
  delete Phone.charging;
  delete Phone.getChargingCord;
  return Phone;
}

var porsche911 = new Porsche911();
var porsche781 = new Porsche781();
var iPhone = new IPhone();
var miPhone = new MIPhone();
console.log('-----------------------------------------');
porsche911.charge(iPhone);
console.log('-----------------------------------------');
porsche781.charge(miPhone);
console.log('-----------------------------------------');
porsche781.charge(iPhone);
console.log('-----------------------------------------');
porsche911.charge(miPhone);
console.log('-----------------------------------------');
PhoneMicroUSBToUSBTypec(iPhone);
console.log('-----------------------------------------');
PhoneUSBTypecToMicroUSB(miPhone);
console.log('-----------------------------------------');
porsche781.charge(PhoneUSBTypecToMicroUSB(iPhone));
console.log('-----------------------------------------');
porsche911.charge(PhoneMicroUSBToUSBTypec(miPhone));
console.log('-----------------------------------------');
porsche781.charge(PhoneDeleteInterface(iPhone));
console.log('-----------------------------------------');
porsche911.charge(PhoneDeleteInterface(miPhone));





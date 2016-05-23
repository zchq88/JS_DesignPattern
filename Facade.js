/**
 * 外观模式
 */

function CPU() {
  this.startup = function () {
    console.log("启动CPU");
  };
}
function Memory() {
  this.startup = function () {
    console.log("启动Memory");
  };
}
function Disk() {
  this.startup = function () {
    console.log("启动Disk");
  };
}
function Computer() {
  var _cpu, _memory, _disk;
  _cpu = new CPU();
  _memory = new Memory();
  _disk = new Disk();
  this.start = function () {
    _cpu.startup();
    _memory.startup();
    _disk.startup();
  }
}

computer = new Computer();
computer.start();
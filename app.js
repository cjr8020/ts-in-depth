"use strict";
console.log("------ using RxJS -------");
console.log("------ Observer pattern -------");
var Producer = (function () {
    function Producer() {
        this.listeners = [];
    }
    Producer.prototype.add = function (listener) {
        this.listeners.push(listener);
    };
    Producer.prototype.remove = function (listener) {
        var index = this.listeners.indexOf(listener);
        this.listeners.splice(index, 1);
    };
    Producer.prototype.notify = function (message) {
        this.listeners.forEach(function (listener) { return listener(message); });
    };
    return Producer;
}());
var notifier = new Producer();
var listener = function (message) { return console.log("Listerner received message: " + message); };
notifier.add(listener);
notifier.notify('Hello');

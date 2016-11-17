import Rx = require("rxjs/Rx");


console.log("------ using RxJS -------");

console.log("------ Observer pattern -------");

class Producer {

  listeners: any[];

  constructor() {
    this.listeners = [];
  }

  public add(listener: any): void {
    this.listeners.push(listener);
  }

  public remove(listener: any): void {
    var index = this.listeners.indexOf(listener);
    this.listeners.splice(index, 1);
  }

  public notify(message): void {
    this.listeners.forEach(listener => listener(message));
  }
}

const notifier = new Producer();
const listener = (message) => console.log(`Listerner received message: ${message}`);

notifier.add(listener);
notifier.notify('Hello');



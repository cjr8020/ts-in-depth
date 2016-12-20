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



console.log("-------- casting array to object ---------");


class Hero {
  id: number;
  name: string;

}

let mockheroes = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
console.log(`declare heroes array: ${mockheroes}`);
if (mockheroes instanceof Array) {
  console.log('mockheroes is an Array');
}

let a = { mockheroes };
console.log(`destructuring assignment: let a = { mockheroes };`);


if (a instanceof Array) {
  console.log("'a' is also an Array"); // nope ...
}
console.log(typeof a);

console.log('a now has a property "mockheroes" with the value of the Hero array');

for (var prop in a) {
  console.log(`property: ${prop}`);
  if (a.hasOwnProperty(prop)) {
    console.log("a." + prop + " = " + a[prop]);
  }
}

let heroes: Hero[] = a.mockheroes as Hero[];

for (let hero of heroes) {
  console.log(`hero: ${hero.name}`);
}
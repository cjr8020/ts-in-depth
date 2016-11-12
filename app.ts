
console.log("------ Decorators -------");

console.log("------ Class Decorators -------");

function observable(constructor: Function){
  console.log(`Class ${constructor.name} is being created... `);
}

@observable
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

function printable(constructorFn: Function) {
  constructorFn.prototype.print = function () {
    console.log(this);
  }
}

@printable
class Plant {
  name: string = "Green Plant";
}

const plant: Plant = new Plant();
plant.print();

console.log("------ Method Decorators -------");

function logging(value: boolean) {
  return value ? console.log('Hi'): null;
}
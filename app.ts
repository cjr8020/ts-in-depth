
console.log("------ Classes -------");


class Greeter {
  greeting: string;
  
  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return `Hello, ${this.greeting}`;
  }

}

let greeter = new Greeter("world");
console.log(greeter.greet());

console.log("------ Classes and Inheritance -------");

class Animal {
  name: string;

  constructor(aName: string) { this.name = aName; }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
    console.log("Slithering ... ");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters = 45) {
    console.log("Galloping ... ");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomeno");

sam.move();
tom.move(34);  

console.log("------ private constuctor and singleton  -------");

class Logger {

  private static _instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger._instance) {
      Logger._instance = new Logger();
    }
    return Logger._instance;
  }

  public trace(message: string) {
    console.log('[Trace] ' + message);
  }

  //  .. more methods
}

let logger = Logger.getInstance();

logger.trace("Hello World!");


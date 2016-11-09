
console.log("------ Exercise 1 -------");

class Car {

  public name: string;
  public acceleration: number = 0;

  public constructor(name: string) {
    this.name = name;
  }

  public honk(): void {
    console.log("Toooooooot!");
  }

  public accelerate(speed: number): void {
    this.acceleration = this.acceleration + speed;
  }

}

let car = new Car("BMW");
car.honk();
console.log(`car acceleration: ${car.acceleration}`);
car.accelerate(10);
console.log(`car acceleration: ${car.acceleration}`);


console.log("------ Exercise 2 -------");

class BaseObject {
  public width: number = 0;
  public length: number = 0;

  public constructor(width: number, length: number) {
    this.width = width;
    this.length = length;
  }
}

class Rectangle extends BaseObject {

  public constructor(width: number, length: number) {
    console.log("creating a Rectangle");
    super(width, length);
  }

  public calcSize(): number {
    return this.width * this.length;
  }

}

let rectangle = new Rectangle(5,2);
console.log(rectangle.calcSize());


console.log("------ Indexable Types and Objects -------");

console.log("---- movies example without object --- ");
let movies: { [index: string]: string; } = {};
movies["best-selling"] = "Lord of the rings";
movies["award-winning"] = "The Hobbit";
let movieTag: string = "best-selling";
console.log(`I like ${movieTag} movies like ${movies[movieTag]}`);


// Validators to use
let vals: { [s: string]: string; } = {};
vals["ZIP code"] = "blah";
vals["Letters only"] = "bluh";
console.log(vals["ZIP code"]);

console.log("--- readonly indeces ---");
interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray: ReadonlyStringArray = ["Alice", "Bob", "Candice"];
// myArray[3] = "Carrol";   // error
// myArray[2] = "Mallory";  // error
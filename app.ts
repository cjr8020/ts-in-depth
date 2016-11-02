let myName: string = "Blah";


// functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  console.log("Hello");
}

// multiply function with argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

// function types
let myMultiply: (val1: number, val2: number) => number;
//myMultiply = sayHello;  // won't work .. once function type is defined
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(10,2));

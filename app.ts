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

// objects

// typescript infers the object type from the declaration
// property names do matter in the context of objects, order is not important
let userData = {
  name: "Max",
  age: 27
};

// object type declaration
let userDataRedefined: { name: string, age: number } = {
  name: "Max",
  age: 27
};

// complex object
// this object has two properties - "data" and "output"
let complex: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

// new object - with the same declaration
let complex2: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 2.33, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
}

// how do I store the type definition? classes is one option.
// another option is a Type Alias
type Complex = {data: number[], output: (all: boolean) => number[]};



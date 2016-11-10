
console.log("------ Generics -------");

// simple echo function
function echo<T>(arg: T[]): T[] {

  console.log(arg.length); // 

  return arg;
}

console.log(echo(["Max", "Jane"]));
console.log(echo([27,30,11]));


console.log("------ Built-in Generics -------");

const testResults: Array<number> = [1.94, 2.33];


console.log("------ Generic Classes -------");

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x,y) { return x + y; };
console.log(myGenericNumber.add(2, 5));


let numericString = new GenericNumber<string>();
numericString.zeroValue = "";
numericString.add = function(x,y) { return x + y; };
console.log(numericString.add(numericString.zeroValue, "test"));
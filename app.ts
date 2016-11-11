
console.log("------ Indexable Types again -------");

class Car {
  public make: string;
  public constructor(make: string) {
    this.make = make;
  }
}

interface CarMap {
  [model: string]: Car;
}

let map: CarMap = {};
map["audi"] = new Car("T1");
console.log("audi: " + map["audi"].make); 

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


console.log("------ Generic Map Exercise -------");


class GenericMap<T> {
  private items: { [key: string]: T};
  
  constructor() {
    this.items = {};
  }

  setItem(key: string, item: T): void {
    this.items[key] = item;
  }

  hasKey(key: string): boolean {
    return key in this.items;
  }

  getItem(key: string): T {
    return this.items[key];
  }

  clear(): void {
    this.items = {};
  }

  private valuesToArray<T>( obj: { [key: string]: T; } | { [key: number]: T; } ): T[] {
    return Object.keys(obj).map(key => obj[key]);
  }

  printMap(): void {

    // get the keys of 'this.items': "apples, bananas"
    let keys: string[] = Object.keys(this.items);
    console.log(`
      keys: ${keys}
    `);

    // call map on keys array, where callback fn generates values array
    let mappedValues: T[] = keys.map(key => this.items[key]);
    console.log(`
      mappedValues: ${mappedValues}
    `);

    // use valuesToArray(..) private method
    console.log(`
      valuesToArray: ${this.valuesToArray(this.items)}
    `);

    for(let key of keys){
      console.log(`key[${key}<=>value[${this.items[key]}]]`);    
    }

  }

    
}

const numberMap = new GenericMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
console.log("hasKey('bananas'): " + numberMap.hasKey('bananas'));
console.log("getItem('bananas): " + numberMap.getItem('bananas'));

const stringMap = new GenericMap<string>();
stringMap.setItem('name', 'Max');
stringMap.setItem('age', '27');
stringMap.printMap();
console.log("hasKey('bananas'): " + stringMap.hasKey('bananas'));
console.log("hasKey('name'): " + stringMap.hasKey('name'));
console.log("getItem('name'): " + stringMap.getItem('name'));
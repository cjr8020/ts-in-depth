
console.log("------ Intefaces -------");

console.log("--- optional properties ---");

interface SquareConfig {
  width: number;
  color?: string;
}

function createSquare(config: SquareConfig): {width: number, color: string} {
  let newSquare = {width: 100, color: "white" };

  if (config.color){
    newSquare.color = config.color;
  }

  return newSquare;
}

let mySquare = createSquare({width: 100});
console.log("mySquare: " + mySquare);

console.log("--- indexable type to define unknown property");

interface NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
}

function greet(person: NamedPerson): void {
  console.log(`Hello ${person.firstName}`);
}

function changeName(person: NamedPerson, newName: string): void {
  person.firstName = newName;
}

let max: NamedPerson = {
  firstName: "Max",
  hobbies: ["Cooking", "Sports"]
};

greet(max);
changeName(max, "Anna");
greet(max);
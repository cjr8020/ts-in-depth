console.log('------------ ARROW FUNCTIONS ------------');


let incrFunction = (x) => x + 1;
console.log('increment 2: ' + incrFunction(2));

function Person(age) {
  console.log("'this' typeof: " + typeof this);
  this.age = age;
  this.growOld = () => {
    this.age++;
  }
}


let person: any  = new Person(1);
setTimeout(person.growOld, 1000);

setTimeout(
  function() {
    console.log(person.age); // 1, but should have been 2
  },
  2000
); 
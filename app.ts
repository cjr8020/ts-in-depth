
console.log("Default Parameters");

const countdown = (start: number): void => {
  while (start > 0) {
    start--;
  };
  console.log("Done!", start);
};
countdown(10);


console.log("Rest Parameters");

function makeArray(...args: number[]) {
  return args;
}
console.log(makeArray(1, 2, 6, 7));



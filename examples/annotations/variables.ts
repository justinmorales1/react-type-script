const apples: number = 5;


let orange = "orange";


let colors: string[] = ['green', 'black'];


let point: {x:number, y:number} = {
  x: 10,
  y: 20
}

//Right after logNumber: we are telling what types are getting passed in for the args and what type values are getting returned.
// (i: number) is the type of value that is going to be assigned. void is what type value is getting returned.
const logNumber: (i: number) => void = (i: number) => {

  console.log(i)
  return i;
}

logNumber(apples)


//When to use annotation
// 1) Functions that returns the 'any' type

const json = '{"x" 10, "y":20}'

const coordinates: {x: number, y: number} = JSON.parse(json);

console.log(coordinates);

// 2) When you delcare a variable on one line and then initialize it on a different line

let words = ['red', 'green', 'blue'];

let foundWords: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWords = true;
  }
}

// 3) When we want a variable to have a type that can't be inferred

let number = [-10,-1,12];
let numbersAboveZero: boolean | number = false;

for ( let i = 0; i < number.length; i++) {
  if ( number[i] > 0) {
    numbersAboveZero = number[i]
  }
}
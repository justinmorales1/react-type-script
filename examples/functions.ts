
// TS only cares about the types. It does not care about the logic. You could return a - b and TS Compiler would not care.
const add = (a: number,b: number) : number => {
  return a + b;
}

// Its important to use an annotation. TS is infering that subtract is returning a string at this point
const subtract = (a: number,b: number)  => {
  return a + "blue";
}

// Its important to use an annotation. TS is infering that this function is returning void.
const multiplys= (a: number,b: number)  => {
  a * b;
}


function divide( a: number, b: number) : number {
  return a/b;
}

const multiply = function(a : number, b: number) : number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
}


const forCast = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast: {date: Date, weather: string}) : void => {
  console.log(forecast.date)
  console.log(forecast.weather)
}

//es2015 destructing. The destructuring is on the right and the annotaitons are on the left of the colon.
const logWeatherES2015 = ({date, weather} : {date: Date, weather: string}) => {
  console.log(date)
  console.log(weather)
}

logWeather(forCast);
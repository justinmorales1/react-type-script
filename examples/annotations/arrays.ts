
const carMakers = ['ford', 'toyota', 'chevy',2,(): string =>{return "green"}];

const dates: Date[] = [new Date(), new Date()];

const carbrands = ['ford', 'toyota', 'chevy'];


carbrands.map((car: string) : string => {
  return car.toLocaleLowerCase();
})


// Flexible types

const importantDates: (Date | string)[] = [new Date(), '2030-02-10'];

importantDates.push('2030-02-10');

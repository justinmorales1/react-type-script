// Tuples are an array-like structure where each element represents some property of a record. 

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// Because the values are inside the brackets, it makes this a tuple. Now you cant change the order of the values
const pepsi: [string, boolean, number] = ['brown', true, 40];

type Drink = [string, boolean, number];

// This tuple is the same as pepsi but we set the type as Drink
const sprite: Drink = ['clear', true, 40];

import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"



const numbersCollection = new NumbersCollection([10,23,-1,5,99]);
const sorter = new Sorter(numbersCollection)
sorter.sort();


console.log(numbersCollection.data)
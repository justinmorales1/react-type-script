import { User } from "./models/User";
import axios from "axios";

const user = new User({name: "Elvira", age: 30});



user.save();


// user.set({name: "Elvira", age: 31})

// console.log(user.get('name'))
// console.log(user.get("age"))


// user.on('change', () => {
//   console.log("Change number 1")
// })

// user.on('change', () => {
//   console.log("Change number 2")
// })


// user.on('save', () => {
//   console.log("It was saved")
// })

// user.trigger('change')

// console.log(user)

// axios.post('http://localhost:3000/users', {
//   name: "Justin",
//   age: 30
// })

// axios.get('http://localhost:3000/users/1')
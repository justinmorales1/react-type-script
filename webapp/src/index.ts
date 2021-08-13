import { User } from "./models/User";
import axios from "axios";

const user = new User({name: "Elvira", age: 30});


console.log(user.get('name'))

user.on('change', () => {
  console.log("User was changed");
})

user.trigger('change')
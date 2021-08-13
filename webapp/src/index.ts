import { User } from "./models/User";
import axios from "axios";

const user = User.buildUser({id: 3});




user.on('change', () => {
  console.log(user);
})

user.fetch();
import { User, UserProps } from "./models/User";
import axios, { AxiosResponse } from "axios";
import { Collection } from "./models/Collection";
// axios.get('http://localhost:3000/users').then((response: AxiosResponse) => {
//   console.log(response.data)
// })

const collection = User.buildUserCollection();


collection.on('change', () => {
  console.log(collection)
});

collection.fetch();
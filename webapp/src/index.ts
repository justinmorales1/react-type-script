import { UserForm } from "./views/UserForms";
import { User } from "./models/User";

const user = User.buildUser({name: "Stewie", age: 11})

const root = document.getElementById('root');

if (root) {
  const userForm = new UserForm(root,user);
  userForm.render();
} else {
  throw new Error('The root element was not found');
}



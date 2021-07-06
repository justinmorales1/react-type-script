import { Child, ChildAsFC } from './Child';




const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log("I was clicked")}>
            The Child
         </ChildAsFC>
};

export default Parent;
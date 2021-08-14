import { Todo, FetchTodosAction } from '../actions';
import { ActionTypes } from '../actions/types';

export const todosReducer = (state: Todo[] =  [], action: FetchTodosAction) => {
  switch(action.type) {
    case ActionTypes.fetchTodos:
      return action.paylod;
    // case ActionTypes.fetchTodos:
    //   return 5;
    default:
      return state;
  }
}
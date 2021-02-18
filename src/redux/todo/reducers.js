import * as Actions from "./actions";
import initialState from "../../store/initialState";

export const TodosReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case Actions.GET_TODOS:
      return {
        ...state,
        tasks: [...action.payload],
      };
    case Actions.CREATE_TODO:
      return {
        ...state,
        tasks: [...action.payload],
      };
    case Actions.DELETE_TODOS:
      return {
        ...state,
        tasks: [...action.payload],
      };
    case Actions.EDIT_TODOS:
      return {
        ...state,
        tasks: [...action.payload],
      };
    default:
      return state;
  }
};

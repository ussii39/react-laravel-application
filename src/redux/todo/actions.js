export const GET_TODOS = "GET_TODOS";

export const TodosAction = (todos) => {
  return {
    type: "GET_TODOS",
    payload: todos,
  };
};

export const CREATE_TODO = "CREATE_TODO";

export const CreateTodosAction = (todos) => {
  return {
    type: "CREATE_TODO",
    payload: todos,
  };
};

export const DELETE_TODOS = "DELETE_TODOS";

export const DeleteTodosAction = (todos) => {
  return {
    type: "DELETE_TODOS",
    payload: todos,
  };
};

export const EDIT_TODOS = "EDIT_TODOS";

export const EditTodosAction = (todos) => {
  return {
    type: "EDIT_TODOS",
    payload: todos,
  };
};

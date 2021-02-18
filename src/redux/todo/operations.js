import { push } from "connected-react-router";
import {
  DeleteTodosAction,
  TodosAction,
  EditTodosAction,
  CreateTodosAction,
} from "./actions";
import axios from "axios";

export const GetTodos = () => {
  return async (dispatch) => {
    axios
      .get("http://127.0.0.1:8000/api/tasks/", {
        headers: {
          Authorization: "Token ee999896ab08baa3375d9da9298be609fb653702",
        },
      })
      .then((response) => {
        const todos = response.data;
        console.log(response.data);
        dispatch(TodosAction(todos));
      });
  };
};

export const CreateTodos = (task) => {
  return async (dispatch, getState) => {
    axios
      .post(`http://127.0.0.1:8000/api/tasks/`, task, {
        headers: {
          Authorization: "Token ee999896ab08baa3375d9da9298be609fb653702",
        },
      })
      .then((res) => {
        const previousval = getState().todos.tasks;
        const data = [...previousval, res.data];
        dispatch(CreateTodosAction(data));
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
};

export const Deletetodos = (id) => {
  return async (dispatch, getState) => {
    axios
      .delete(`http://127.0.0.1:8000/api/tasks/${id}/`, {
        headers: {
          Authorization: "Token ee999896ab08baa3375d9da9298be609fb653702",
        },
      })
      .then((res) => {
        const previousvalue = getState().todos.tasks;
        const nextvalue = previousvalue.filter((todo) => todo.id !== id);
        dispatch(DeleteTodosAction(nextvalue));
      });
  };
};

export const EditTodos = (task) => {
  return async (dispatch, getState) => {
    const newDate = new Date();
    const newtaskData = {
      title: task.title,
      updated_at: newDate,
    };
    axios
      .put(`http://127.0.0.1:8000/api/tasks/${task.id}/`, newtaskData, {
        headers: {
          Authorization: "Token ee999896ab08baa3375d9da9298be609fb653702",
        },
      })
      .then((res) => {
        const preedittodos = getState().todos.tasks;
        const nextedittodo = preedittodos.map((prev) =>
          prev.id === task.id ? res.data : prev
        );
        dispatch(EditTodosAction(nextedittodo));
      });
  };
};

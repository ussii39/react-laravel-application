//rafce
import React, { useCallback, useEffect, useState } from "react";
import Home from "./Home";
import About from "./About";
import { withRouter, history } from "react-router";
import { push } from "connected-react-router";
import { Link, RouteComponentProps } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  GetTodos,
  Deletetodos,
  EditTodos,
  CreateTodos,
} from "../redux/todo/operations";
import { getTodo } from "../redux/todo/selectors";

const DjangoAPIFetch = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  const todos = getTodo(selector);

  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState({ id: "", title: "" });

  const [selectedTask, setSelectedTask] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    dispatch(GetTodos());
    //   axios
    //     .get("http://127.0.0.1:8000/api/tasks/", {
    //       headers: {
    //         Authorization: "Token ee999896ab08baa3375d9da9298be609fb653702",
    //       },
    //     })
    //     .then((response) => {
    //       setTasks(response.data);
    //     });
  }, []);

  // const getTasks = () => {
  //   console.log(id);
  //   axios
  //     .get(`http://127.0.0.1:8000/api/tasks/${id}/`, {
  //       headers: {
  //         Authorization: "Token ee999896ab08baa3375d9da9298be609fb653702",
  //       },
  //     })
  //     .then((response) => setSelectedTask(response.data));
  // };

  // const deleteTasks = (id) => {
  //   console.log(id);
  //   axios
  //     .delete(`http://127.0.0.1:8000/api/tasks/${id}/`, {
  //       headers: {
  //         Authorization: "Token ee999896ab08baa3375d9da9298be609fb653702",
  //       },
  //     })
  //     .then((response) => {
  //       setTasks(tasks.filter((task) => task.id !== id));
  //       setSelectedTask([]);
  //     });
  // };

  // const postTask = (task) => {
  //   console.log(task);
  //   const data = { title: task.title };
  //   axios
  //     .post(`http://localhost:8000/api/tasks/`, data, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Token ee999896ab08baa3375d9da9298be609fb653702",
  //       },
  //     })
  //     .then((response) => setTasks([...tasks, response.data]));
  // };

  // const EditTasks = (task) => {
  //   axios
  //     .put(`http://localhost:8000/api/tasks/${task.id}/`, task, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Token ee999896ab08baa3375d9da9298be609fb653702",
  //       },
  //     })
  // .then((res) => {
  //       setTasks(
  //         tasks.map((task) => (task.id === editTask.id ? res.data : task))
  //       );
  //       setEditTask({ id: "", title: "" });
  //     });
  // };

  const handleInputChange = useCallback(
    (e) => {
      const vlaue = e.target.value;
      const name = e.target.name;
      setEditTask({ ...editTask, [name]: vlaue });
    },
    [editTask]
  );

  return (
    <div>
      {todos.map((task) => (
        <div key={task.id}>
          <div>
            {task.title}
            <button
              type="button"
              onClick={() => {
                dispatch(Deletetodos(task.id));
              }}
            >
              削除
            </button>

            <Link to={"/home/" + task.id}>ホームへ</Link>
            <Link to={"/about"}>aboutへ</Link>

            <button
              type="button"
              onClick={() => {
                setEditTask(task);
              }}
            >
              編集
            </button>
          </div>
        </div>
      ))}

      {editTask.id ? (
        <button
          type="button"
          onClick={() => {
            dispatch(EditTodos(editTask));
            setEditTask({ id: "", title: "" });
          }}
        >
          編集を完了する
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            dispatch(CreateTodos(editTask));
            setEditTask({ id: "", title: "" });
          }}
        >
          新規作成
        </button>
      )}
      <input
        type="text"
        name="title"
        value={editTask.title}
        onChange={handleInputChange}
      />
    </div>
  );
};

//イベントが発生したinput要素のname属性をstate名として、value属性をstate値として扱っている。
//stateを一元処理することになるわけである。

export default DjangoAPIFetch;

//rafce
import React, { useEffect, useState } from "react";
import axios from "axios";

const DjangoAPIFetch = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState({ id: "", title: "" });

  const [selectedTask, setSelectedTask] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/tasks/", {
        headers: {
          Authorization: "Token ee999896ab08baa3375d9da9298be609fb653702",
        },
      })
      .then((response) => {
        setTasks(response.data);
      });
  }, []);

  const getTasks = () => {
    console.log(id);
    axios
      .get(`http://127.0.0.1:8000/api/tasks/${id}/`, {
        headers: {
          Authorization: "Token ee999896ab08baa3375d9da9298be609fb653702",
        },
      })
      .then((response) => setSelectedTask(response.data));
  };

  const deleteTasks = (id) => {
    console.log(id);
    axios
      .delete(`http://127.0.0.1:8000/api/tasks/${id}/`, {
        headers: {
          Authorization: "Token ee999896ab08baa3375d9da9298be609fb653702",
        },
      })
      .then((response) => {
        setTasks(tasks.filter((task) => task.id !== id));
        setSelectedTask([]);
      });
  };
  const postTask = (task) => {
    console.log(task);
    const data = { title: task.title };
    axios
      .post(`http://localhost:8000/api/tasks/`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token ee999896ab08baa3375d9da9298be609fb653702",
        },
      })
      .then((response) => setTasks([...tasks, response.data]));
  };

  const EditTasks = (task) => {
    axios
      .put(`http://localhost:8000/api/tasks/${task.id}/`, task, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token ee999896ab08baa3375d9da9298be609fb653702",
        },
      })
      .then((res) => {
        setTasks(
          tasks.map((task) => (task.id === editTask.id ? res.data : task))
        );
        setEditTask({ id: "", title: "" });
      });
  };

  const handleInputChange = (e) => {
    const vlaue = e.target.value;
    const name = e.target.name;
    setEditTask({ ...editTask, [name]: vlaue });
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            {task.id}

            <button
              onClick={() => {
                deleteTasks(task.id);
              }}
            >
              <i className="fa fa-trash-alt"></i>
            </button>
            <button onClick={() => setEditTask(task)}>
              <i className="fa fa-pen"></i>
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <br />
      <button type="button" onClick={() => getTasks()}>
        送信
      </button>
      <h3>{selectedTask.title}</h3>

      <input
        type="text"
        name="title"
        value={editTask.title}
        onChange={handleInputChange}
      />
      {editTask.id ? (
        <button type="button" onClick={() => EditTasks(editTask)}>
          編集
        </button>
      ) : (
        <button type="button" onClick={() => postTask(editTask)}>
          新規作成
        </button>
      )}
    </div>
  );
};

//イベントが発生したinput要素のname属性をstate名として、value属性をstate値として扱っている。
//stateを一元処理することになるわけである。

export default DjangoAPIFetch;

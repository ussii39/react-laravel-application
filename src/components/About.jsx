import React, { useCallback, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AboutChaild from "./AboutChaild";
import Hint from "./Hint";
import axios from "axios";

const About = () => {
  const [todos, Settodos] = useState([]);
  const [value, Setvalue] = useState("");
  const [checked, Setchecked] = useState(false);
  const [editTask, setEditTask] = useState({ id: "", title: "" });

  useEffect(() => {
    axios
      .get("https://laravel-api-appliction.herokuapp.com/api/users")
      .then((res) => {
        console.log(res.data);
        Settodos(res.data);
      });
  }, []);

  const inputRef = useRef();
  const InputChange = (e) => {
    Setvalue(e.target.value);
  };

  const InputEditChange = (e) => {
    setEditTask({ ...editTask, title: e.target.value });
  };

  const CheckBoxChange = (id) => {
    Settodos(
      todos.map((t) => {
        if (t.id === id) {
          t.doing = !t.doing;
        }
        return t;
      })
    );
  };

  const Addtodo = () => {
    if (value === "") {
      return;
    }
    Settodos([
      ...todos,
      { title: value, id: Math.random() * 1000, doing: false },
    ]);
    Setvalue("");

    // inputRef.current.value = "";
  };

  const Deletetodo = (id) => {
    Settodos(todos.filter((t) => t.id !== id));
  };

  const EditTodo = (editTask) => {
    // const bb = todos.map((todo) =>
    //   todo.id === task.id
    //     ? { title: task.title, id: task.id, doing: task.doing }
    //     : todos
    // );
    todos.map((todo) => {
      Settodos((prev) =>
        prev.map((todo) => (todo.id === editTask.id ? editTask : todo))
      );
    });
    setEditTask("");
  };
  console.log(todos);
  console.log(editTask);

  return (
    <div>
      <Link to={"/"}>戻る</Link>
      <div>
        {todos.map((todo, index) => (
          <div key={todo.id}>
            <div>{todo.name}</div>
            <div>{todo.created_at}</div>
            <AboutChaild todo={todo} Deletetodo={Deletetodo} />

            <input
              type="checkbox"
              // checked={todo.doing}
              onChange={() => {
                CheckBoxChange(todo.id);
              }}
            />
            <button
              type="button"
              onClick={() => {
                setEditTask(todo);
              }}
            >
              編集をする
            </button>
            {todo.doing === true ? (
              <div>完了したタスク</div>
            ) : (
              <div>未完了のタスク</div>
            )}
          </div>
        ))}
        <input type="text" value={value} onChange={InputChange} />
        <Hint />
        <div>
          {editTask.id ? (
            <div>
              <input
                type="text"
                value={editTask.title}
                onChange={InputEditChange}
              />
              <button
                type="submit"
                disabled={!editTask.title}
                onClick={() => {
                  EditTodo(editTask);
                }}
              >
                編集を終える
              </button>
            </div>
          ) : (
            <button type="submit" disabled={!value} onClick={Addtodo}>
              追加する
            </button>
          )}
        </div>

        <br />
      </div>
    </div>
  );
};

export default About;

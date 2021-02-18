import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../redux/todo/selectors";
import { getTitle } from "../redux/todo/selectors";

import { GetTodos } from "../redux/todo/operations";
import TodoItem from "./TodoItem";

const Home = (props) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const todos = getTodo(selector);

  useEffect(() => {
    dispatch(GetTodos());
  }, []);

  console.log(todos);

  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={todo.id} index={index} title={todo.title}></TodoItem>
      ))}
    </div>
  );
};

export default Home;

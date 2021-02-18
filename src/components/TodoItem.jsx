import React from "react";

const TodoItem = (props) => {
  console.log(props);
  return (
    <div>
      <div>{props.index}</div>
      <div>{props.title}</div>
    </div>
  );
};

export default TodoItem;

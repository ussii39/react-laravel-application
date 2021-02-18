import React, { useState } from "react";

const Sample = (props) => {
  const [array, setArray] = useState([
    { todo: "test1", id: 1 },
    { todo: "test2", id: 2 },
    { todo: "test3", id: 3 },
  ]);

  console.log(props);
  return (
    <div>
      {/* {props.res.map((arr, i) => (
        <div key={arr.id}>
          <div>{arr.todo}</div>
          <div>{arr.i}</div>
          <div>{props.setTasks(arr)}</div>
        </div>
      ))} */}
    </div>
  );
};

export default Sample;

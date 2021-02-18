import React from "react";

const AboutChaild = ({ todo, Deletetodo }) => {
  return (
    <div>
      <button
        type="submit"
        onClick={() => {
          Deletetodo(todo.id);
        }}
      >
        削除
      </button>
    </div>
  );
};

export default AboutChaild;

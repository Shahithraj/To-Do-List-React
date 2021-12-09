import React from "react";
import "../App.css";

const TodoList = (props) => {
  return (
    <div
      className="delete"
      onClick={() => {
        props.deleteitem(props.id);
      }}
    >
      <li className="text">{props.text}</li>
    </div>
  );
};

export default TodoList;

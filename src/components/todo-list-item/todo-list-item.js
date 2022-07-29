import React from "react";
import "./todo-list-item.css";

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "red" : "black",
  };
  return (
    <span className="todo-list-item">
      <span className="todo-list-item" style={style}>
        {label}
      </span>
      <button type="button" className="btn btn-outline-success">
        <i className="fa exclamation" />
      </button>
      <button type="button" className="btn btn-outline-success">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;

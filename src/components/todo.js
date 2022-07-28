import React from "react";
import TodoListItem from "./todo-list-item";
import searchPanel from "./search-panel";

const Todo = ({ todos }) => {
  const todoElements = todos.map((item) => {
    return (
      <li>
        <TodoListItem label={item.label} important={item.important} />
      </li>
    );
  });
  return (
    <div className="app-wrapper-content">
      <ul>{todoElements}</ul>
    </div>
  );
};

export default Todo;

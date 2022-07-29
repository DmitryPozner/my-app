import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import searchPanel from "../search-panel/search-panel";
import "./todo.css";
import SearchPanel from "../search-panel/search-panel";

const Todo = ({ todos }) => {
  const todoElements = todos.map((item) => {
    return (
      <li className="list-group-item">
        <TodoListItem label={item.label} important={item.important} />
      </li>
    );
  });
  return (
    <div className="app-wrapper-content">
      <SearchPanel />
      <ul className="list-group todo-list">{todoElements}</ul>
    </div>
  );
};

export default Todo;

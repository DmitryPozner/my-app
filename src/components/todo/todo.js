import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import searchPanel from "../search-panel/search-panel";
import "./todo.css";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

const Todo = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
  const todoElements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          label={item.label}
          important={item.important}
          done={item.done}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });
  return (
    <div className="app-wrapper-content">
      {/*<SearchPanel onAdd={this.addItem} />*/}
      {/*<ItemStatusFilter />*/}
      <ul className="list-group todo-list">{todoElements}</ul>
    </div>
  );
};

export default Todo;

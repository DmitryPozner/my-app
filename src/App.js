import React, { Component } from "react";
import "./styles.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Nav from "./components/nav/nav";
import Todo from "./components/todo/todo";
import Header from "./components/header/header";
import SearchPanel from "./components/search-panel/search-panel";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem("task 1"),
      this.createTodoItem("task 2"),
      this.createTodoItem("task 3"),
    ],
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }
  delItem = (id) => {
    const filtered = this.state.todoData.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todoData: filtered,
    });
  };
  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };

  toggleProp(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleDone = (id) => {
    console.log("done");
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(todoData, id, "done"),
      };
    });
  };
  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(todoData, id, "important"),
      };
    });
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    console.log(this.state.todoData);

    return (
      <div className="app-wrapper-content">
        <Header toDo={todoCount} done={doneCount} />
        <SearchPanel onAdd={this.addItem} />

        <Todo
          todos={todoData}
          onDeleted={this.delItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
      </div>
    );
  }
}

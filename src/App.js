import React, { Component } from "react";
import "./styles.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Nav from "./components/nav/nav";
import Todo from "./components/todo/todo";
import Header from "./components/header/header";
import SearchPanel from "./components/search-panel/search-panel";
import { createTodoItem } from "./utils";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      createTodoItem("task 1", ++this.maxId),
      createTodoItem("task 2", ++this.maxId),
      createTodoItem("task 3", ++this.maxId),
    ],
  };
  //
  // componentDidMount() {
  //   // fetch("httppxl plzhlorttt/vo,mrmrt")
  //   //     .then(response => response.json())
  //   //     .then(clearData => {
  //   //       this.setState({comment: clearData})
  //   //     })
  // })

  delItem = (id) => {
    const filtered = this.state.todoData.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todoData: filtered,
    });
  };
  addItem = (text) => {
    const newItem = createTodoItem(text, ++this.maxId);

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };

  toggleProp(arr, id, propName) {
    return arr.map((el) => {
      if (el.id !== id) return el;

      return { ...el, [propName]: !el[propName] };
    });
  }

  onToggleDone = (id) => {
    this.setState({
      todoData: this.toggleProp(this.state.todoData, id, "done"),
    });
  };
  onToggleImportant = (id) => {
    this.setState({
      todoData: this.toggleProp(this.state.todoData, id, "important"),
    });
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

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

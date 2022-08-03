import React, { Component } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      done,
      important,
    } = this.props;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " todo-list-item-done";
    }
    if (important) {
      classNames += " todo-list-item-important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item" onClick={onToggleDone}>
          {label}
        </span>
        <button
          type="button"
          className="btn btn-success"
          onClick={onToggleImportant}
        >
          <FiAlertCircle size={16} />
        </button>
        <button type="button" className="btn btn-danger" onClick={onDeleted}>
          <FaTrashAlt size={16} />
        </button>
      </span>
    );
  }
}

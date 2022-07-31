import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };

  onMarkImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important,
      };
    });
  };

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item";
    if (done) {
      classNames += "-done";
    }
    if (important) {
      classNames += "-important";
    }
    return (
      <span className={classNames}>
        <span className="todo-list-item" onClick={this.onLabelClick}>
          {label}
        </span>
        <button
          type="button"
          className="btn btn-success"
          onClick={this.onMarkImportant}
        >
          !
        </button>
        <button type="button" className="btn btn-danger">
          Remove
        </button>
      </span>
    );
  }
}

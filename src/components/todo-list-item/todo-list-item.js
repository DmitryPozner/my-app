import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  constructor() {
    super();

    this.onLabelClick = () => {
      console.log(`Done ${this.props.label}`);
    };
  }

  render() {
    const { label, important } = this.props;
    const style = {
      color: important ? "red" : "black",
    };
    return (
      <span className="todo-list-item">
        <span
          className="todo-list-item"
          style={style}
          onClick={this.onLabelClick}
        >
          {label}
        </span>
        <button type="button" className="btn btn-success">
          Done
          <i className="fa exclamation" />
        </button>
        <button type="button" className="btn btn-danger">
          Remove
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

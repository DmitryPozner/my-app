import React, { Component, useState } from "react";
import "./search-panel.css";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

export default class SearchPanel extends Component {
  render() {
    return (
      <div className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Type a new task"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => this.props.onAdd("Hello")}
        >
          Add item
        </button>
      </div>
    );
  }
}

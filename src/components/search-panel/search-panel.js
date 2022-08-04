import React, { Component, useState } from "react";
import "./search-panel.css";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

export default class SearchPanel extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.label);
    this.setState({
      label: e.target.value,
    });
  };

  render() {
    return (
      <form className="input-group" onSubmit={this.onSubmit}>
        <input
          type="search"
          className="form-control rounded"
          placeholder="Type a new task"
          aria-label="Search"
          aria-describedby="search-addon"
          value={this.state.label}
          onChange={this.onLabelChange}
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={this.onSubmit}
        >
          Add item
        </button>
      </form>
    );
  }
}

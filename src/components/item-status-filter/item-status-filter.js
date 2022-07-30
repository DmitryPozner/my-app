import "./item-status-filter.css";
import { Component } from "react";

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="btn-group">
        <button type="button" className="btn item-status-filter">
          All
        </button>
        <button type="button" className="btn item-status-filter">
          Active
        </button>
        <button type="button" className="btn item-status-filter">
          Done
        </button>
      </div>
    );
  }
}

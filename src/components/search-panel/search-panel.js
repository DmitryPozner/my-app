import "./search-panel.css";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

const SearchPanel = () => {
  return (
    <div className="search-panel">
      <input placeholder="Enter task" />
      <ItemStatusFilter />
    </div>
  );
};

export default SearchPanel;

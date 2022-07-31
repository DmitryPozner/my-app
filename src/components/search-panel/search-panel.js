import "./search-panel.css";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

const SearchPanel = () => {
  return (
    <div className="input-group">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <button type="button" className="btn btn-outline-primary">
        search
      </button>

      <ItemStatusFilter />
    </div>
  );
};

export default SearchPanel;

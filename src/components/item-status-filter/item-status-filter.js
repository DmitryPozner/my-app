import "./item-status-filter.css";

const ItemStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn">
        All
      </button>
      <button type="button" className="btn">
        Active
      </button>
      <button type="button" className="btn">
        Done
      </button>
    </div>
  );
};

export default ItemStatusFilter;
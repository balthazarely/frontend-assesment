import React from "react";

export default function Input({
  changeDeadlineOrder,
  setSearchQuery,
  sortDirection,
  setSortDirection,
}) {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Filter by workers name..."
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
      />
      <div className="btn-wrapper">
        <button onClick={() => setSortDirection(!sortDirection)}>
          {sortDirection ? " Sort Deadline (newest)" : "Sort Deadline (oldest)"}
        </button>
      </div>
    </div>
  );
}

import React from "react";

export default function Input({ setSearchQuery }) {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Filter by workers name..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

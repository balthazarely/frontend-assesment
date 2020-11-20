import React from "react";
import WorkerInfoCard from "./WorkerInfoCard";

export default function List({ workOrders, searchQuery }) {
  return (
    <div className="list-container">
      {workOrders.map((workOrder) => {
        return (
          <WorkerInfoCard
            workOrder={workOrder}
            key={workOrder.id}
            searchQuery={searchQuery}
          />
        );
      })}
    </div>
  );
}

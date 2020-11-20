import React from "react";
import WorkerInfoCard from "./WorkerInfoCard";

export default function List({ workOrders }) {
  return (
    <div className="list-container">
      {workOrders.map((workOrder) => {
        return <WorkerInfoCard workOrder={workOrder} key={workOrder.id} />;
      })}
    </div>
  );
}

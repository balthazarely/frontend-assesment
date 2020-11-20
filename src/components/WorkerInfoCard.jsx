import React, { useState, useEffect } from "react";
import { convertDate } from "../ulitity/utility";
import Moment from "react-moment";

export default function WorkerInfoCard({ workOrder, searchQuery }) {
  const [worker, setWorker] = useState(null);

  async function getWorkerInfo() {
    const response = await fetch(
      `https://api.hatchways.io/assessment/workers/${workOrder.workerId}`
    );
    const workerInfo = await response.json();
    setWorker(workerInfo.worker);
  }

  useEffect(() => {
    getWorkerInfo();
  }, [setWorker]);

  const searchCards = (name) => {
    return name.includes(searchQuery);
  };

  return (
    <div>
      {worker && searchCards(worker.name) ? (
        <div className="worker-card">
          <div className="worker-card-top">
            <div className="card-header">Work Order: {workOrder.id}</div>
            <div className="card-description small">
              {workOrder.description}
            </div>
          </div>
          <div className="worker-card-bottom">
            <div className="worker-photo">
              <img src={worker.image} alt="" />
            </div>
            <div className="worker-card-info">
              <div className="worker-name">{worker.name}</div>
              <div className="worker-company small">{worker.companyName}</div>
              <div className="worker-email small">{worker.email}</div>
            </div>
          </div>
          <div className="deadline small ">
            <span className="deadline-text">DEADLINE:</span>{" "}
            {convertDate(workOrder.deadline)}
          </div>
        </div>
      ) : null}
    </div>
  );
}

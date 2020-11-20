import React, { useEffect, useState } from "react";
import { getWorkOrderAPICall } from "./api/apiCalls";
import Input from "./components/Input";
import WorkOrdersList from "./components/WorkOrdersList";
import "./styles/app.scss";

function App() {
  const [workOrders, setWorkOrders] = useState([]);

  const getWorkers = async () => {
    const fetchedWorkOrders = await getWorkOrderAPICall();
    setWorkOrders(fetchedWorkOrders);
  };

  useEffect(() => {
    getWorkers();
    console.log(workOrders);
  }, []);

  return (
    <div className="App">
      <Input />
      <WorkOrdersList workOrders={workOrders} />
    </div>
  );
}

export default App;

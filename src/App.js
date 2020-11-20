import React, { useEffect, useState } from "react";
import { getWorkOrderAPICall } from "./api/apiCalls";
import Input from "./components/Input";
import WorkOrdersList from "./components/WorkOrdersList";
import "./styles/app.scss";

function App() {
  const [workOrders, setWorkOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortDirection, setSortDirection] = useState(false);

  const getWorkers = async () => {
    const fetchedWorkOrders = await getWorkOrderAPICall();
    setWorkOrders(fetchedWorkOrders);
  };

  useEffect(() => {
    getWorkers();
  }, []);

  const changeDeadlineOrder = (workOrders) => {
    if (sortDirection) {
      return workOrders.sort((a, b) => (a.deadline > b.deadline ? 1 : -1));
    } else {
      return workOrders.sort((a, b) => (a.deadline < b.deadline ? 1 : -1));
    }
  };

  return (
    <div className="App">
      <Input
        setSearchQuery={setSearchQuery}
        changeDeadlineOrder={changeDeadlineOrder}
        setSortDirection={setSortDirection}
        sortDirection={sortDirection}
      />

      <WorkOrdersList
        workOrders={changeDeadlineOrder(workOrders)}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default App;

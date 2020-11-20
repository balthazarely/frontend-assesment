export const getWorkOrderAPICall = async () => {
  const response = await fetch(
    `https://api.hatchways.io/assessment/work_orders`
  );
  const workOrders = await response.json();
  return workOrders.orders;
};

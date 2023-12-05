import axios from "axios";

const URL_API = process.env.REACT_APP_API!;

const getOrdersByStatus = async () => {
  const promise = await axios.get(`${URL_API}/orders/status`);
  return promise
}

const ordersServices = {
  getOrdersByStatus,
}

export default ordersServices;
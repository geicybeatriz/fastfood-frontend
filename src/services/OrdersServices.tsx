import axios from "axios";

const URL_API = process.env.REACT_APP_API!;

const getOrdersByStatus = async () => {
  const promise = await axios.get(`${URL_API}/orders/status`);
  return promise
}

const getAllOrders = async () => {
  const promise = await axios.get(`${URL_API}/orders`);
  return promise;
}

const updateOrderStatusById = async (id:number, status:string) => {
  const promise = await axios.put(`${URL_API}/orders/${id}`, {status:status});
  return promise;
}

const addOrder = async (data:any) => {
  const promise = await axios.post(`${URL_API}/orders`, data);
  return promise;
}

const ordersServices = {
  getOrdersByStatus,
  getAllOrders,
  updateOrderStatusById,
  addOrder
}

export default ordersServices;
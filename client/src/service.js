import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchTasks = async () => {
  const response = await axios.get(`${baseUrl}/tasks`);
  return response.data.tasks;
};

export const addTask = async (title) => {
  const response = await axios.post(`${baseUrl}/tasks`, { title });
  return response.data.createdTask;
};

export const completeTask = async (id) => {
  const res = await axios.patch(`${baseUrl}/tasks/${id}`);
  return res.data;
};



/// Inventory
export const getInventory = async () => {
  const response = await axios.get(`${baseUrl}/inventories`);
  return response.data.inventory;
};
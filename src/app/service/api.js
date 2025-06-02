import axios from "axios";

const BASE_URL = "http://localhost:5002/v1/api/todos";

export const getTodos = () => axios.get(`${BASE_URL}`);
export const createTodos = (title) => axios.post(`${BASE_URL}`, { title });
export const updateTodos = (id, completed) =>
  axios.put(`${BASE_URL}/${id}`, { completed });
export const deleteTodos = (id) => axios.delete(`${BASE_URL}/${id}`);

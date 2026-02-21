import axios from "axios";

const BASE_URL = "http://localhost:8080/api/users";

export const registerUser = (user) =>
  axios.post(`${BASE_URL}/register`, user);

export const loginUser = (loginData) =>
  axios.post(`${BASE_URL}/login`, loginData);
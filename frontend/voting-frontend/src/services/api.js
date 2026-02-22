import axios from "axios";

const BASE_URL = "http://localhost:8080/api/users";

export const registerUser = (user) =>
  axios.post(`${BASE_URL}/register`, user);

export const loginUser = (loginData) =>
  axios.post(`${BASE_URL}/login`, loginData);
export const getProfile = (email) => {
  return axios.get(`${BASE_URL}/profile/${email}`);
};

export const getAllPolls = () =>

  axios.get(`${BASE_URL}/polls`);
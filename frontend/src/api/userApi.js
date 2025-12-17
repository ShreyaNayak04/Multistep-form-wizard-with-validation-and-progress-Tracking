import axios from "axios";

const BASE_URL = "http://localhost:2020/api/users";

export const saveUser = (userData) => {
  return axios.post(BASE_URL, userData);
};

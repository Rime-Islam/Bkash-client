import axios from "axios";

const BASE_URL = "http://localhost:5000/api"; 

const useAxios = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return api;
};

export default useAxios;

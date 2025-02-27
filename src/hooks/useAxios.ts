import axios from "axios";

const BASE_URL = "https://bikash-server-code.vercel.app/api"; 

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

import axios from "axios";

const instance = axios.create({
  baseURL: "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;

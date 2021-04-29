import axios from "axios";

export default axios.create({
  baseURL: "https://amiratias-inventorymanagement.herokuapp.com/products",
  responseType: "json",
  withCredentials: true,
});
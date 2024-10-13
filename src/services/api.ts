import axios from "axios";

const JSONPlaceholderApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
})  

export default JSONPlaceholderApi;
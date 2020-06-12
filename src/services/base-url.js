import axios from "axios";

const url = axios.create({
  baseUrl: "http://localhost:8080",
});

export default url;

import axios from "axios";

const instance = axios.create({
  baseURl: "http://localhost:5001/clone-7baf0/us-central1/api",
});

export default instance;

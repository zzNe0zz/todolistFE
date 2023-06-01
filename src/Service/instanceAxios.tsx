import axios from "axios";

const instance = axios.create({
    baseURL: 'localhost:4002/',
   
  });

  export default instance
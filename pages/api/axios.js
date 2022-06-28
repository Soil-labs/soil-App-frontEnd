import axios from "axios";
// require('dotenv').config();


// const baseURL = process.env.REACT_APP_DOMAIN_NAME
//   ? process.env.REACT_APP_DOMAIN_NAME + "/graphql"
//   : "http://localhost:5001/graphql";

 const baseURL = "https://rickandmortyapi.com/graphql"



const apiClient = axios.create({
  baseURL,
  method: "POST",
});

apiClient.interceptors.request.use(function (config) {
  // const token = localStorage.getItem("token");
  
    // config.headers["Authorization"] = "Bearer " + token;
    config.headers["Access-Control-Allow-Origin"] = "*";

  return config;
}, null);

export default apiClient;

import axios from "axios";

const client =
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_API_DOMEIN,
  })


export default client;

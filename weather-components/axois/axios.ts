import axios from "axios";

export const axoisDefault = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  timeout: 12000,
  params: {
    appid: "598b114274eec032057ce55b8b32d864",
  },
});

axoisDefault.interceptors.response.use(
  response => {
    console.log("the request successsed", response);
  },
  response => {
    console.log("request failed", response);
  }
);

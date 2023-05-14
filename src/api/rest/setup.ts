import axios, { InternalAxiosRequestConfig } from "axios";

function RequestLogger(config: InternalAxiosRequestConfig) {
  const today = new Date();
  console.log(
    `${config.method?.toUpperCase()} request sent to ${
      config.url
    } at ${today.getHours()} : ${today.getMinutes()}`
  );
  return config;
}

function ErrorLogger(error: unknown) {
  console.log(error);
}

const Server = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_REST
});

Server.interceptors.request.use(RequestLogger, ErrorLogger);

export { Server };

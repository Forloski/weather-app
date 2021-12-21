import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {};
export const httpInstance = axios.create(config);

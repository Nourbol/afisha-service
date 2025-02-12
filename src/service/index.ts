import axios from "axios";
import {HttpHeader} from "../constants/http.ts";

export const API_SERVICE = axios.create({
    baseURL: 'http://localhost:8082',
    responseType: 'json',
});

export const setAuthorizationHeader = (token: string) =>
    setDefaultHeader(HttpHeader.AUTHORIZATION, `Bearer ${token}`);

export const setDefaultHeader = (header: HttpHeader, value: string) => {
    API_SERVICE.defaults.headers.common[header] = value;
};

export const clearDefaultHeader = (header: HttpHeader) => {
    API_SERVICE.defaults.headers.common[header] = undefined;
};

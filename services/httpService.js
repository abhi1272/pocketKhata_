/* eslint-disable no-unused-vars */
import axios from 'axios';
import { BACKEND_URL_LOCAL, BACKEND_URL_PROD } from '../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HTTP_METHODS = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
  PATCH: 'patch'
};

const httpService = axios.create({
  baseURL: BACKEND_URL_PROD,
  // baseURL: BACKEND_URL_LOCAL,
  headers: {
    'Content-Type': 'application/json'
  }
});

httpService.interceptors.request.use(
  async (config) => {
    const token =  await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpService.interceptors.response.use(
  (response) => {
    // Return a successful response back to the calling function
    return response.data;
  },
  (error) => {
    // Handle any errors that occur during the request
    console.error(error);

    return Promise.reject(error);
  }
);

export async function httpCall(type, url, data, mockApi = false) {
  try {
    let options = !mockApi
      ? {}
      : {
          // baseURL: BACKEND_URL_LOCAL
          baseURL: BACKEND_URL_PROD
        };
    const resp = await getApiResultByHttpMethod(type, url, data, options);
    return resp;
  } catch (error) {
    if (error.response.status === 401) {
      window.location = 'https://pocketkhata-pwa.vercel.app/login';
      // window.location = 'http://localhost:3000/login';
    }
    return { ...error?.response, message: error?.response.data, data: null };
  }
}

async function getApiResultByHttpMethod(type, url, data, options) {
  switch (type) {
    case HTTP_METHODS.POST:
      return httpService.post(url, data, options);
    case HTTP_METHODS.GET:
      return httpService.get(url, options);
    case HTTP_METHODS.PUT:
      return httpService.put(url, data, options);
    case HTTP_METHODS.DELETE:
      return httpService.delete(url, options);
    case HTTP_METHODS.PATCH:
      return httpService.patch(url, data, options);
  }
}

import axios, { AxiosResponse } from "axios";

const text = (response: AxiosResponse | undefined) => {
  switch (response?.status) {
    case 422:
    case 429:
      return `${response.data.message}`;
    case 500:
      return `${response.statusText}\nサーバー内部エラーが発生しました。\nもう一度実行してください。`;
    default:
      return `${response?.statusText}\n不明なエラーが発生しました。`;
  }
};

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem("JWT");
  if (token) {
    // eslint-disable-next-line  no-param-reassign
    config.headers.Authorization = `JWT ${token}`;
  }
  return config;
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.setItem("JWT", "SESSION-TIME-OUT");
    } else {
      // eslint-disable-next-line no-alert
      alert(text(error.response));
    }

    return Promise.reject(error);
  },
);

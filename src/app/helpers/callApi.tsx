import axios from "axios";
import ValidationError from "../exceptions/validationErrors";

export default function callApi() {
  const axiosinstance = axios.create({
    baseURL: "http://localhost:5000/api",
  });

  axiosinstance.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      const res = error?.response;
      if (res) {
        if (res.status == 422) {
          throw new ValidationError(res.data.errors);
        }
      }

      Promise.reject(error);
    }
  );
  axiosinstance.interceptors.request.use(
    (config) => {
      return config;
    },

    (error) => {
      return Promise.reject(error);
    }
  );
  return axiosinstance;
}

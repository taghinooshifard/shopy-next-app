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

      throw error;
    }
  );
  axiosinstance.interceptors.request.use(
    (config) => {
      config.withCredentials = true;
      return config;
    },

    (error) => {
      throw error;
    }
  );
  return axiosinstance;
}

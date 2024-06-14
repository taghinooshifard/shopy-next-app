import { withFormik } from "formik";
import innerLoginForm from "./InnerLoginForm";
import * as yup from "yup";
import callApi from "@/app/helpers/callApi";
import ValidationError from "@/app/exceptions/validationErrors";
import { LoginInputValues } from "@/app/models/LoginInputValues";
const loginFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});
export interface LoginDefaultValues {
  email: string;
  setCookies: any;
}
const LoginForm = withFormik<LoginDefaultValues, LoginInputValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.email,
      password: "",
    };
  },
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login", values);
      if (res?.status == 200) {
        props.setCookies("shopy-token", res.data.token, {
          maxAge: 3600 * 24 * 30,
          domain: "localhost",
          path: "/",
        });
      }
    } catch (error: any) {
      if (error instanceof ValidationError) {
        Object.entries(error.messages).forEach(([key, value]) =>
          setFieldError(key, value as string)
        );
      }
    }
  },
  validationSchema: loginFormSchema,
})(innerLoginForm);

export default LoginForm;

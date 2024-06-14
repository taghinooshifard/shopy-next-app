import { withFormik } from "formik";
import innerLoginForm from "./InnerLoginForm";
import * as yup from "yup";
import callApi from "@/app/helpers/callApi";
import ValidationError from "@/app/exceptions/validationErrors";
import { LoginInputPhone } from "@/app/models/LoginInputPhone";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import innerLoginPhoneForm from "./InnerLoginPhoneForm";
import { log } from "console";
const RegPhone = /^(0|0098|\+98)9(0[1-5]|[1-3]\d|2[0-2]|98)\d{7}$/;
const loginFormSchema = yup.object().shape({
  phone: yup
    .string()
    .required()
    .min(8)
    .matches(RegPhone, "Phone Format is not correct."),
});
export interface LoginDefaultPhone {
  router: AppRouterInstance;
  setToken: (token: string) => void;
}
const LoginPhoneForm = withFormik<LoginDefaultPhone, LoginInputPhone>({
  mapPropsToValues: (props) => {
    return {
      phone: "",
    };
  },
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login", values);
      if (res?.status == 200) {
        console.log(res.data.token);
        props.setToken(res.data.token);
        props.router.push("/auth/login/step-two");
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
})(innerLoginPhoneForm);

export default LoginPhoneForm;

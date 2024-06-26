"use client";
import { withFormik } from "formik";
import innerRegisterForm from "./InnerRegisterForm";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import * as yup from "yup";
import callApi from "@/app/helpers/callApi";
import { RegisterInputValues } from "@/app/models/RegisterModels";
const registerFormSchema = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});
export interface RegisterDefaultValues {
  name: string;
  router: AppRouterInstance;
}
const RegisterForm = withFormik<RegisterDefaultValues, RegisterInputValues>({
  mapPropsToValues: (props) => {
    return {
      name: props.name,
      email: "",
      password: "",
    };
  },
  handleSubmit: async (values, { setFieldError, props }) => {
    try {
      const res = await callApi().post("/auth/register", values);
      if (res?.status == 201) {
        props.router.push("/auth/login");
      }
      console.log(res);
    } catch (error: any) {
      setFieldError("name", error?.message);
    }
  },
  validationSchema: registerFormSchema,
})(innerRegisterForm);

export default RegisterForm;

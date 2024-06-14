"use client";
import { withFormik } from "formik";
import innerRegisterPhoneForm from "./InnerRegisterPhoneForm";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import * as yup from "yup";
import callApi from "@/app/helpers/callApi";
import { RegisterInputPhoneValues } from "@/app/models/RegisterPhone";
const RegPhone = /^(0|0098|\+98)9(0[1-5]|[1-3]\d|2[0-2]|98)\d{7}$/;
const registerFormSchema = yup.object().shape({
  name: yup.string().required().min(2),
  phone: yup
    .string()
    .required()
    .min(8)
    .matches(RegPhone, "Phone Format is not correct."),
});
export interface RegisterDefaultValues {
  name: string;
  router: AppRouterInstance;
}
const RegisterPhoneForm = withFormik<
  RegisterDefaultValues,
  RegisterInputPhoneValues
>({
  mapPropsToValues: (props) => {
    return {
      name: props.name,
      phone: "",
    };
  },
  handleSubmit: async (values, { setFieldError, props }) => {
    try {
      const res = await callApi().post("/auth/register", values);
      if (res?.status == 201) {
        props.router.push("/auth/login-phone");
      }
      console.log(res);
    } catch (error: any) {
      setFieldError("name", error?.message);
    }
  },
  validationSchema: registerFormSchema,
})(innerRegisterPhoneForm);

export default RegisterPhoneForm;

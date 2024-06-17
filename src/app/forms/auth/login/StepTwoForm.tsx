import { withFormik } from "formik";
import * as yup from "yup";
import callApi from "@/app/helpers/callApi";
import ValidationError from "@/app/exceptions/validationErrors";
import { LoginStepTwo } from "@/app/models/LoginStepTow";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import innerStepTwoForm from "./InnerStepTwoForm";
import { storeLoginCookie } from "@/app/helpers/auth";
const stepTwoFormSchema = yup.object().shape({
  code: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "code must be number")
    .length(6),
});
export interface LoginStepTowDefault {
  router: AppRouterInstance;
  token?: string;
  clearToken: () => void;
}
const StepTwoForm = withFormik<LoginStepTowDefault, LoginStepTwo>({
  mapPropsToValues: (props) => {
    return {
      token: props.token || "",
      code: "",
    };
  },
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("auth/login/verify-phone", values);
      if (res?.status == 200) {
        await storeLoginCookie(res?.data?.user?.token);
        await props.clearToken();
        await props.router.push("/panel");
      }
    } catch (error: any) {
      if (error instanceof ValidationError) {
        Object.entries(error.messages).forEach(([key, value]) =>
          setFieldError(key, value as string)
        );
      }
    }
  },
  validationSchema: stepTwoFormSchema,
})(innerStepTwoForm);

export default StepTwoForm;

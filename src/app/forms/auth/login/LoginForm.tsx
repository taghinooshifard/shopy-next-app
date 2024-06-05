import { withFormik } from "formik";
import innerLoginForm, { LoginInputValues } from "./InnerLoginForm";
import * as yup from "yup";
const loginFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});
export interface LoginDefaultValues {
  email: string;
}
const LoginForm = withFormik<LoginDefaultValues, LoginInputValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.email,
      password: "",
    };
  },
  handleSubmit: (values) => {
    console.log(values);
  },
  validationSchema: loginFormSchema,
})(innerLoginForm);

export default LoginForm;

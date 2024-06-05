import { withFormik } from "formik";
import innerLoginForm, { LoginInputValues } from "./InnerLoginForm";
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
})(innerLoginForm);

export default LoginForm;

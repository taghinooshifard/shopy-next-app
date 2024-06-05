import { withFormik } from "formik";
import innerRegisterForm, { RegisterInputValues } from "./InnerRegisterForm";
export interface RegisterDefaultValues {
  name: string;
}
const RegisterForm = withFormik<RegisterDefaultValues, RegisterInputValues>({
  mapPropsToValues: (props) => {
    return {
      name: props.name,
      email: "",
      password: "",
    };
  },
  handleSubmit: (values) => {
    console.log(values);
  },
})(innerRegisterForm);

export default RegisterForm;

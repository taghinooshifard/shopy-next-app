import { withFormik } from "formik";
import innerRegisterForm, { RegisterInputValues } from "./InnerRegisterForm";
import * as yup from "yup";
const registerFormSchema = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});
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
  validationSchema: registerFormSchema,
})(innerRegisterForm);

export default RegisterForm;

import InputControl from "@/app/components/shared/forms/Input";
import { Form, FormikProps } from "formik";
import { AiOutlineLock, AiOutlineMail, AiOutlineSave } from "react-icons/ai";

export interface LoginInputValues {
  email: string;
  password: string;
}
export default function innerLoginForm(params: FormikProps<LoginInputValues>) {
  return (
    <Form className="max-w-sm mx-auto space-y-6 mt-8 ">
      <InputControl
        label="Your Email:"
        id="email"
        name="email"
        type="text"
        placeholder="your email..."
        icon={AiOutlineMail}
      />
      <InputControl
        label="Password:"
        id="password"
        name="password"
        type="password"
        icon={AiOutlineLock}
      />

      <div>
        <div className="relative">
          <button
            type="submit"
            className=" flex items-center justify-center gap-1 font-semibold hover:bg-blue-400  bg-blue-200 border border-gray-300 text-gray-900 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <AiOutlineSave className="w-6 h-6" />
            Login
          </button>
        </div>
      </div>
    </Form>
  );
}

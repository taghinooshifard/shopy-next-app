import InputControl from "@/app/components/shared/forms/Input";
import { LoginStepTwo } from "@/app/models/LoginStepTow";
import { Form, FormikProps } from "formik";
import { AiOutlineCheck, AiOutlinePhone } from "react-icons/ai";

export default function innerStepTwoForm(params: FormikProps<LoginStepTwo>) {
  return (
    <Form className="max-w-sm mx-auto space-y-6 mt-8 ">
      <InputControl
        label="Code:"
        id="code"
        name="code"
        type="text"
        placeholder="code..."
        icon={AiOutlinePhone}
      />

      <div>
        <div className="relative">
          <button
            type="submit"
            className=" flex items-center justify-center gap-1 font-semibold hover:bg-blue-400  bg-blue-200 border border-gray-300 text-gray-900 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            VarifyCode
            <AiOutlineCheck className="w-6 h-6" />
          </button>
        </div>
      </div>
    </Form>
  );
}

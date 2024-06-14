"use client";
import InputControl from "@/app/components/shared/forms/Input";
import { RegisterInputPhoneValues } from "@/app/models/RegisterPhone";
import { Form, FormikProps } from "formik";
import { AiOutlineSave, AiOutlineUser, AiOutlinePhone } from "react-icons/ai";

export default function innerRegisterForm(
  params: FormikProps<RegisterInputPhoneValues>
) {
  return (
    <Form className="max-w-sm mx-auto space-y-6 mt-8 ">
      <InputControl
        label="Your Name:"
        id="name"
        name="name"
        type="text"
        placeholder="your name..."
        icon={AiOutlineUser}
      />
      <InputControl
        label="Your Phone:"
        id="phone"
        name="phone"
        type="text"
        placeholder="your phone..."
        icon={AiOutlinePhone}
      />

      <div>
        <div className="relative">
          <button
            type="submit"
            className=" flex items-center justify-center gap-1 font-semibold hover:bg-blue-400  bg-blue-200 border border-gray-300 text-gray-900 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <AiOutlineSave className="w-6 h-6" />
            Register
          </button>
        </div>
      </div>
    </Form>
  );
}

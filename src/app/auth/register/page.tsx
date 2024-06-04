"use client";
import { log } from "console";
import { Field, Form, Formik } from "formik";
import {
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineSave,
  AiOutlineUser,
} from "react-icons/ai";
interface RegisterInputValues {
  name: string;
  email: string;
  password: string;
}
export default function RegisterPage() {
  const initialValues: RegisterInputValues = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: RegisterInputValues) => {
          console.log(values);
        }}
      >
        <Form className="max-w-sm mx-auto space-y-6 mt-8 ">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <AiOutlineUser className="w-5 h-5" />
              </div>
              <Field
                type="text"
                id="name"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="your name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <AiOutlineMail className="w-5 h-5" />
              </div>
              <Field
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <AiOutlineLock className="w-6 h-6" />
              </div>
              <Field
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
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
      </Formik>
    </>
  );
}

import { Form, Formik } from "formik";
import Modal from "../modal";
import { FiAlertOctagon } from "react-icons/fi";
import Spinner from "./Spinner";

interface Props {
  header: string;
  description: string;
  trueHandler: () => void;
  cancelHandler: () => void;
}

export default function DeleteConfirmation({
  header,
  description,
  trueHandler,
  cancelHandler,
}: Props) {
  return (
    <Modal isOpen={true} setIsOpen={cancelHandler} title={header}>
      <>
        <div className="flex gap-2 items-center mr-3">
          <FiAlertOctagon className="text-red-600" />
          <p className="leading-4 text-sm">{description}</p>
        </div>
        <div>
          <Formik initialValues={{}} onSubmit={trueHandler}>
            {({ isSubmitting }) => (
              <Form className="container mx-10 py-8">
                <div className="flex items-center justify-start gap-2">
                  <button
                    className="px-6 py-2 rounded-md shadow-md bg-red-600 text-white font-bold "
                    type="submit"
                  >
                    {isSubmitting && <Spinner />}
                    حذف
                  </button>
                  <button
                    onClick={cancelHandler}
                    className="px-6 py-2 rounded-md shadow-md bg-gray-300 font-semibold"
                    type="button"
                  >
                    انصراف
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </>
    </Modal>
  );
}

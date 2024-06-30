import InputControl from "@/app/components/shared/forms/Input";
import SelectBoxControl from "@/app/components/shared/forms/selectBox";
import TextAreaControl from "@/app/components/shared/forms/textArea";
import Product from "@/app/models/ProductRow";
import { Form, FormikProps } from "formik";
import Link from "next/link";
import {
  AiFillAudio,
  AiFillDownCircle,
  AiFillEuroCircle,
  AiFillGift,
} from "react-icons/ai";
type ProductFormProps = FormikProps<ProductValues> & {
  product: Product;
};
export default function innerProductForm(params: ProductFormProps) {
  return (
    <div className="flex gap-4 py-2 px-2 grid-cols-4">
      <Form>
        <InputControl
          label="نام محصول"
          id="title"
          name="title"
          type="text"
          placeholder="محصول را وارد کنید..."
          icon={AiFillGift}
        />
        <InputControl
          label="قیمت محصول"
          id="price"
          name="price"
          type="number"
          placeholder="0"
          icon={AiFillEuroCircle}
        />
        <SelectBoxControl
          label="گروه محصول"
          id="category_id"
          name="category_id"
          icon={AiFillDownCircle}
          options={[
            { label: "لطفا یکی از دسته بندی ها را انتخاب کنید", value: "" },
            { label: "جاوااسکریپت", value: 1 },
            { label: "php", value: 2 },
          ]}
        />

        <TextAreaControl
          label="درباره محصول"
          id="description"
          name="description"
          placeholder="درباره محصول"
          icon={AiFillAudio}
          onChange={(e) =>
            params.setFieldValue(
              "description",
              (e.target as HTMLTextAreaElement).value
            )
          }
        />

        <div className="flex justify-center py-5 gap-2">
          <button className="bg-blue-500 px-5 py-2 rounded-md" type="submit">
            {params?.product ? "ویرایش محصول" : "ایجاد محصول"}
          </button>
          <Link
            href={"/admin/products"}
            as={"/admin/products"}
            className="bg-red-500 px-5 py-2 rounded-md"
          >
            انصراف
          </Link>
        </div>
      </Form>
    </div>
  );
}

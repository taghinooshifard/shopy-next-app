"use client";
import ValidationError from "@/app/exceptions/validationErrors";
import { withFormik } from "formik";
import * as yup from "yup";
import innerProductForm from "./InnerProductForm";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { CreateProduct, UpdateProduct } from "@/app/services/product";
import { toast } from "react-toastify";
import { KeyedMutator } from "swr";
import Product from "@/app/models/ProductRow";

const ProducFormSchema = yup.object().shape({
  title: yup.string().required().min(5).max(255),
  price: yup.number().required().min(0).max(100000000),
  description: yup.string().required().min(5).max(6000),
  category_id: yup.number().required(),
});
export interface ProducDefaultValues {
  router: AppRouterInstance;
  mutate?: KeyedMutator<{
    data: any;
    total_page: any;
  }>;
  product: Product;
  page?: number;
}
const EditProductForm = withFormik<ProducDefaultValues, ProductValues>({
  mapPropsToValues: (props) => {
    return {
      title: props.product?.title ?? "",
      price: props.product?.price ?? 0,
      description: props.product?.body ?? "",
      category_id: props.product?.category ?? "",
    };
  },
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      await UpdateProduct(props.product.id, {
        id: props.product.id,
        title: values.title,
        price: values.price,
        body: values.description,
        category: values.category_id,
      });
      await toast.success("محصول ویرایش شد");
      if (props.mutate) await props.mutate();
      props.page
        ? props.router.push(`/admin/products?page=${props.page}`)
        : props.router.push(`/admin/products`);
    } catch (error: any) {
      if (error instanceof ValidationError) {
        Object.entries(error.messages).forEach(([key, value]) =>
          setFieldError(key, value as string)
        );
      }
      await toast.error("عملیات ویرایش دچار خطا شد");
    }
  },
  validationSchema: ProducFormSchema,
})(innerProductForm);

export default EditProductForm;

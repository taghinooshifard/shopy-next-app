"use client";
import LoadingSpinner from "@/app/components/shared/loadingSpinner";
import ValidationError from "@/app/exceptions/validationErrors";
import EditProductForm from "@/app/forms/admin/product/EditProductForm";
import Product from "@/app/models/ProductRow";
import { GetProductById } from "@/app/services/product";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import useSWR from "swr";

export default function EditProductPage({ params: { productId, page } }) {
  const router = useRouter();
  const { data, error, isLoading, mutate } = useSWR(
    { url: `/admin/products/${productId}/edit`, productId },
    GetProductById
  );

  if (error instanceof ValidationError) {
    toast.error("خطا در دریافت اطلاعات رخ داد");
    router.push("/admin/products");
  }
  return (
    <div className="flex h-screen justify-center items-center">
      {isLoading ? (
        <LoadingSpinner message="لطفا منتظر بمانید" />
      ) : (
        <fieldset className="border-2 p-5 rounded-md">
          <legend>فرم ویرایش محصول</legend>
          <EditProductForm
            router={router}
            product={data?.product as Product}
            page={page}
          />
        </fieldset>
      )}
    </div>
  );
}

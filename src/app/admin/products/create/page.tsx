"use client";
import CreateProductForm from "@/app/forms/admin/product/ProductForm";
import { selectUser } from "@/app/store/auth";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function CreateProductPage() {
  const router = useRouter();
  const user = useSelector(selectUser);
  console.log("CreateProductPage->user:", user);

  return (
    <div className="flex h-screen justify-center items-center">
      <fieldset className="border-2 p-5 rounded-md">
        <legend>فرم ایجاد محصول</legend>
        <CreateProductForm router={router} />
      </fieldset>
    </div>
  );
}

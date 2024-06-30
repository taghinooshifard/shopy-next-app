import Modal from "@/app/components/modal";
import DeleteConfirmation from "@/app/components/shared/deleteConfirmation";
import Product from "@/app/models/ProductRow";
import { DeleteProduct } from "@/app/services/product";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { KeyedMutator } from "swr";
import EditProductForm from "./EditProductForm";

interface Props {
  product: Product;
  mutate: KeyedMutator<{
    data: any;
    total_page: any;
  }>;
  page: number;
}
export default function ProductListItem({ product, mutate, page }: Props) {
  const [deleteShow, setDeleteShow] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const isOpen = () => searchParams.has(`edit-${product.id}`);
  const deleteHandler = async () => {
    try {
      await DeleteProduct(product.id);
      await toast.success("محصول با موفقیت حذف شد");
      await mutate();
      router.push(`/admin/products?page=${page}`);
    } catch (error: any) {
      await toast.error("عملیات حذف با مشکل روبرو شد");
    }
  };
  return (
    <tr key={product.id}>
      <td className="hidden">
        {deleteShow && (
          <DeleteConfirmation
            header="حذف محصول"
            description="آیا از حذف محصول اطمینان دارید؟"
            cancelHandler={() => {
              setDeleteShow(false);
            }}
            trueHandler={deleteHandler}
          />
        )}
      </td>
      <td className="hidden">
        {isOpen() && (
          <Modal
            isOpen={true}
            setIsOpen={async () => {
              await mutate();
              router.push(`/admin/products?page=${page}`);
            }}
            title="ویرایش محصول"
          >
            {/* app/forms/admin/product/CreateProductForm */}
            <EditProductForm
              router={router}
              mutate={mutate}
              product={product}
              page={page}
            />
          </Modal>
        )}
      </td>
      <th scope="col" className="px-6 py-3">
        {product.title}
      </th>
      <th scope="col" className="px-6 py-3">
        {product.category}
      </th>
      <th scope="col" className="px-6 py-3">
        {product.price}
      </th>
      <th scope="col" className="px-6 py-3">
        <Link
          href={`/admin/products/${product.id}/edit`}
          as={`/admin/products/?page=${page}&edit-${product.id}`}
          className="rounded-md px-5 py-2 bg-blue-700 text-white "
        >
          ویرایش
        </Link>
      </th>
      <th scope="col" className="px-6 py-3">
        <button
          onClick={() => {
            setDeleteShow(true);
          }}
          className="rounded-md px-5 py-2 bg-red-700 text-white"
        >
          حذف
        </button>
      </th>
    </tr>
  );
}

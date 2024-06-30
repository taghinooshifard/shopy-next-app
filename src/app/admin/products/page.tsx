"use client";
import Modal from "@/app/components/modal";
import LoadingSpinner from "@/app/components/shared/loadingSpinner";
import CreateProductForm from "@/app/forms/admin/product/ProductForm";
import Product from "@/app/models/ProductRow";
import { GetProducts } from "@/app/services/product";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";
import ReactCustomePaginate from "@/app/components/shared/reactCustomPaginate";
import EmptyList from "@/app/components/shared/emptyList";
import ProductListItem from "@/app/forms/admin/product/productListItem";

export default function AdminProduct() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const {
    data: products,
    isLoading,
    mutate,
  } = useSWR({ url: "/admin/products", page }, GetProducts);
  const isOpen = () => searchParams.has("create");

  const onPageChange = ({ selected }: { selected: number }) =>
    router.push(`/admin/products?page=${selected + 1}`);
  const queryPage = searchParams.get("page");
  useEffect(() => {
    setPage(parseInt(queryPage ?? "1"));
  }, [queryPage]);
  return isLoading ? (
    <LoadingSpinner message="درحال بارگذاری اطلاعات..." />
  ) : (
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      {/* Product Page Haeder  */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h1 className="text-2xl font-bold">لیست محصولات</h1>
          <p>در این صفحه لیست محصولات نمایش داده میشود</p>
        </div>
        {/* Buttos Show Modal */}
        <Link
          className="text-gray-600 hover:text-white bg-blue-300 hover:bg-blue-600 px-4 py-2 rounded-md"
          as="/admin/products?create"
          href={"/admin/products/create"}
        >
          اضافه کردن محصول
        </Link>
      </div>
      {/* Modal Create Product Form */}
      {isOpen() && (
        <Modal
          isOpen={isOpen()}
          setIsOpen={() => {
            router.push("/admin/products?create");
          }}
          title="ساخت محصول"
        >
          {/* app/forms/admin/product/CreateProductForm */}
          <CreateProductForm router={router} mutate={mutate} />
        </Modal>
      )}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {/* Table Product Lists */}
        {products?.data?.length > 1 ? (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  نام محصول
                </th>
                <th scope="col" className="px-6 py-3">
                  گروه محصول
                </th>
                <th scope="col" className="px-6 py-3">
                  قیمت
                </th>
                <th scope="col" className="px-6 py-3">
                  ویرایش
                </th>
                <th scope="col" className="px-6 py-3">
                  حذف
                </th>
              </tr>
            </thead>
            <tbody>
              {products?.data?.map((product: Product) => {
                return (
                  <ProductListItem
                    key={product.id}
                    product={product}
                    mutate={mutate}
                    page={page}
                  />
                );
              })}
            </tbody>
          </table>
        ) : (
          <EmptyList text="داده ای برای نمایش وجود ندارد" />
        )}

        {/* navigation  Products List*/}
        <nav aria-label="Page navigation Products">
          {products?.total_page > 1 && (
            <ReactCustomePaginate
              onPageChange={onPageChange}
              pageCount={20}
              // pageCount={products?.total_page}
              page={page}
            />
          )}
        </nav>
      </div>
    </div>
  );
}

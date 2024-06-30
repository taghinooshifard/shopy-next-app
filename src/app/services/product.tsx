import { AxiosResponse } from "axios";
import callApi from "../helpers/callApi";
import Product from "../models/ProductRow";
export async function GetProducts({ page = 1, per_page = 2 }) {
  const res = await callApi().get(
    `/products?page=${page}&per_page=${per_page}`
  );

  return { data: res?.data?.data, total_page: res?.data?.total_page };
}
export async function CreateProduct(product: Product) {
  const res = await callApi().post("/products/create", {
    ...product,
  });
  return res;
}
export async function DeleteProduct(productId: number) {
  const res = await callApi().post(`/products/${productId}/delete`, {});
  return res;
}
export async function GetProductById({ productId }: { productId: number }) {
  const res = await callApi().get(`/products/${productId}`, {});
  return res?.data;
}
export async function UpdateProduct(productId: number, product: Product) {
  const res = await callApi().post(`/products/${productId}/update`, {
    ...product,
  });
  return res;
}

"use client";
import LoginPhoneForm from "@/app/forms/auth/login/LoginPhoneForm";
import { useAppDispatch } from "@/app/hooks";
import { updatePhoneVarify } from "@/app/store/auth";
import { useRouter } from "next/navigation";
export default function RegisterPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const setPhoneVarifyToken = (token: string) => {
    dispatch(updatePhoneVarify(token));
  };
  return (
    <>
      <LoginPhoneForm router={router} setToken={setPhoneVarifyToken} />
    </>
  );
}

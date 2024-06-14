"use client";

import StepTwoForm from "@/app/forms/auth/login/StepTwoForm";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectPhoneVarify, updatePhoneVarify } from "@/app/store/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function StepTwoPage() {
  const router = useRouter();
  const token = useAppSelector(selectPhoneVarify);
  const dispatch = useAppDispatch();
  const clearToken = () => {
    dispatch(updatePhoneVarify(undefined));
  };
  useEffect(() => {
    if (token == undefined) router.push("/auth/login-phone");
  }, [token]);
  return (
    <>
      <StepTwoForm router={router} token={token} clearToken={clearToken} />
    </>
  );
}
